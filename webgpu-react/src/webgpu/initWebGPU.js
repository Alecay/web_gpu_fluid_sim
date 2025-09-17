import { generateNoiseMap } from "./noise";
import { getShaderText } from "./shaderBuilder";

export async function initWebGPU(canvas) {
  if (!canvas) return () => {};

  const adapter = await navigator.gpu?.requestAdapter();
  const device = await adapter?.requestDevice();
  if (!device) {
    alert("Need a browser that supports WebGPU");
    return () => {};
  }

  const context = canvas.getContext("webgpu");
  const format = navigator.gpu.getPreferredCanvasFormat();

  // Fixed drawing buffer; CSS size can differ
  const width = 1920;
  const height = 1080;
  canvas.width = width;
  canvas.height = height;

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

  // ----- Uniforms (32 bytes total) -----
  // Layout (each 4 bytes):
  // [0]=w(u32), [1]=h(u32), [2]=mouseX(u32), [3]=mouseY(u32),
  // [4]=time(f32), [5]=mouseHeld(f32), [6],[7]=padding
  const viewUBO = new ArrayBuffer(32);
  const viewU32 = new Uint32Array(viewUBO);
  const viewF32 = new Float32Array(viewUBO);
  viewU32[0] = width;
  viewU32[1] = height;
  viewU32[2] = 0;
  viewU32[3] = 0;
  viewF32[4] = 0.0;
  viewF32[5] = 0.0;

  const viewUniformBuffer = device.createBuffer({
    label: "View Uniform",
    size: 32,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  function flushViewUBO() {
    device.queue.writeBuffer(viewUniformBuffer, 0, viewUBO);
  }
  flushViewUBO();

  // Define params
  const maxCellValue = 100.0;
  const terrainHeightMultiplier = 1.0;
  const colorSteps = 20;
  const numberOfTerrainColors = 7;

  // Create the buffer (32 bytes)
  const terrainBufferSize = 32; // must be multiple of 16
  const arrayBuffer = new ArrayBuffer(terrainBufferSize);
  const view = new DataView(arrayBuffer);

  // offset in bytes
  let offset = 0;
  view.setFloat32(offset, maxCellValue, true);
  offset += 4;
  view.setFloat32(offset, terrainHeightMultiplier, true);
  offset += 4;
  view.setUint32(offset, colorSteps, true);
  offset += 4;
  view.setUint32(offset, numberOfTerrainColors, true);
  offset += 4;
  view.setFloat32(offset, 0.0, true);
  offset += 4; // pad.x
  view.setFloat32(offset, 0.0, true);
  offset += 4; // pad.y

  const terrainBuffer = device.createBuffer({
    size: terrainBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(terrainBuffer, 0, arrayBuffer);

  // ----- Mouse handling -----
  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = Math.floor((e.clientX - rect.left) * scaleX);
    const my = Math.floor((e.clientY - rect.top) * scaleY);
    viewU32[2] = Math.min(Math.max(mx, 0), width - 1);
    viewU32[3] = Math.min(Math.max(my, 0), height - 1);
    flushViewUBO();
  }
  function onMouseDown() {
    viewF32[5] = 1.0;
    flushViewUBO();
  }
  function onMouseUp() {
    viewF32[5] = 0.0;
    flushViewUBO();
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mousedown", onMouseDown);
  window.addEventListener("mouseup", onMouseUp);

  function writeTime(tSeconds) {
    viewF32[4] = tSeconds;
    device.queue.writeBuffer(viewUniformBuffer, 0, viewUBO);
  }

  // ----- Storage buffers (vec4f per cell => 16 bytes) -----
  const BYTES_PER_CELL = 16;
  const cellsBufferSize = width * height * BYTES_PER_CELL;

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
    const noiseData = generateNoiseMap(width, height);

    for (let index = 0; index < noiseData.length; index++) {
      const cellIndex = index * 4;
      init[cellIndex] = noiseData[index] * 100.0;
    }

    device.queue.writeBuffer(prevCellsBuffer, 0, init);
    device.queue.writeBuffer(nextCellsBuffer, 0, init);
  }

  // Terrain Color buffer

  const terrainColors = [
    "rgb(77, 73, 73)",
    "rgb(130, 124, 116)",
    "rgb(190, 147, 90)",
    "rgb(173, 110, 27)",
    "rgb(61, 104, 65)",
    "rgb(27, 70, 31)",
    "rgb(255, 255, 255)",
  ];
  function colorsToFloatArray(colors) {
    const floats = [];

    for (const color of colors) {
      // Extract r, g, b using regex
      const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (!match) continue;

      const r = parseInt(match[1], 10) / 255.0;
      const g = parseInt(match[2], 10) / 255.0;
      const b = parseInt(match[3], 10) / 255.0;

      floats.push(r, g, b, 1.0); // RGBA, with alpha=1
    }

    return new Float32Array(floats);
  }

  const terrainColorsBuffer = device.createBuffer({
    label: "Terrain Colors Buffer",
    size: terrainColors.length * 16,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(
    terrainColorsBuffer,
    0,
    colorsToFloatArray(terrainColors)
  );

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
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 2,
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
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "read-only-storage" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: "uniform" },
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
      { binding: 1, resource: { buffer: prevCellsBuffer } }, // read
      { binding: 2, resource: { buffer: nextCellsBuffer } }, // write
    ],
  });

  const computeBG_BtoA = device.createBindGroup({
    label: "Compute BG B→A",
    layout: computeBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: nextCellsBuffer } }, // read
      { binding: 2, resource: { buffer: prevCellsBuffer } }, // write
    ],
  });

  const renderBG_showA = device.createBindGroup({
    label: "Render BG show A",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: prevCellsBuffer } },
      { binding: 2, resource: { buffer: terrainColorsBuffer } },
      { binding: 3, resource: { buffer: terrainBuffer } },
    ],
  });

  const renderBG_showB = device.createBindGroup({
    label: "Render BG show B",
    layout: renderBGL,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: nextCellsBuffer } },
      { binding: 2, resource: { buffer: terrainColorsBuffer } },
      { binding: 3, resource: { buffer: terrainBuffer } },
    ],
  });

  // ----- Render pass descriptor (no explicit typing) -----
  const renderPassDesc = {
    label: "Canvas RenderPass",
    colorAttachments: [
      {
        view: undefined, // set per frame
        clearValue: { r: 0, g: 0, b: 0, a: 1 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  };

  // ----- Dispatch sizes (match @workgroup_size in WGSL) -----
  const WG_X = 16,
    WG_Y = 16;
  const dispatchX = Math.ceil(width / WG_X);
  const dispatchY = Math.ceil(height / WG_Y);

  // ----- Frame loop -----
  let aToB = true; // true => compute uses A->B and we render B this frame
  let rafId = 0;
  function frame(tMs = 0) {
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

    // Flip for next frame (no copies, no buffer reassign)
    aToB = !aToB;

    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  // Cleanup
  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mousedown", onMouseDown);
    window.removeEventListener("mouseup", onMouseUp);
  };
}
