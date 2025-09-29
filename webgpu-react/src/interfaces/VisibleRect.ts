export type VisibleRect = {
  x0: number; // left in canvas coords
  y0: number; // top in canvas coords
  x1: number; // right in canvas coords (exclusive)
  y1: number; // bottom in canvas coords (exclusive)
  width: number;
  height: number;
};

/** Compute visible area in *canvas drawing-buffer* coords. */
export function computeVisibleAreaInCanvas(
  canvas: HTMLCanvasElement
): VisibleRect | null {
  const rect = canvas.getBoundingClientRect(); // CSS px (may be fractional)
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // Fast reject
  if (rect.right <= 0 || rect.left >= vw || rect.bottom <= 0 || rect.top >= vh)
    return null;

  // Intersection in CSS px
  const cssX0 = Math.max(rect.left, 0);
  const cssY0 = Math.max(rect.top, 0);
  const cssX1 = Math.min(rect.right, vw);
  const cssY1 = Math.min(rect.bottom, vh);

  // CSS→canvas scale (prefer exact buffer-to-CSS ratio)
  const sx = rect.width ? canvas.width / rect.width : 1;
  const sy = rect.height ? canvas.height / rect.height : 1;

  // Map to canvas-local (float)
  const fx0 = (cssX0 - rect.left) * sx;
  const fy0 = (cssY0 - rect.top) * sy;
  const fx1 = (cssX1 - rect.left) * sx;
  const fy1 = (cssY1 - rect.top) * sy;

  // Clamp + integerize with a tiny epsilon to avoid +/-1 flicker
  const EPS = 1e-6;
  const ix0 = Math.max(0, Math.floor(fx0 + EPS));
  const iy0 = Math.max(0, Math.floor(fy0 + EPS));
  const ix1 = Math.min(canvas.width, Math.ceil(fx1 - EPS));
  const iy1 = Math.min(canvas.height, Math.ceil(fy1 - EPS));

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
