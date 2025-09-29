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

/**
 * @param {HTMLCanvasElement | null} canvas
 * @param {NoiseUISettings} noiseSettings
 * @param {Input} input
 * @param {import('react').Dispatch<import('react').SetStateAction<Input>>} setInput
 * @param {import('react').Dispatch<import('react').SetStateAction<CursorQuery>>} setCursorQuery
 * @returns {Promise<WebGPUHandle>}
 */
export async function initWebGPU(
  canvas,
  noiseSettings = defaultNoiseUISettings,
  input,
  setInput,
  setCursorQuery
) {
  if (!canvas) return () => {};

  // Kill any previous loop/listeners tied to this canvas
  if (canvas.__wgpuCleanup) {
    canvas.__wgpuCleanup(); // stop old RAF, remove listeners
  }

  var updateNormals = true;
  var updateTerrainTexture = true;
  var updateShadowTexture = true;

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

  var currentTime = 0;
  var frameIdx = 0;

  const viewUniformBuffer = createOrUpdateViewBuffer(device, {
    width: noiseSettings.width,
    height: noiseSettings.height,
    time: 0,
    simIndex: 0,
  });

  function updateViewBuffer() {
    createOrUpdateViewBuffer(
      device,
      {
        width: noiseSettings.width,
        height: noiseSettings.height,
        time: currentTime,
        simIndex: frameIdx,
      },
      viewUniformBuffer
    );
  }

  const inputUniformBuffer = createOrUpdateInputBuffer(device, {
    mousePos: input.mousePosition,
    mouse0Held: input.mouse0Held,
    mouse1Held: input.mouse1Held,
    mouseRadius: input.mouseRadius,
    visibleRect: input.visibleRect,
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

  function updateInput(i) {
    input = i;
    setInput(i);
  }

  /**
   * @param {Input} newInput
   * @returns {Promise<null>}
   */
  function updateInputBuffer(newInput) {
    input = newInput;
    createOrUpdateInputBuffer(
      device,
      {
        mousePos: newInput.mousePosition,
        mouse0Held: newInput.mouse0Held,
        mouse1Held: newInput.mouse1Held,
        mouseRadius: newInput.mouseRadius,
        visibleRect: newInput.visibleRect,
      },
      inputUniformBuffer
    );
  }

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

  const cursorQueryBuffer = device.createBuffer({
    label: "Cursor Query",
    size: 64,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  });

  const cursorQueryReadback = device.createBuffer({
    label: "Cursor Query Readback",
    size: 64,
    usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
  });

  const randomFlowDirectionsBuffer = device.createBuffer({
    label: "Random Flow Directions Buffer",
    size: 4 * noiseSettings.width * noiseSettings.height,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  const randomDirections = new Float32Array(
    noiseSettings.width * noiseSettings.height
  );

  for (let i = 0; i < randomDirections.length; i++) {
    randomDirections[i] = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
  }
  device.queue.writeBuffer(randomFlowDirectionsBuffer, 0, randomDirections);

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
      {
        binding: 5,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "read-only-storage" },
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

  const cursorQueryBGL = device.createBindGroupLayout({
    label: "Cursor Query BGL",
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
      {
        binding: 6,
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
        binding: 1,
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

  const cursorQueryPipeline = device.createComputePipeline({
    label: "Cursor Query Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [cursorQueryBGL],
      label: "Cursor Query Pipeline Layout",
    }),
    compute: { module, entryPoint: "cursor_query" },
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
      { binding: 5, resource: { buffer: randomFlowDirectionsBuffer } },
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
      { binding: 5, resource: { buffer: randomFlowDirectionsBuffer } },
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

  const cursorQueryBG_A = device.createBindGroup({
    label: "Cursor Query A",
    layout: cursorQueryBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } }, // prev
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
      { binding: 6, resource: { buffer: cursorQueryBuffer } },
    ],
  });

  const cursorQueryBG_B = device.createBindGroup({
    label: "Cursor Query B",
    layout: cursorQueryBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } }, // next
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
      { binding: 6, resource: { buffer: cursorQueryBuffer } },
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
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 5, resource: { buffer: outputTextureBuffer } },
    ],
  });

  const renderBG_showB = device.createBindGroup({
    label: "Render BG show B",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
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
  const WG_X = 16;
  const WG_Y = 16;
  const dispatchX = Math.ceil(noiseSettings.width / WG_X);
  const dispatchY = Math.ceil(noiseSettings.height / WG_Y);

  // ----- Frame loop -----
  let aToB = true; // true => compute uses A->B and we render B this frame
  let rafId = 0;
  async function frame(tMs = 0) {
    if (context.__deviceId !== device.__id) return;

    const preformQuery =
      input.mouseMoved ||
      input.mouse0Held ||
      input.mouse1Held ||
      input.mouse2Held ||
      frameIdx % 7 === 0;

    await device.pushErrorScope("validation");
    currentTime = tMs * 0.001;
    updateViewBuffer();

    const encoder = device.createCommandEncoder({ label: "Encoder" });

    // Step Compute: prev -> next in chosen direction
    {
      const subSteps = 16;
      const stepPass = encoder.beginComputePass({ label: "Step Compute Pass" });
      stepPass.setPipeline(stepComputePipeline);
      for (let i = 0; i < subSteps; i++) {
        stepPass.setBindGroup(0, aToB ? computeBG_AtoB : computeBG_BtoA);
        stepPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
        aToB = !aToB;
      }

      stepPass.end();
    }

    if (frameIdx === 0 || input.mouse0Held || input.mouse1Held) {
      updateTerrainTexture = true;
      updateNormals = true;
      updateShadowTexture = true;
    }

    if (input.visibleRectChanged) {
      updateShadowTexture = true;
      // console.log("Visible rect changed");
    }

    updateShadowTexture = true;

    // Normal Compute: prev -> next in chosen direction
    if (updateNormals || updateTerrainTexture) {
      const normalPass = encoder.beginComputePass({
        label: "Normal Compute Pass",
      });
      normalPass.setPipeline(normalComputePipeline);
      normalPass.setBindGroup(0, aToB ? normalComputeBG_B : normalComputeBG_A);
      normalPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      normalPass.end();

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

      updateInput({ ...input, visibleRectChanged: false });
    }

    // query
    if (preformQuery) {
      const cursorQueryPass = encoder.beginComputePass({
        label: "Cursor Query Pass",
      });
      cursorQueryPass.setPipeline(cursorQueryPipeline);
      cursorQueryPass.setBindGroup(0, aToB ? cursorQueryBG_B : cursorQueryBG_A);
      cursorQueryPass.dispatchWorkgroups(1, 1, 1);
      cursorQueryPass.end();
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

    if (preformQuery)
      encoder.copyBufferToBuffer(
        cursorQueryBuffer,
        0,
        cursorQueryReadback,
        0,
        64
      );
    device.queue.submit([encoder.finish()]);

    const err = await device.popErrorScope();
    if (err) console.error("Validation error:", err.message);

    if (updateTerrainTexture || updateShadowTexture || updateNormals) {
      // console.log(`Update: N (${updateNormals}), T (${updateTerrainTexture}), S (${updateShadowTexture})`)
    }
    if (preformQuery) {
      // await device.queue.onSubmittedWorkDone();
      await cursorQueryReadback.mapAsync(GPUMapMode.READ);
      const mapped = cursorQueryReadback.getMappedRange(); // ArrayBuffer
      const dv = new DataView(mapped);

      // ---- unpack with correct offsets
      const height = dv.getFloat32(0, true); // @0
      const nx = dv.getFloat32(16, true); // @16
      const ny = dv.getFloat32(20, true); // @20
      const nz = dv.getFloat32(24, true); // @24
      const fAmount = dv.getFloat32(28, true); // @32
      // _pad0 lives at 48.. (ignored)

      const cursorQuery = { height, normal: { x: nx, y: ny, z: nz }, fAmount };
      setCursorQuery(cursorQuery);

      cursorQueryReadback.unmap();
    }

    updateTerrainTexture = false;
    updateShadowTexture = false;
    updateNormals = false;

    if (input.mouseMoved) updateInput({ ...input, mouseMoved: false });

    frameIdx++;

    // Flip for next frame (no copies, no buffer reassign)
    //aToB = !aToB;

    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  const cleanup = () => {
    cancelAnimationFrame(rafId);

    viewUniformBuffer.destroy();
    inputUniformBuffer.destroy();
    terrainBuffer.destroy();
    terrainColorsBuffer.destroy();
    prevCellsBuffer.destroy();
    nextCellsBuffer.destroy();
    outputTextureBuffer.destroy();
  };
  canvas.__wgpuCleanup = cleanup;

  console.log("Init canvas");

  // Also return cleanup so caller can manually stop if needed

  const handle = {
    cleanup,
    updateInputBuffer,
    frame,
  };

  return handle;
}
