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
import { inputsEqual } from "../interfaces/Input";
import { fps } from "../interfaces/FPSMeter";
import { loadPackedSprites } from "../utils/sprites/loadPackedSprites";

const MAX_SPRITE_WIDTH = 64;

/**
 * @param {HTMLCanvasElement | null} canvas
 * @param {NoiseUISettings} noiseSettings
 * @param {() => Input} getInput
 * @param {import('react').Dispatch<import('react').SetStateAction<Input>>} setInput
 * @param {import('react').Dispatch<import('react').SetStateAction<CursorQuery>>} setCursorQuery
 * @param {import('react').Dispatch<import('react').SetStateAction<number>>} setSimIndex
 * @returns {Promise<WebGPUHandle>}
 */
export async function initWebGPU(
  canvas,
  noiseSettings = defaultNoiseUISettings,
  getInput,
  setInput,
  setCursorQuery,
  setSimIndex
) {
  if (!canvas) return () => {};

  // Kill any previous loop/listeners tied to this canvas
  if (canvas.__wgpuCleanup) {
    canvas.__wgpuCleanup(); // stop old RAF, remove listeners
  }

  const isDevBuid = false; //import.meta.env.DEV;

  var updateNormals = true;
  var updateTerrainTexture = true;
  var updateShadowTexture = true;

  const device = await getDevice();
  // console.log("Using WebGPU device:", device.__id);
  // console.log(
  //   "Max texture size: ",
  //   device.limits.maxTextureDimension2D,
  //   "current size: ",
  //   noiseSettings.width * noiseSettings.pixelScale
  // );

  const context = canvas.getContext("webgpu");
  const format = navigator.gpu.getPreferredCanvasFormat();

  canvas.style.imageRendering = "pixelated";

  // Tag the context with this device id so we can assert later
  context.__deviceId = device.__id;

  canvas.width = noiseSettings.width * noiseSettings.pixelScale;
  canvas.height = noiseSettings.height * noiseSettings.pixelScale;

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
  var frameIndex = 0;
  var simIndex = 0;
  var showDebug = isDevBuid;

  const toggleShowDebug = () => {
    showDebug = !showDebug;
  };

  const setShowDebug = (s) => {
    showDebug = s;
  };

  const viewUniformBuffer = createOrUpdateViewBuffer(device, {
    width: noiseSettings.width,
    height: noiseSettings.height,
    time: 0,
    frameIndex,
    showDebug,
    pixelScale: noiseSettings.pixelScale,
  });

  function updateViewBuffer() {
    createOrUpdateViewBuffer(
      device,
      {
        width: noiseSettings.width,
        height: noiseSettings.height,
        time: currentTime,
        frameIndex,
        showDebug,
        pixelScale: noiseSettings.pixelScale,
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
    cursorType: initialInput.cursorType,
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

  const OFFSET_ALIGN = 256; // required for dynamic offsets on uniforms
  const SIM_SLOT_SIZE = 16; // our struct is 16 bytes, but we *stride* by 256
  const SIM_SLOTS = 32; // up to how many substeps you’ll encode

  const simBuffer = device.createBuffer({
    label: "Sim Index Buffer",
    size: OFFSET_ALIGN * SIM_SLOTS,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const updateSimBuffer = (baseIndex) => {
    for (let i = 0; i < SIM_SLOTS; i++) {
      const tmp = new ArrayBuffer(SIM_SLOT_SIZE);
      new Uint32Array(tmp)[0] = baseIndex + i;
      device.queue.writeBuffer(simBuffer, i * OFFSET_ALIGN, tmp);
    }
  };

  /**
   * Get the chunk index (which chunk a cell belongs to).
   * @param {[number, number]} cellPos - The cell position [x, y]
   * @param {number} chunkSize - The size of one chunk (square)
   * @returns {[number, number]} The chunk index [chunkX, chunkY]
   */
  function getChunkPos(cellPos, chunkSize) {
    const [x, y] = cellPos;
    return [Math.floor(x / chunkSize), Math.floor(y / chunkSize)];
  }

  /**
   * Get the number of chunks needed to cover a width × height grid.
   * @param {number} width - The total width in cells
   * @param {number} height - The total height in cells
   * @param {number} chunkSize - The size of one chunk (square)
   * @returns {[number, number]} Number of chunks along X and Y [chunksX, chunksY]
   */
  function getNumChunks(width, height, chunkSize) {
    const chunksX = Math.ceil(width / chunkSize);
    const chunksY = Math.ceil(height / chunkSize);
    return [chunksX, chunksY];
  }

  const chunkSize = 16;
  const [chunksX, chunksY] = getNumChunks(
    noiseSettings.width,
    noiseSettings.height,
    chunkSize
  );

  const chunkDataBuffer = device.createBuffer({
    label: "Chunk Data",
    size: 16 * chunksX * chunksY,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(
    chunkDataBuffer,
    0,
    new Float32Array(4 * chunksX * chunksY)
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
        mouse2Held: newInput.mouse2Held,
        mouseRadius: newInput.mouseRadius,
        cursorType: newInput.cursorType,
        visibleRect: newInput.visibleRect,
      },
      inputUniformBuffer
    );
  }

  const outputTexLayers = 4;
  const outputTexSize =
    noiseSettings.width * noiseSettings.height * 4 * outputTexLayers;

  const subPixelTexSize =
    noiseSettings.width *
    noiseSettings.height *
    4 *
    noiseSettings.pixelScale *
    noiseSettings.pixelScale;

  // Create output texture buffer
  const outputTextureBuffer = device.createBuffer({
    label: "Output Texture",
    size: outputTexSize + subPixelTexSize, // width * height * 4 bytes per float * 4 floats * layers
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(
    outputTextureBuffer,
    0,
    new Float32Array((outputTexSize + subPixelTexSize) / 4)
  );

  console.time("loadPackedSprites");
  const { manifest, spritesU32, spriteMap } = await loadPackedSprites();
  console.timeEnd("loadPackedSprites");

  // console.log(spriteMap);

  const spriteDataBuffer = device.createBuffer({
    label: "Sprite Data",
    size: spritesU32.byteLength,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(spriteDataBuffer, 0, spritesU32);

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

  // Initialize cells
  const initializeNoise = (seed) => {
    const init = new Float32Array(
      noiseSettings.width * noiseSettings.height * FLOATS_PER_CELL
    );
    const noiseData = generateNoiseMap(
      seed,
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
      init[cellIndex + 8] = Math.floor(Math.random() * (7 - 0 + 1)) + 0; // set random dir
    }

    device.queue.writeBuffer(prevCellsBuffer, 0, init);
    device.queue.writeBuffer(nextCellsBuffer, 0, init);
    // device.queue.submit([]);

    // reset some values
    frameIndex = 0;
    simIndex = 0;
    updateTerrainTexture = true;

    // rafId = requestAnimationFrame(frame);
  };

  var lastMapSeed = noiseSettings.seed;

  const resetMap = () => {
    initializeNoise(lastMapSeed);
    // console.log("reset");
  };

  const randomizeMap = () => {
    lastMapSeed = Math.ceil(Math.random() * 1000000000);
    resetMap();
  };

  resetMap();

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

  // // ----- Bind group layouts -----
  const bindings = getBindings(device, module, format, {
    prevCellsBuffer,
    nextCellsBuffer,
    terrainBuffer,
    simBuffer,
    terrainColorsBuffer,
    viewUniformBuffer,
    inputUniformBuffer,
    outputTextureBuffer,
    cursorQueryBuffer,
    chunkDataBuffer,
    spriteDataBuffer,
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
  var lastInput = getInput();
  let inFlight = false;

  function frame(tMs = 0) {
    if (context.__deviceId !== device.__id) return;

    fps.begin();
    var input = getInput();

    if (!inputsEqual(input, lastInput)) {
      updateInputBuffer(input);
      lastInput = input;
    }

    const preformQuery = frameIndex % 6 === 0;

    device.pushErrorScope("validation");
    currentTime = tMs * 0.001;
    updateViewBuffer();
    updateSimBuffer(simIndex);

    var dynamicSimOffset = 0;

    const encoder = device.createCommandEncoder({ label: "Encoder" });

    // Step Compute: prev -> next in chosen direction
    {
      const stepPass = encoder.beginComputePass({ label: "Step Compute Pass" });
      stepPass.setPipeline(bindings.piplines.stepComputePipeline);
      for (let i = 0; i < input.simulationSubSteps * 2; i++) {
        dynamicSimOffset = i * OFFSET_ALIGN;
        stepPass.setBindGroup(
          0,
          aToB
            ? bindings.bindGroups.unifiedComputeBG_A
            : bindings.bindGroups.unifiedComputeBG_B,
          [dynamicSimOffset]
        );
        stepPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
        aToB = !aToB;
        // simIndex++;
        // updateViewBuffer();

        simIndex = (simIndex + 1) >>> 0; // force unsigned 32-bit wrap
        if (simIndex > 4000000000) simIndex = 0; // optional manual reset
      }

      // console.log("SimIndex: ", simIndex);
      setSimIndex(simIndex);

      stepPass.end();
    }

    if (frameIndex === 0 || input.mouse0Held || input.mouse1Held) {
      // updateTerrainTexture = true;
      //updateNormals = true;
      updateShadowTexture = true;
    }

    if (frameIndex < 60) {
      updateTerrainTexture = true;
      updateNormals = true;
      updateShadowTexture = true;
    }

    if (input.visibleRectChanged) {
      updateShadowTexture = true;
      // console.log("Visible rect changed");
    }

    // updateShadowTexture = true;

    // Normal Compute: prev -> next in chosen direction
    if (updateNormals || updateTerrainTexture) {
      const normalPass = encoder.beginComputePass({
        label: "Normal Compute Pass",
      });
      normalPass.setPipeline(bindings.piplines.normalComputePipeline);
      normalPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
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
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
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
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      shadowRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      shadowRenderPass.end();
      // console.log("Updated Shadow Texture");

      input = { ...input, visibleRectChanged: false };
    }

    if (updateShadowTexture || updateTerrainTexture) {
      const fluidRenderPass = encoder.beginComputePass({
        label: "Fluid Texture Compute Pass",
      });
      fluidRenderPass.setPipeline(
        bindings.piplines.fluidTextureComputePipeline
      );
      fluidRenderPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      fluidRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      fluidRenderPass.end();

      input = { ...input, visibleRectChanged: false };
    }

    if (frameIndex % 10 == 0 && showDebug) {
      const debugRenderPass = encoder.beginComputePass({
        label: "Debug Texture Compute Pass",
      });
      debugRenderPass.setPipeline(
        bindings.piplines.debugTextureComputePipeline
      );
      debugRenderPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      debugRenderPass.dispatchWorkgroups(dispatchX, dispatchY, 1);
      debugRenderPass.end();
    }

    const animate = true;
    if (animate) {
      const spriteRenderPass = encoder.beginComputePass({
        label: "Sprite Render Compute Pass",
      });
      spriteRenderPass.setPipeline(
        bindings.piplines.spriteRenderComputePipeline
      );
      spriteRenderPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      spriteRenderPass.dispatchWorkgroups(
        Math.ceil(MAX_SPRITE_WIDTH / WG_X),
        Math.ceil(MAX_SPRITE_WIDTH / WG_Y),
        1
      );
      spriteRenderPass.end();
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
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      cursorQueryPass.dispatchWorkgroups(1, 1, 1);
      cursorQueryPass.end();
    }

    if (frameIndex % 60 == 0) {
      const totalQueryPass = encoder.beginComputePass({
        label: "Total Query Pass",
      });
      totalQueryPass.setPipeline(bindings.piplines.totalQueryPipeline);
      totalQueryPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      totalQueryPass.dispatchWorkgroups(1, 1, 1);
      totalQueryPass.end();
    }

    {
      const chunkDataPass = encoder.beginComputePass({
        label: "Chunk Data Pass",
      });
      chunkDataPass.setPipeline(bindings.piplines.chunkDataPipeline);
      chunkDataPass.setBindGroup(
        0,
        aToB
          ? bindings.bindGroups.unifiedComputeBG_A
          : bindings.bindGroups.unifiedComputeBG_B,
        [dynamicSimOffset]
      );
      chunkDataPass.dispatchWorkgroups(chunksX, chunksY, 1);
      chunkDataPass.end();
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

    if (preformQuery && !inFlight)
      encoder.copyBufferToBuffer(
        cursorQueryBuffer,
        0,
        cursorQueryReadback,
        0,
        64
      );
    device.queue.submit([encoder.finish()]);

    device.popErrorScope().then((err) => {
      if (err) console.error(err.message);
    });

    if (updateTerrainTexture || updateShadowTexture || updateNormals) {
      // console.log(`Update: N (${updateNormals}), T (${updateTerrainTexture}), S (${updateShadowTexture})`)
    }
    if (preformQuery && !inFlight) {
      // Option A: let mapAsync resolve when GPU finishes the copy
      inFlight = true;
      cursorQueryReadback
        .mapAsync(GPUMapMode.READ)
        .then(() => {
          const dv = new DataView(cursorQueryReadback.getMappedRange(0, 64));

          const height = dv.getFloat32(0, true); // @0
          const nx = dv.getFloat32(16, true); // @16
          const ny = dv.getFloat32(20, true); // @20
          const nz = dv.getFloat32(24, true); // @24
          const fAmount = dv.getFloat32(28, true); // @28  (note: your comment said 32)
          const fluidTotal = dv.getFloat32(48, true); // @48
          const antiFluidTotal = dv.getFloat32(52, true); // @52
          const chunkUpdates = dv.getUint32(56, true); // @56

          setCursorQuery({
            height,
            normal: { x: nx, y: ny, z: nz },
            fAmount,
            fluidTotal,
            antiFluidTotal,
            chunkUpdates,
          });
        })
        .catch(() => {
          // device lost / app shutdown; ignore
        })
        .finally(() => {
          cursorQueryReadback.unmap();
          inFlight = false;
        });
    }

    updateTerrainTexture = false;
    updateShadowTexture = false;
    updateNormals = false;

    fps.end(tMs);

    frameIndex++;

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

  // Also return cleanup so caller can manually stop if needed

  const handle = {
    cleanup,
    resetMap,
    randomizeMap,
    toggleShowDebug,
    setShowDebug,
    spriteMap,
  };

  return handle;
}
