import rectWGSL from "../shaders/rect_shader.wgsl?raw";

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

  // Drawing buffer size (one cell per pixel)
  const width = 1920;
  const height = 1080;
  canvas.width = width;
  canvas.height = height;
  // CSS size is controlled by the parent via style; drawing buffer stays fixed.

  context.configure({
    device,
    format,
    alphaMode: "opaque",
  });

  // Shader module (vs/fs/cs are in the same WGSL file)
  const module = device.createShaderModule({
    label: "Rect Shader",
    code: rectWGSL,
  });

  // --- Uniform buffer: 32 bytes (size.xy, mouse.xy, time, pad) ---
  // Layout (bytes):
  // 0..3: size.x (u32), 4..7: size.y (u32)
  // 8..11: mouse.x (u32), 12..15: mouse.y (u32)
  // 16..19: time (f32), 20..31: padding
  const viewUBO = new ArrayBuffer(32);
  const viewU32 = new Uint32Array(viewUBO);
  const viewF32 = new Float32Array(viewUBO);
  viewU32[0] = width;
  viewU32[1] = height;
  viewU32[2] = 0; // mouse.x
  viewU32[3] = 0; // mouse.y
  viewF32[4] = 0.0; // time
  viewF32[5] = 0; // mouseHeld (update on click)

  const viewUniformBuffer = device.createBuffer({
    label: "View Uniform (size, mouse, time)",
    size: 32,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  function flushViewUBO() {
    device.queue.writeBuffer(viewUniformBuffer, 0, viewUBO);
  }
  flushViewUBO();

  // --- Mouse handling: map client coords -> device pixels ---
  window.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width; // device px per CSS px
    const scaleY = canvas.height / rect.height;
    const mx = Math.floor((e.clientX - rect.left) * scaleX);
    const my = Math.floor((e.clientY - rect.top) * scaleY);

    // clamp to [0, size)
    viewU32[2] = Math.min(Math.max(mx, 0), width - 1);
    viewU32[3] = Math.min(Math.max(my, 0), height - 1);

    flushViewUBO(); // you can also defer to next frame if you prefer
  });

  window.addEventListener("mousedown", (e) => {
    viewF32[5] = 1; // update mouse held to true
  });

  window.addEventListener("mouseup", (e) => {
    viewF32[5] = 0; // update mouse held to true
  });

  function writeTime(tSeconds) {
    viewF32[4] = tSeconds; // time at offset 8
    device.queue.writeBuffer(viewUniformBuffer, 0, viewUBO);
  }

  const cellsCount = width * height;
  const CELL_DATA_SIZE = 2;
  const BYTES_PER_CELL = 16 * CELL_DATA_SIZE; // vec4f
  const cellsBufferSize = cellsCount * BYTES_PER_CELL;

  const cellsBuffer = device.createBuffer({
    label: "Cells Storage Buffer",
    size: cellsBufferSize,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  // Optional: initialize once from CPU (will be overwritten by compute anyway)
  {
    const init = new Float32Array(cellsBufferSize / (CELL_DATA_SIZE * 4));
    for (let y = 0; y < height; ++y) {
      for (let x = 0; x < width; ++x) {
        const i = (y * width + x) * (CELL_DATA_SIZE * 4);
        init[i + 0] = x / (width - 1);
        init[i + 1] = y / (height - 1);
        init[i + 2] = 0; // height
        init[i + 3] = 0; // famount
        init[i + 4] = 0; // Padding
        init[i + 5] = 0; //
      }
    }
    device.queue.writeBuffer(cellsBuffer, 0, init);
  }

  // Helpers to update cells
  function setCellRGBA(x, y, r, g, b, a) {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const byteOffset = (y * width + x) * BYTES_PER_CELL;
    device.queue.writeBuffer(
      cellsBuffer,
      byteOffset,
      new Float32Array([r, g, b, a])
    );
  }

  function setCells(data /* Float32Array length = width*height*4 */) {
    if (!(data instanceof Float32Array))
      throw new Error("setCells expects a Float32Array");
    if (data.length !== width * height * (CELL_DATA_SIZE * 4)) {
      throw new Error(
        `setCells requires exactly ${
          width * height * (CELL_DATA_SIZE * 4)
        } floats`
      );
    }
    device.queue.writeBuffer(cellsBuffer, 0, data);
  }

  // Bindings shared by fragment & compute
  const bindGroupLayout = device.createBindGroupLayout({
    label: "BGL: View+Cells",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      }, // read-write
    ],
  });

  const bindGroup = device.createBindGroup({
    label: "BG: View+Cells",
    layout: bindGroupLayout,
    entries: [
      { binding: 0, resource: { buffer: viewUniformBuffer } },
      { binding: 1, resource: { buffer: cellsBuffer } },
    ],
  });

  // Graphics pipeline
  const renderPipeline = device.createRenderPipeline({
    label: "Render Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    vertex: { module, entryPoint: "vs" },
    fragment: { module, entryPoint: "fs", targets: [{ format }] },
    primitive: { topology: "triangle-list" },
  });

  // Compute pipeline
  const computePipeline = device.createComputePipeline({
    label: "Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [bindGroupLayout],
    }),
    compute: { module, entryPoint: "cs" },
  });

  const renderPassDesc = {
    label: "Canvas RenderPass",
    colorAttachments: [
      {
        // view: set per frame
        clearValue: { r: 0, g: 0, b: 0, a: 1 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  };

  // Workgroup sizes (match @workgroup_size in WGSL)
  const WG_X = 16,
    WG_Y = 16;
  const dispatchX = Math.ceil(width / WG_X);
  const dispatchY = Math.ceil(height / WG_Y);

  let rafId = 0;
  function frame(tMs = 0) {
    // update time and push uniforms
    viewF32[4] = tMs * 0.001;
    flushViewUBO();

    const encoder = device.createCommandEncoder({ label: "Encoder" });

    // Compute pass updates cells
    {
      const cpass = encoder.beginComputePass({ label: "Compute Pass" });
      cpass.setPipeline(computePipeline);
      cpass.setBindGroup(0, bindGroup);
      cpass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      cpass.end();
    }

    // Render pass displays cells
    renderPassDesc.colorAttachments[0].view = context
      .getCurrentTexture()
      .createView();

    {
      const rpass = encoder.beginRenderPass(renderPassDesc);
      rpass.setPipeline(renderPipeline);
      rpass.setBindGroup(0, bindGroup);
      rpass.draw(6);
      rpass.end();
    }

    device.queue.submit([encoder.finish()]);
    rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);

  // Cleanup for React unmount
  return () => {
    cancelAnimationFrame(rafId);
    canvas.removeEventListener("mousemove", onMouseMove);
    // (No explicit device/context dispose API needed.)
  };
}
