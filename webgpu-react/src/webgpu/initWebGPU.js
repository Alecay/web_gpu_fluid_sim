import { getDevice } from "./gpu";
import { generateNoiseMap } from "./noise";
import { getShaderText } from "./shaderBuilder";
import { defaultNoiseUISettings } from "../components/NoiseSettingsForm";
import {
  createOrUpdateTerrainColorsBuffer,
  createOrUpdateTerrainParamsBuffer,
} from "./buffers/terrainBuffer";
import { createOrUpdateViewBuffer } from "./buffers/viewBuffer";
import { createOrUpdateInputBuffer } from "./buffers/inputBuffer";
import { createOrUpdateBuffer } from "./buffers/wgslPacker";

export async function initWebGPU(
  canvas,
  noiseSettings = defaultNoiseUISettings
) {
  if (!canvas) return () => {};

  // Kill any previous loop/listeners tied to this canvas
  if (canvas.__wgpuCleanup) {
    canvas.__wgpuCleanup(); // stop old RAF, remove listeners
  }

  var updateNormals = false;
  var updateTerrainTexture = false;
  var updateShadowTexture = false;

  const device = await getDevice();
  // console.log("Using WebGPU device:", device.__id);

  const context = canvas.getContext("webgpu");
  const format = navigator.gpu.getPreferredCanvasFormat();

  canvas.style.imageRendering = "pixelated";

  // Tag the context with this device id so we can assert later
  context.__deviceId = device.__id;

  canvas.width = noiseSettings.width;
  canvas.height = noiseSettings.height;

  context.configure({
    device,
    format,
    alphaMode: "opaque",
  });

  let shaderCode = getShaderText();
  // ----- Shader -----
  const module = device.createShaderModule({
    label: "Rect Shader",
    code: shaderCode,
  });

  var mousePosition = { x: 0, y: 0 };
  var mouse0Held = false;
  var mouse1Held = false;
  var mouseRadius = 30;

  var currentTime = 0;

  const viewUniformBuffer = createOrUpdateViewBuffer(device, {
    width: noiseSettings.width,
    height: noiseSettings.height,
    time: 0,
  });

  function updateViewBuffer() {
    createOrUpdateViewBuffer(
      device,
      {
        width: noiseSettings.width,
        height: noiseSettings.height,
        time: currentTime,
      },
      viewUniformBuffer
    );
  }

  const inputUniformBuffer = createOrUpdateInputBuffer(device, {
    mousePos: mousePosition,
    mouse0Held: mouse0Held,
    mouse1Held: mouse1Held,
    mouseRadius: mouseRadius,
  });

  const terrainBuffer = createOrUpdateTerrainParamsBuffer(
    device,
    {
      maxCellValue: noiseSettings.maxCellValue,
      terrainHeightMultiplier: noiseSettings.terrainHeightMultiplier,
      colorSteps: noiseSettings.colorSteps,
    },
    noiseSettings.colors // array of hex/rgb strings you already use
  );

  const terrainColorsBuffer = createOrUpdateTerrainColorsBuffer(
    device,
    noiseSettings.colors
  );

  // ----- Mouse handling -----
  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = Math.floor((e.clientX - rect.left) * scaleX);
    const my = Math.floor((e.clientY - rect.top) * scaleY);
    mousePosition = {
      x: Math.min(Math.max(mx, 0), noiseSettings.width - 1),
      y: Math.min(Math.max(my, 0), noiseSettings.height - 1),
    };

    updateInputBuffer();
  }

  function onMouseDown(e) {
    if (e.button === 0) mouse0Held = true;
    if (e.button === 2) mouse1Held = true;

    updateInputBuffer();
  }

  function onMouseUp(e) {
    if (e.button === 0) mouse0Held = false;
    if (e.button === 2) mouse1Held = false;

    updateInputBuffer();
  }

  function onMouseScroll(e) {
    e.preventDefault(); // stop the page from scrolling

    const sign = Math.sign(e.deltaY) * -1;
    const amount = 0.1 * mouseRadius * sign;
    mouseRadius = Math.max(5, mouseRadius + amount);

    updateInputBuffer();
  }

  function preventContext(e) {
    e.preventDefault();
  }

  function updateInputBuffer() {
    createOrUpdateInputBuffer(
      device,
      {
        mousePos: mousePosition,
        mouse0Held: mouse0Held,
        mouse1Held: mouse1Held,
        mouseRadius: mouseRadius,
      },
      inputUniformBuffer
    );

    updateNormals = true;
    updateShadowTexture = true;
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);

  // Canvas mouse down to avoid clicks outside the game bounds
  canvas.addEventListener("contextmenu", preventContext);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("wheel", onMouseScroll, { passive: false });

  // Create output texture buffer
  const outputTextureBuffer = device.createBuffer({
    label: "Output Texture",
    size: noiseSettings.width * noiseSettings.height * 4 * 8,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(
    outputTextureBuffer,
    0,
    new Float32Array(noiseSettings.width * noiseSettings.height * 8)
  );

  // ----- Storage buffers (vec4f per cell => 16 bytes) -----
  const FLOATS_PER_CELL = 12;
  const BYTES_PER_CELL = 4 * FLOATS_PER_CELL;
  const cellsBufferSize =
    noiseSettings.width * noiseSettings.height * BYTES_PER_CELL;

  const prevCellsBuffer = device.createBuffer({
    label: "Prev Cells",
    size: cellsBufferSize,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  const nextCellsBuffer = device.createBuffer({
    label: "Next Cells",
    size: cellsBufferSize,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  // Initialize both (optional)
  {
    const init = new Float32Array(
      noiseSettings.width * noiseSettings.height * FLOATS_PER_CELL
    );
    const noiseData = generateNoiseMap(
      noiseSettings.seed,
      noiseSettings.width,
      noiseSettings.height,
      noiseSettings.noiseType,
      noiseSettings.fractalOctaves,
      noiseSettings.fractalLacunarity,
      noiseSettings.fractalGain,
      noiseSettings.fractalType,
      noiseSettings.frequency
    );

    for (let index = 0; index < noiseData.length; index++) {
      const cellIndex = index * FLOATS_PER_CELL;
      init[cellIndex] = noiseData[index] * 100.0;
    }

    device.queue.writeBuffer(prevCellsBuffer, 0, init);
    device.queue.writeBuffer(nextCellsBuffer, 0, init);
  }

  // ----- Bind group layouts -----
  // Compute: 0=uniform, 1=prev(read), 2=next(write)
  const stepComputeBGL = device.createBindGroupLayout({
    label: "Step Compute BGL",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
      {
        binding: 4,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
    ],
  });

  const normalComputeBGL = device.createBindGroupLayout({
    label: "Normal Compute BGL",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
    ],
  });

  const outputTextureComputeBGL = device.createBindGroupLayout({
    label: "Output Texture Compute BGL",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
      {
        binding: 4,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 5,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
    ],
  });

  // Render: 0=uniform, 1=current(read) for fragment
  const renderBGL = device.createBindGroupLayout({
    label: "Render BGL",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: "uniform" },
      },
      {
        binding: 5,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "storage" },
      },
    ],
  });

  // ----- Pipelines -----
  const renderPipeline = device.createRenderPipeline({
    label: "Render Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [renderBGL],
      label: "Render Pipeline Layout",
    }),
    vertex: { module, entryPoint: "vs" },
    fragment: { module, entryPoint: "fs", targets: [{ format }] },
    primitive: { topology: "triangle-list" },
  });

  const normalComputePipeline = device.createComputePipeline({
    label: "Normal Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [normalComputeBGL],
      label: "Normal Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "calc_normals" },
  });

  const terrainTextureComputePipeline = device.createComputePipeline({
    label: "Terrain Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [outputTextureComputeBGL],
      label: "Terrain Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "terrain_render" },
  });

  const shadowTextureComputePipeline = device.createComputePipeline({
    label: "Shadow Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [outputTextureComputeBGL],
      label: "Shadow Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "shadow_render" },
  });

  const stepComputePipeline = device.createComputePipeline({
    label: "Step Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [stepComputeBGL],
      label: "Step Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "step" },
  });

  // ----- Bind groups (prebuild both directions) -----
  const computeBG_AtoB = device.createBindGroup({
    label: "Step Compute BG A→B",
    layout: stepComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } }, // read
      { binding: 4, resource: { buffer: nextCellsBuffer } }, // write
    ],
  });

  const computeBG_BtoA = device.createBindGroup({
    label: "Step Compute BG B→A",
    layout: stepComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } }, // read
      { binding: 4, resource: { buffer: prevCellsBuffer } }, // write
    ],
  });

  const normalComputeBG_A = device.createBindGroup({
    label: "Normal Compute A",
    layout: normalComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } }, // read
    ],
  });

  const normalComputeBG_B = device.createBindGroup({
    label: "Normal Compute B",
    layout: normalComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } }, // read
    ],
  });

  const outputTextureBG_showA = device.createBindGroup({
    label: "Output Texture BG show A",
    layout: outputTextureComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } },
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
    ],
  });

  const outputTextureBG_showB = device.createBindGroup({
    label: "Output Texture BG show B",
    layout: outputTextureComputeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } },
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
    ],
  });

  const renderBG_showA = device.createBindGroup({
    label: "Render BG show A",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
    ],
  });

  const renderBG_showB = device.createBindGroup({
    label: "Render BG show B",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
    ],
  });

  // ----- Render pass descriptor (no explicit typing) -----
  const renderPassDesc = {
    label: "Canvas RenderPass",
    colorAttachments: [
      {
        terrainView: undefined, // set per frame
        clearValue: { r: 0, g: 0, b: 0, a: 1 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  };

  // ----- Dispatch sizes (match @workgroup_size in WGSL) -----
  const WG_X = 16,
    WG_Y = 16;
  const dispatchX = Math.ceil(noiseSettings.width / WG_X);
  const dispatchY = Math.ceil(noiseSettings.height / WG_Y);

  // ----- Frame loop -----
  let aToB = true; // true => compute uses A->B and we render B this frame
  let rafId = 0;
  let frameIdx = 0;
  async function frame(tMs = 0) {
    if (context.__deviceId !== device.__id) return;

    await device.pushErrorScope("validation");
    currentTime = tMs * 0.001;
    updateViewBuffer();

    const encoder = device.createCommandEncoder({ label: "Encoder" });

    // Step Compute: prev -> next in chosen direction
    {
      const stepPass = encoder.beginComputePass({ label: "Step Compute Pass" });
      stepPass.setPipeline(stepComputePipeline);
      stepPass.setBindGroup(0, aToB ? computeBG_AtoB : computeBG_BtoA);
      stepPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      stepPass.end();
    }

    if (frameIdx === 0 || mouse0Held || mouse1Held) {
      updateTerrainTexture = true;
      updateNormals = true;
    }

    // Normal Compute: prev -> next in chosen direction
    if (updateNormals || updateTerrainTexture) {
      const normalPass = encoder.beginComputePass({
        label: "Normal Compute Pass",
      });
      normalPass.setPipeline(normalComputePipeline);
      normalPass.setBindGroup(0, aToB ? normalComputeBG_B : normalComputeBG_A);
      normalPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      normalPass.end();

      updateNormals = false;

      // console.log("Updated normals");
    }

    // output compute pass
    if (updateTerrainTexture) {
      const terrainRenderPass = encoder.beginComputePass({
        label: "Terrain Texture Compute Pass",
      });
      terrainRenderPass.setPipeline(terrainTextureComputePipeline);
      terrainRenderPass.setBindGroup(
        0,
        aToB ? outputTextureBG_showB : outputTextureBG_showA
      );
      terrainRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      terrainRenderPass.end();
      // console.log("Updated Terrain Texture");
    }

    // output compute pass
    if (updateShadowTexture || updateTerrainTexture) {
      const shadowRenderPass = encoder.beginComputePass({
        label: "Shadow Texture Compute Pass",
      });
      shadowRenderPass.setPipeline(shadowTextureComputePipeline);
      shadowRenderPass.setBindGroup(
        0,
        aToB ? outputTextureBG_showB : outputTextureBG_showA
      );
      shadowRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      shadowRenderPass.end();
      // console.log("Updated Shadow Texture");
    }

    // Render: show the buffer we just wrote
    renderPassDesc.colorAttachments[0].view = context
      .getCurrentTexture()
      .createView();

    {
      const rpass = encoder.beginRenderPass(renderPassDesc);
      rpass.setPipeline(renderPipeline);
      rpass.setBindGroup(0, aToB ? renderBG_showB : renderBG_showA);
      rpass.draw(3); // keep 6 if your VS expects a quad; use 3 for fullscreen triangle VS
      rpass.end();
    }

    device.queue.submit([encoder.finish()]);

    const err = await device.popErrorScope();
    if (err) console.error("Validation error:", err.message);

    if (updateTerrainTexture || updateShadowTexture || updateNormals) {
      // console.log(`Update: N (${updateNormals}), T (${updateTerrainTexture}), S (${updateShadowTexture})`)
    }

    updateTerrainTexture = false;
    updateShadowTexture = false;
    updateNormals = false;

    frameIdx++;

    // Flip for next frame (no copies, no buffer reassign)
    aToB = !aToB;

    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  const cleanup = () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);

    canvas.removeEventListener("contextmenu", preventContext);
    canvas.removeEventListener("mousedown", onMouseDown);
    canvas.removeEventListener("wheel", onMouseScroll);

    viewUniformBuffer.destroy();
    inputUniformBuffer.destroy();
    terrainBuffer.destroy();
    terrainColorsBuffer.destroy();
    prevCellsBuffer.destroy();
    nextCellsBuffer.destroy();
    outputTextureBuffer.destroy();
  };
  canvas.__wgpuCleanup = cleanup;

  // Also return cleanup so caller can manually stop if needed
  return cleanup;
}
