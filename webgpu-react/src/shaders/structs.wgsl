struct View {
    size      : vec2<u32>, // width, height (pixels)
    time      : f32,       // seconds
    simIndex  : u32,       // [0-inf] simulation passes
};

struct Input {
  mousePos     : vec2<u32>, // 0..1: u32 pixels
  mouse0Held   : f32,       // 2: 0/1
  mouse1Held   : f32,       // 3: 0/1
  mouseRadius  : f32,       // 4
  // (12 bytes implicit padding here to align next member to 16B)
  visibleRect  : vec4<u32>, //  (x0, y0, x1, y1) in canvas coords
};                          // total size = 48 bytes

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