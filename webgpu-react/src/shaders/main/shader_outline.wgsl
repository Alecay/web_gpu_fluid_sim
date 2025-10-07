//{colors}

//{structs}

//{object_def}

//{helpers}

//{flow_helpers}

//{chunk_helpers}

//{sprite_helpers}

// Binding Group 0 - Uniforms
@group(0) @binding(0)  var<uniform>             uView                       : View;
@group(0) @binding(1)  var<uniform>             uInput                      : Input;
@group(0) @binding(2)  var<uniform>             uTerrain                    : TerrainParams;

@group(0) @binding(3)  var<storage, read_write> currentCells                : array<CellData>;
@group(0) @binding(4)  var<storage, read_write> nextCells                   : array<CellData>;

@group(0) @binding(5)  var<storage, read>       terrainColors               : array<vec4f>;
@group(0) @binding(6)  var<storage, read_write> outputTex                   : array<u32>;
@group(0) @binding(7)  var<storage, read_write> cursorQuery                 : CursorQuery;
@group(0) @binding(8)  var<storage, read_write> chunkData                   : array<ChunkData>;
@group(0) @binding(9) var<storage, read>        sprites                     : array<SpriteData>;
// @group(0) @binding(10) var<storage, read>       spriteColors                : array<vec4f>;


// =====================================================
// ===================== RENDER ========================
// =====================================================

//{vertex}

//{fragment}

// =====================================================
// ===================== COMPUTE =======================
// =====================================================

//{normal_compute}

//{terrain_render_compute}

//{shadow_render_compute}

//{fluid_render_compute}

//{debug_render_compute}

//sprite_render_compute

//{step_compute}

//{cursor_query}

//{total_query}

//{chunk_data_calc}