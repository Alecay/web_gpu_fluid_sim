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
export async function loadPackedSprites(
  baseUrl = "/sprites_built"
): Promise<PackedSprite[]> {
  // Load manifest + binary in parallel
  const [manifest, bin] = await Promise.all([
    fetch(`${baseUrl}/manifest.json`).then(
      (r) => r.json() as Promise<SpriteManifest>
    ),
    fetch(`${baseUrl}/sprites.bin`).then((r) => r.arrayBuffer()),
  ]);

  const buffer = bin;
  const sprites: PackedSprite[] = [];

  for (const e of manifest.entries) {
    const colorsU32 = new Uint32Array(buffer, e.colorStart, e.colorBytes / 4);
    const heightData = new Uint32Array(
      buffer,
      e.heightStart,
      e.heightBytes / 4
    );

    sprites.push({
      name: e.name,
      width: e.width,
      height: e.height,
      colorsU32,
      heightData,
    });
  }

  return sprites;
}
