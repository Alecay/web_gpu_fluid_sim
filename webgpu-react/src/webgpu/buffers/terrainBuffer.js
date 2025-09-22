// terrainParamsBuffer.js
// @ts-check
import { defineStructLayout, createOrUpdateBuffer } from "./wgslPacker.js";

/*
struct TerrainParams {
  maxCellValue            : f32,
  terrainHeightMultiplier : f32,
  colorSteps              : u32,
  numberOfTerrainColors   : u32,
  _padT0                  : vec2<f32>,   // keep total size = 32 bytes
};
*/
export const TerrainParamsLayout = defineStructLayout([
  { name: "maxCellValue", type: "f32" },
  { name: "terrainHeightMultiplier", type: "f32" },
  { name: "colorSteps", type: "u32" },
  { name: "numberOfTerrainColors", type: "u32" },
  { name: "_padT0", type: "vec2f" }, // padding
]);

// 2) Create the buffer from your app settings/colors
/**
 * @param {GPUDevice} device
 * @param {{
 *   maxCellValue:number,
 *   terrainHeightMultiplier:number,
 *   colorSteps:number,
 * }} settings
 * @param {string[]} terrainColors  // e.g. ["#88cc00", "#ffaa00", ...]
 * @param {GPUBuffer=} existing
 */
export function createOrUpdateTerrainParamsBuffer(
  device,
  settings,
  terrainColors,
  existing
) {
  const params = {
    maxCellValue: settings.maxCellValue,
    terrainHeightMultiplier: settings.terrainHeightMultiplier,
    colorSteps: settings.colorSteps >>> 0,
    numberOfTerrainColors: (terrainColors?.length ?? 0) >>> 0,
    _padT0: [0, 0],
  };

  // Important: keep numberOfTerrainColors in sync with the colors buffer length
  // or your shader may index OOB.
  return createOrUpdateBuffer(
    device,
    TerrainParamsLayout,
    params,
    GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    "Terrain Buffer",
    existing
  );
}

/**
 * @param {GPUDevice} device
 * @param {string[]} colors  // e.g. ["#88cc00", "#ffaa00", ...]
 * @param {GPUBuffer=} existing
 */
export function createOrUpdateTerrainColorsBuffer(device, colors, existing) {
  if (existing !== undefined) {
    device.queue.writeBuffer(existing, 0, hexColorsToFloatArray(colors));
    return existing;
  } else {
    const terrainColorsBuffer = device.createBuffer({
      label: "Terrain Colors Buffer",
      size: colors.length * 16,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    });
    device.queue.writeBuffer(
      terrainColorsBuffer,
      0,
      hexColorsToFloatArray(colors)
    );

    return terrainColorsBuffer;
  }
}

// Terrain Color buffer from hex codes
/**
 * @param {string[]} colors  // e.g. ["#88cc00", "#ffaa00", ...]
 */
function hexColorsToFloatArray(colors) {
  const floats = [];

  for (let color of colors) {
    // Normalize shorthand #RGB → #RRGGBB
    if (/^#([0-9a-fA-F]{3})$/.test(color)) {
      color = color.replace(
        /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,
        "#$1$1$2$2$3$3"
      );
    }

    const match = color.match(/^#([0-9a-fA-F]{6})$/);
    if (!match) continue;

    const hex = match[1];
    const r = parseInt(hex.slice(0, 2), 16) / 255.0;
    const g = parseInt(hex.slice(2, 4), 16) / 255.0;
    const b = parseInt(hex.slice(4, 6), 16) / 255.0;

    floats.push(r, g, b, 1.0); // RGBA, with alpha=1
  }

  return new Float32Array(floats);
}
