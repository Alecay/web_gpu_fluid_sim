import { getDevice } from "./gpu";
import { generateNoiseMap } from "./noise";
import { getShaderText } from "./shaderBuilder";
import { defaultNoiseUISettings } from "../components/NoiseSettingsForm";
import {
  createOrUpdateTerrainColorsBuffer,
  createOrUpdateTerrainParamsBuffer,
} from "./terrainBuffer";
import { createOrUpdateViewBuffer } from "./viewBuffer";
import { createOrUpdateInputBuffer } from "./inputBuffer";

export async function initWebGPU(
  canvas,
  noiseSettings = defaultNoiseUISettings
) {
  if (!canvas) return () => {};

  // Kill any previous loop/listeners tied to this canvas
  if (canvas.__wgpuCleanup) {
    canvas.__wgpuCleanup(); // stop old RAF, remove listeners
  }

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

  const viewUniformBuffer = createOrUpdateViewBuffer(device, {
    width: noiseSettings.width,
    height: noiseSettings.height,
    time: 0,
  });

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
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);

  // Canvas mouse down to avoid clicks outside the game bounds
  canvas.addEventListener("contextmenu", preventContext);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("wheel", onMouseScroll, { passive: false });

  function writeTime(tSeconds) {
    // viewF32[4] = tSeconds;
    // device.queue.writeBuffer(viewUniformBuffer, 0, viewUBO);
  }

  // ----- Storage buffers (vec4f per cell => 16 bytes) -----
  const BYTES_PER_CELL = 16;
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
    const init = new Float32Array(cellsBufferSize / 4);
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
      const cellIndex = index * 4;
      init[cellIndex] = noiseData[index] * 100.0;
    }

    device.queue.writeBuffer(prevCellsBuffer, 0, init);
    device.queue.writeBuffer(nextCellsBuffer, 0, init);
  }

  // ----- Bind group layouts -----
  // Compute: 0=uniform, 1=prev(read), 2=next(write)
  const computeBGL = device.createBindGroupLayout({
    label: "Compute BGL",
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
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 4,
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
        binding: 2,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: "uniform" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 4,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "read-only-storage" },
      },
    ],
  });

  // ----- Pipelines -----
  const renderPipeline = device.createRenderPipeline({
    label: "Render Pipeline",
    layout: device.createPipelineLayout({ bindGroupLayouts: [renderBGL] }),
    vertex: { module, entryPoint: "vs" },
    fragment: { module, entryPoint: "fs", targets: [{ format }] },
    primitive: { topology: "triangle-list" },
  });

  const computePipeline = device.createComputePipeline({
    label: "Step Compute Pipeline",
    layout: device.createPipelineLayout({ bindGroupLayouts: [computeBGL] }),
    compute: { module, entryPoint: "step" },
  });

  // ----- Bind groups (prebuild both directions) -----
  const computeBG_AtoB = device.createBindGroup({
    label: "Compute BG A→B",
    layout: computeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } }, // read
      { binding: 4, resource: { buffer: nextCellsBuffer } }, // write
    ],
  });

  const computeBG_BtoA = device.createBindGroup({
    label: "Compute BG B→A",
    layout: computeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } }, // read
      { binding: 4, resource: { buffer: prevCellsBuffer } }, // write
    ],
  });

  const renderBG_showA = device.createBindGroup({
    label: "Render BG show A",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: prevCellsBuffer } },
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
    ],
  });

  const renderBG_showB = device.createBindGroup({
    label: "Render BG show B",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: inputUniformBuffer } },
      { binding: 2, resource: { buffer: terrainBuffer } },
      { binding: 3, resource: { buffer: nextCellsBuffer } },
      { binding: 4, resource: { buffer: terrainColorsBuffer } },
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
  async function frame(tMs = 0) {
    if (context.__deviceId !== device.__id) return;

    await device.pushErrorScope("validation");
    writeTime(tMs * 0.001);

    const encoder = device.createCommandEncoder({ label: "Encoder" });

    // Compute: prev -> next in chosen direction
    {
      const cpass = encoder.beginComputePass({ label: "Compute Pass" });
      cpass.setPipeline(computePipeline);
      cpass.setBindGroup(0, aToB ? computeBG_AtoB : computeBG_BtoA);
      cpass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      cpass.end();
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
  };
  canvas.__wgpuCleanup = cleanup;

  // Also return cleanup so caller can manually stop if needed
  return cleanup;
}
