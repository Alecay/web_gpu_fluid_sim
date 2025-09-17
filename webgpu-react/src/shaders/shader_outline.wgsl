//{Structs}

//{Helpers}

// =====================================================
// ===================== RENDER ========================
// =====================================================

@group(0) @binding(0) var<uniform>          uView : View;
@group(0) @binding(1) var<storage, read>    currentCells : array<CellData>;
@group(0) @binding(2) var<storage, read>    terrainColors : array<vec4f>;
@group(0) @binding(3) var<uniform>          uTerrain : TerrainParams;

//{Vertex}

//{Fragment}

// =====================================================
// ===================== COMPUTE =======================
// =====================================================

// Compute reads previous (bind 1) and writes next (bind 2)
@group(0) @binding(1) var<storage, read>       prevCells : array<CellData>;
@group(0) @binding(2) var<storage, read_write> nextCells : array<CellData>;

//{step_compute}