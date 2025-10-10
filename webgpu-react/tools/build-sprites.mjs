#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { glob } from "glob";
import minimist from "minimist";

/* ==============================
   Constants (must match WGSL)
   ============================== */
export const MAX_SPRITE_WIDTH = 64;
const MAX_SPRITE_SIZE = MAX_SPRITE_WIDTH * MAX_SPRITE_WIDTH;
const HEADER_U32 = 4; // width,height,pad,pad
const STRIDE_U32 = HEADER_U32 + MAX_SPRITE_SIZE * 2; // colors[N] + heights[N]
const STRIDE_BYTES = STRIDE_U32 * 4;

if (STRIDE_BYTES % 16 !== 0) {
  console.warn(`WARN: STRIDE_BYTES (${STRIDE_BYTES}) is not 16-byte aligned`);
}

/* ==============================
   CLI args
   ============================== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = minimist(process.argv.slice(2), {
  string: ["outDir", "mode"],
  default: {
    pixelScale: 4,
    mode: "any", // "any" | "all"
    outDir: "public/sprites_built",
  },
});

const pixelScale = Number(args.pixelScale);
const requireAll = args.mode === "all";
const outDir = path.resolve(process.cwd(), args.outDir);

/* ==============================
   Inputs (globs)
   ============================== */
const patterns = args._.length ? args._ : ["public/sprites/**/*.{png,PNG}"];
const inputs = (
  await Promise.all(patterns.map((p) => glob(p, { nodir: true })))
).flat();

if (inputs.length === 0) {
  console.error("No input sprites found for patterns:", patterns);
  process.exit(1);
}

await fs.promises.mkdir(outDir, { recursive: true });

const outBin = path.join(outDir, "sprites.bin");
const outManifest = path.join(outDir, "manifest.json");
const outPacked = path.join(outDir, "sprites_u32.bin");

/* ==============================
   Helpers
   ============================== */

// Packs RGBA bytes into a u32 per pixel.
// JS side will read back with (r = c>>0&0xff, g = c>>8&0xff, b = c>>16&0xff, a = c>>24&0xff)
function packRGBAtoU32(raw /* Uint8Array RGBA */) {
  const n = raw.length / 4;
  const u32 = new Uint32Array(n);
  for (let i = 0, p = 0; i < n; i++, p += 4) {
    const r = raw[p + 0];
    const g = raw[p + 1];
    const b = raw[p + 2];
    const a = raw[p + 3];
    // ABGR in memory terms; consistent with the unpack above.
    u32[i] = (a << 24) | (b << 16) | (g << 8) | (r << 0);
  }
  return Buffer.from(u32.buffer);
}

// Build per-subpixel height (0/1) using "any" or "all" semantics at cell (pixelScale) granularity
function buildHeightDataU32({
  width,
  height,
  rgbaU32,
  pixelScale,
  requireAll,
}) {
  const cellW = Math.ceil(width / pixelScale);
  const cellH = Math.ceil(height / pixelScale);
  const cellMask = new Uint8Array(cellW * cellH);
  if (requireAll) cellMask.fill(1);

  // Pass A: per-cell aggregate
  for (let y = 0; y < height; y++) {
    const rowBase = y * width;
    const cy = Math.floor(y / pixelScale);
    const cyBase = cy * cellW;
    for (let x = 0; x < width; x++) {
      const pix = rgbaU32[rowBase + x] >>> 0;
      const alpha = (pix >>> 24) & 0xff;
      const cx = Math.floor(x / pixelScale);
      const idx = cyBase + cx;
      if (requireAll) {
        if (alpha === 0) cellMask[idx] = 0;
      } else {
        if (alpha > 0) cellMask[idx] = 1;
      }
    }
  }

  // Pass B: expand back to per-subpixel u32 (0/1)
  const out = new Uint32Array(width * height);
  for (let y = 0; y < height; y++) {
    const rowBase = y * width;
    const cy = Math.floor(y / pixelScale);
    const cyBase = cy * cellW;
    for (let x = 0; x < width; x++) {
      const cx = Math.floor(x / pixelScale);
      out[rowBase + x] = cellMask[cyBase + cx];
    }
  }
  return Buffer.from(out.buffer);
}

/* ==============================
   Build
   ============================== */

console.log(
  `Building ${inputs.length} sprites (mode=${args.mode}, pixelScale=${pixelScale})...`
);

const entries = [];
const buffers = [];

let byteOffset = 0;

