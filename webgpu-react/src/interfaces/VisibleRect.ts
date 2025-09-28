export type VisibleRect = {
  x0: number; // left in canvas coords
  y0: number; // top in canvas coords
  x1: number; // right in canvas coords (exclusive)
  y1: number; // bottom in canvas coords (exclusive)
  width: number;
  height: number;
};

/** Visible area in *canvas drawing-buffer* coords. */
export function computeVisibleAreaInCanvas(
  canvas: HTMLCanvasElement,
  viewportW = window.innerWidth,
  viewportH = window.innerHeight
): VisibleRect | null {
  const rect = canvas.getBoundingClientRect(); // CSS pixels on screen

  // Intersection with viewport (still in CSS pixels)
  const vLeft = Math.max(0, Math.min(rect.right, viewportW));
  const vRight = Math.min(viewportW, Math.max(rect.left, 0));
  const vTop = Math.max(0, Math.min(rect.bottom, viewportH));
  const vBottom = Math.min(viewportH, Math.max(rect.top, 0));

  // Note: `vRight` should be the max; swap if needed (could be off-screen)
  const viewX0 = Math.max(0, Math.min(vLeft, vRight));
  const viewX1 = Math.max(0, Math.max(vLeft, vRight));
  const viewY0 = Math.max(0, Math.min(vTop, vBottom));
  const viewY1 = Math.max(0, Math.max(vTop, vBottom));

  if (viewX1 <= viewX0 || viewY1 <= viewY0) return null; // not visible

  // CSS→canvas scale
  const sx = rect.width ? canvas.width / rect.width : 1;
  const sy = rect.height ? canvas.height / rect.height : 1;

  // Map viewport intersection to canvas-local coords
  const x0 = (viewX0 - rect.left) * sx;
  const y0 = (viewY0 - rect.top) * sy;
  const x1 = (viewX1 - rect.left) * sx;
  const y1 = (viewY1 - rect.top) * sy;

  // Integerize for discrete pixels (inclusive/exclusive bounds)
  const ix0 = Math.max(0, Math.floor(x0));
  const iy0 = Math.max(0, Math.floor(y0));
  const ix1 = Math.min(canvas.width, Math.ceil(x1));
  const iy1 = Math.min(canvas.height, Math.ceil(y1));

  if (ix1 <= ix0 || iy1 <= iy0) return null;

  return {
    x0: ix0,
    y0: iy0,
    x1: ix1,
    y1: iy1,
    width: ix1 - ix0,
    height: iy1 - iy0,
  };
}
