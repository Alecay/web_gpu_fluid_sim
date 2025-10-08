// @ts-check
import { defineStructLayout, createOrUpdateBuffer } from "./wgslPacker.js";

/*
struct Input {
    mousePos         : vec2<u32>, // mouse x, y (pixels)
    mouse0Held     : f32,       // 0 or 1
    mouse1Held     : f32,       // 0 or 1
    mouseRadius   : f32,
    _pad0     : vec3<f32>,
};
*/

export const InputLayout = defineStructLayout([
  { name: "mousePos", type: "vec2u" },
  { name: "mouse0Held", type: "f32" },
  { name: "mouse1Held", type: "f32" },
  { name: "mouse2Held", type: "f32" },
  { name: "mouseRadius", type: "f32" },
  { name: "visibleRect", type: "vec4u" },
]);

/**
 * @param {GPUDevice} device
 * @param {{
 *   mousePos : {x : number, y : number},
 *   mouse0Held : boolean,
 *   mouse1Held : boolean,
 *   mouse2Held : boolean,
 *   mouseRadius : number,
 *   visibleRect: {x0 : number, x1: number, y0: number, y1: number, width: number, height: number}
 * }} settings
 * @param {GPUBuffer=} existing
 */
export function createOrUpdateInputBuffer(device, settings, existing) {
  const params = {
    mousePos: [settings.mousePos.x, settings.mousePos.y],
    mouse0Held: settings.mouse0Held ? 1 : 0,
    mouse1Held: settings.mouse1Held ? 1 : 0,
    mouse2Held: settings.mouse2Held ? 1 : 0,
    mouseRadius: settings.mouseRadius,
    visibleRect: [
      settings.visibleRect.x0,
      settings.visibleRect.y0,
      settings.visibleRect.x1,
      settings.visibleRect.y1,
    ],
  };

  return createOrUpdateBuffer(
    device,
    InputLayout,
    params,
    GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    "Input Buffer",
    existing
  );
}
