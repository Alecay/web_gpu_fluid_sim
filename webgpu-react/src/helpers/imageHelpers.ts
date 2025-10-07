// Loads an image and returns width, height, and an RGBA byte array (Uint8Array)
export async function loadImagePixels(url: string): Promise<{
  width: number;
  height: number;
  data: Uint8Array; // RGBA, 8 bits per channel
}> {
  // Avoid tainting the canvas: the server must send CORS headers if cross-origin.
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.decoding = "async";
  img.src = url;
  await img.decode();

  // Use createImageBitmap to avoid layout/DOM issues and to support OffscreenCanvas.
  const bitmap = await createImageBitmap(img);

  // Draw to an OffscreenCanvas (or regular <canvas> if you prefer)
  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(bitmap, 0, 0);

  // ImageData is RGBA, Uint8ClampedArray; copy to Uint8Array if you prefer
  const { data, width, height } = ctx.getImageData(
    0,
    0,
    bitmap.width,
    bitmap.height
  );
  // Make a non-clamped copy that’s friendlier for typed math
  const bytes = new Uint8Array(data.buffer.slice(0)); // copy the buffer

  bitmap.close();
  return { width, height, data: bytes };
}

export function rgba8ToFloat32(src: Uint8Array): Float32Array {
  const N = src.length / 4;
  const out = new Float32Array(N * 4);
  for (let i = 0, j = 0; i < src.length; i += 4, j += 4) {
    out[j + 0] = src[i + 0] / 255;
    out[j + 1] = src[i + 1] / 255;
    out[j + 2] = src[i + 2] / 255;
    out[j + 3] = src[i + 3] / 255; // alpha
  }
  return out;
}

export async function loadImagePixelsF32(url: string): Promise<{
  width: number;
  height: number;
  data: Float32Array; // RGBA, 8 bits per channel
}> {
  const { width, height, data } = await loadImagePixels(url);

  return { width, height, data: rgba8ToFloat32(data) };
}