for (let i = 0; i < inputs.length; i++) {
  const inPath = inputs[i];
  const base = path.basename(inPath);

  const img = sharp(inPath);
  const { width, height } = await img.metadata();
  if (!width || !height) throw new Error(`No size for ${inPath}`);

  // Raw RGBA
  const raw = await img
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: false });

  // Pack to U32 (colors)
  const colorsU32Buf = packRGBAtoU32(new Uint8Array(raw));
  const colorsU32View = new Uint32Array(
    colorsU32Buf.buffer,
    colorsU32Buf.byteOffset,
    colorsU32Buf.byteLength / 4
  );

  // Height data
  const heightU32Buf = buildHeightDataU32({
    width,
    height,
    rgbaU32: colorsU32View,
    pixelScale,
    requireAll,
  });

  // Append to big binary stream (record offsets)
  const colorStart = byteOffset; // bytes
  const colorBytes = colorsU32Buf.byteLength; // bytes
  buffers.push(colorsU32Buf);
  byteOffset += colorBytes;

  const heightStart = byteOffset;
  const heightBytes = heightU32Buf.byteLength;
  buffers.push(heightU32Buf);
  byteOffset += heightBytes;

  entries.push({
    index: i,
    name: base,
    path: inPath.replace(/\\/g, "/"),
    width,
    height,
    colorStart,
    colorBytes,
    heightStart,
    heightBytes,
  });

  console.log(
    `✔ ${base}  ${width}x${height}  colors:${(colorBytes / 1024).toFixed(
      1
    )}KB  height:${(heightBytes / 1024).toFixed(1)}KB`
  );
}

/* One big buffer for all sprite sections */
const big = Buffer.concat(buffers);

/* Build final WGSL-layout packed array (header + colors + heights per sprite) */
const spriteCount = entries.length;
const spritesU32 = new Uint32Array(spriteCount * STRIDE_U32);

for (let i = 0; i < spriteCount; i++) {
  const e = entries[i];
  const { width, height } = e;
  const base = i * STRIDE_U32;

  // Header
  spritesU32[base + 0] = width >>> 0;
  spritesU32[base + 1] = height >>> 0;
  spritesU32[base + 2] = 0;
  spritesU32[base + 3] = 0;

  // Views into the big concatenated buffer
  const colorsU32 = new Uint32Array(
    big.buffer,
    big.byteOffset + e.colorStart,
    e.colorBytes / 4
  );
  const heightsU32 = new Uint32Array(
    big.buffer,
    big.byteOffset + e.heightStart,
    e.heightBytes / 4
  );

  const count = Math.min(MAX_SPRITE_SIZE, colorsU32.length, heightsU32.length);
  if (
    colorsU32.length > MAX_SPRITE_SIZE ||
    heightsU32.length > MAX_SPRITE_SIZE
  ) {
    console.warn(
      `WARN: ${e.name} exceeds MAX_SPRITE_SIZE (${MAX_SPRITE_SIZE}); truncating.`
    );
  }

  // Colors then heights; remaining slots are left as 0
  spritesU32.set(colorsU32.subarray(0, count), base + HEADER_U32);
  spritesU32.set(
    heightsU32.subarray(0, count),
    base + HEADER_U32 + MAX_SPRITE_SIZE
  );
}

/* ==============================
   Write outputs
   ============================== */

await fs.promises.writeFile(outBin, big);

await fs.promises.writeFile(
  outManifest,
  JSON.stringify(
    {
      formatVersion: 1,
      endian: "LE",
      mode: args.mode,
      pixelScale,
      count: entries.length,
      maxSpriteWidth: MAX_SPRITE_WIDTH,
      maxSpriteSize: MAX_SPRITE_SIZE,
      layout: {
        headerU32: HEADER_U32,
        strideU32: STRIDE_U32,
      },
      entries, // offsets into sprites.bin
    },
    null,
    2
  )
);

// Final GPU buffer initializer
await fs.promises.writeFile(outPacked, Buffer.from(spritesU32.buffer));

console.log(
  `\nWrote ${path.relative(process.cwd(), outBin)} (${(
    big.byteLength / 1024
  ).toFixed(1)} KB)`
);
console.log(`Wrote ${path.relative(process.cwd(), outManifest)}`);
console.log(
  `Wrote ${path.relative(process.cwd(), outPacked)} (${(
    spritesU32.byteLength / 1024
  ).toFixed(1)} KB)`
);

/* ==============================
   How to load at runtime:
   ============================== */
/*
  // 1) Upload prepacked buffer directly:


  // 2) (Optional) still use manifest if you need per-sprite width/height at runtime:
  const manifest = await fetch("/sprites_built/manifest.json").then(r => r.json());
*/
