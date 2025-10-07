// @ts-check
import { defineStructLayout, createOrUpdateBuffer } from "./wgslPacker.js";

/*
struct View {
    size      : vec2<u32>, // width, height (pixels)
    time      : f32,       // seconds
    _pad0     : f32,
};
*/

export const ViewLayout = defineStructLayout([
  { name: "size", type: "vec2u" },
  { name: "time", type: "f32" },
  { name: "simIndex", type: "u32" },
  { name: "showDebug", type: "u32" },
  { name: "pixelScale", type: "u32" },
  // padding
]);

/**
 * @param {GPUDevice} device
 * @param {{
 *   width : number,
 *   height : number,
 *   time : number,
 *   simIndex: number,
 *   showDebug: boolean,
 *   pixelScale : number,
 * }} settings
 * @param {GPUBuffer=} existing
 */
export function createOrUpdateViewBuffer(device, settings, existing) {
  const params = {
    size: [settings.width, settings.height],
    time: settings.time,
    simIndex: settings.simIndex,
    showDebug: settings.showDebug ? 1 : 0,
    pixelScale: settings.pixelScale,
  };

  return createOrUpdateBuffer(
    device,
    ViewLayout,
    params,
    GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    "View Buffer",
    existing
  );
}
