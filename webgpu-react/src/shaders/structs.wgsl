struct View {
    size      : vec2<u32>, // width, height (pixels)
    time      : f32,       // seconds
    _pad0     : f32,
};

struct Input {
    mousePos         : vec2<u32>, // mouse x, y (pixels)
    mouse0Held     : f32,       // 0 or 1
    mouse1Held     : f32,       // 0 or 1
    mouseRadius   : f32,
    _pad0     : vec3<f32>,
};

struct CellData {
    height       : f32,       // 0..3
    heightNormal : vec3<f32>, // starts at 16, uses 16 bytes
    fAmount      : f32,       // at 28
    _pad0        : vec3<f32>, // starts at 32, uses 16 bytes
};
// total size = 48 bytes, 12 floats

// Terrain params you had in HLSL: maxCellValue, terrainHeightMultiplier, colorSteps, numberOfTerrainColors
struct TerrainParams {
  maxCellValue            : f32,   // e.g., 100.0
  terrainHeightMultiplier : f32,   // scales max height
  colorSteps              : u32,   // number of discrete steps used for t
  numberOfTerrainColors   : u32,   // gradient array length
  _padT0                  : vec2<f32>,
};

struct CursorQuery
{
    // Current cell
    cell : CellData
};