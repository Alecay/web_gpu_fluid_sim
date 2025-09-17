struct View {
    size      : vec2<u32>, // width, height (pixels)
    mouse     : vec2<u32>, // mouse x, y (pixels)
    time      : f32,       // seconds
    mouseHeld : f32,       // 0 or 1
    _pad1     : f32,
    _pad2     : f32,
};

struct CellData {
    height  : f32,
    famount : f32,
    _pad0   : f32,
    _pad1   : f32,
};

// Terrain params you had in HLSL: maxCellValue, terrainHeightMultiplier, colorSteps, numberOfTerrainColors
struct TerrainParams {
  maxCellValue            : f32,   // e.g., 100.0
  terrainHeightMultiplier : f32,   // scales max height
  colorSteps              : u32,   // number of discrete steps used for t
  numberOfTerrainColors   : u32,   // gradient array length
  _padT0                  : vec2<f32>,
};