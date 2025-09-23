//{Structs}

//{Helpers}

@group(0) @binding(0) var<uniform> uView : View;
@group(0) @binding(1) var<uniform> uInput : Input;
@group(0) @binding(2) var<uniform> uTerrain : TerrainParams;

// =====================================================
// ===================== RENDER ========================
// =====================================================

@group(0) @binding(3) var<storage, read_write> currentCells : array<CellData>;
@group(0) @binding(4) var<storage, read>       terrainColors : array<vec4f>;
@group(0) @binding(5) var<storage, read_write> outputTex : array<vec4f>;


//{Vertex}

//{Fragment}

// =====================================================
// ===================== COMPUTE =======================
// =====================================================

//{normal_compute}

//{render_compute}

// Compute reads previous (bind 1) and writes next (bind 2)
@group(0) @binding(3) var<storage, read_write> prevCells : array<CellData>;
@group(0) @binding(4) var<storage, read_write> nextCells : array<CellData>;

//{step_compute}