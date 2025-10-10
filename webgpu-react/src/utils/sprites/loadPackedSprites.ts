export type SpriteEntry = {
  name: string;
  path: string;
  width: number;
  height: number;
  colorStart: number;
  colorBytes: number;
  heightStart: number;
  heightBytes: number;
};

export type SpriteManifest = {
  pixelScale: number;
  mode: "any" | "all";
  count: number;
  entries: SpriteEntry[];
  formatVersion: number;
  endian: "LE";
};

export type PackedSprite = {
  name: string;
  width: number;
  height: number;
  colorsU32: Uint32Array; // RGBA packed (a<<24 | b<<16 | g<<8 | r)
  heightData: Uint32Array; // per-subpixel 0/1
};

/**
 * Loads precomputed sprite data built by build-sprites.mjs
 * @param baseUrl Folder containing manifest.json and sprites.bin
 */
export async function loadPackedSprites(baseUrl = "./sprites_built") {
  const [manifestRes, binRes] = await Promise.all([
    fetch(`${baseUrl}/manifest.json`),
    fetch(`${baseUrl}/sprites_u32.bin`),
  ]);

  const manifest = await manifestRes.json();
  const bin = await binRes.arrayBuffer();

  const spritesU32 = new Uint32Array(bin);

  // Build a lookup map (key: path or name, value: index)
  const spriteMap = new Map<string, number>();
  for (const entry of manifest.entries) {
    spriteMap.set(entry.path, entry.index);
    spriteMap.set(entry.name, entry.index); // optional short key
  }

  return { manifest, spritesU32, spriteMap };
}
