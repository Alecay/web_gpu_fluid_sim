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
import { getBindings } from "./bindingGroups";

/**
 * @param {HTMLCanvasElement | null} canvas
 * @param {NoiseUISettings} noiseSettings
 * @param {() => Input} getInput
 * @param {import('react').Dispatch<import('react').SetStateAction<Input>>} setInput
 * @param {import('react').Dispatch<import('react').SetStateAction<CursorQuery>>} setCursorQuery
 * @returns {Promise<WebGPUHandle>}
 */
export async function initWebGPU(
  canvas,
  noiseSettings = defaultNoiseUISettings,
  getInput,
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
  var simIndex = 0;

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
        simIndex: simIndex,
      },
      viewUniformBuffer
    );
  }

  const initialInput = getInput();

  const inputUniformBuffer = createOrUpdateInputBuffer(device, {
    mousePos: initialInput.mousePosition,
    mouse0Held: initialInput.mouse0Held,
    mouse1Held: initialInput.mouse1Held,
    mouseRadius: initialInput.mouseRadius,
    visibleRect: initialInput.visibleRect,
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

  /**
   * @param {Input} newInput
   * @returns {Promise<null>}
   */
  function updateInputBuffer(newInput) {
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

  // // ----- Bind group layouts -----
  const bindings = getBindings(device, module, format, {
    prevCellsBuffer,
    nextCellsBuffer,
    terrainBuffer,
    terrainColorsBuffer,
    viewUniformBuffer,
    inputUniformBuffer,
    outputTextureBuffer,
    cursorQueryBuffer,
    randomFlowDirectionsBuffer,
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

    var input = getInput();
    updateInputBuffer(input);
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
      const stepPass = encoder.beginComputePass({ label: "Step Compute Pass" });
      stepPass.setPipeline(bindings.piplines.stepComputePipeline);
      for (let i = 0; i < input.simulationSubSteps; i++) {
        stepPass.setBindGroup(
          0,
          aToB
            ? bindings.bindGroups.computeBG_AtoB
            : bindings.bindGroups.computeBG_BtoA
        );
        stepPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
        aToB = !aToB;
        simIndex++;
        updateViewBuffer();
      }

      // console.log("SimIndex: ", simIndex);

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
      normalPass.setPipeline(bindings.piplines.normalComputePipeline);
      normalPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.normalComputeBG_B
          : bindings.bindGroups.normalComputeBG_A
      );
      normalPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      normalPass.end();

      // console.log("Updated normals");
    }

    // output compute pass
    if (updateTerrainTexture) {
      const terrainRenderPass = encoder.beginComputePass({
        label: "Terrain Texture Compute Pass",
      });
      terrainRenderPass.setPipeline(
        bindings.piplines.terrainTextureComputePipeline
      );
      terrainRenderPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.outputTextureBG_showB
          : bindings.bindGroups.outputTextureBG_showA
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
      shadowRenderPass.setPipeline(
        bindings.piplines.shadowTextureComputePipeline
      );
      shadowRenderPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.outputTextureBG_showB
          : bindings.bindGroups.outputTextureBG_showA
      );
      shadowRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      shadowRenderPass.end();
      // console.log("Updated Shadow Texture");

      input = { ...input, visibleRectChanged: false };
    }

    // query
    if (preformQuery) {
      const cursorQueryPass = encoder.beginComputePass({
        label: "Cursor Query Pass",
      });
      cursorQueryPass.setPipeline(bindings.piplines.cursorQueryPipeline);
      cursorQueryPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.cursorQueryBG_B
          : bindings.bindGroups.cursorQueryBG_A
      );
      cursorQueryPass.dispatchWorkgroups(1, 1, 1);
      cursorQueryPass.end();
    }

    // Render: show the buffer we just wrote
    renderPassDesc.colorAttachments[0].view = context
      .getCurrentTexture()
      .createView();

    {
      const rpass = encoder.beginRenderPass(renderPassDesc);
      rpass.setPipeline(bindings.piplines.renderPipeline);
      rpass.setBindGroup(0, bindings.bindGroups.renderBG);
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

    if (input.mouseMoved) input = { ...input, mouseMoved: false };

    if (input.mouseMoved || updateShadowTexture) setInput(input);

    //console.log(input.visibleRect);

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
    // updateInputBuffer,
    frame,
  };

  return handle;
}
