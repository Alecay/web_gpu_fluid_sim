const MAX_SLICES_PER_CELL : u32 = 3u;

struct ObjectCell
{
    color       : vec4<f32>, // color of the cell's top most
    sliceCount  : u32,
    _pad0       : vec3<u32>,                 // keep 16B alignment
    slices      : array<vec2<f32>, MAX_SLICES_PER_CELL>
};

struct ObjectDef {
  size          : vec2<u32>,
  cellOffset    : u32,                       // into OBJ_CELLS
  cellCount     : u32,
}

// const EMPTY_OBJ_CELL : ObjectCell = ObjectCell(
//     COLOR_CLEAR, 
//     array<vec2<f32>, 3>(
//         vec2()
//     )
// );
// const TREE_CANOPY_CELL : ObjectCell = ObjectCell(COLOR_GREEN, array<vec2<f32>, 0>());
// const TREE_TRUNK_CELL : ObjectCell = ObjectCell(COLOR_GREEN, array<vec2<f32>, 0>());

const OBJECT_DEFS  : array<ObjectDef, 1> = array<ObjectDef, 1>(
    // 0 - Columnar Tree (small)
    ObjectDef(vec2(4u, 4u), 0u, 16u),
);

const TOTAL_OBJ_CELL_COUNT = 16u;

// const OBJECT_CELLS : array<ObjectCell, TOTAL_OBJ_CELL_COUNT> = array<ObjectCell, TOTAL_OBJ_CELL_COUNT>(
//     EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,
// );

// const OBJECT_DEFS  : array<ObjectDef, 1> = array<ObjectDef, 1>(
//     // 0 - Columnar Tree (small)
//     ObjectDef(
//         vec2<u32>(4u, 4u), 
//         array<ObjectCell, 4 * 4> (
//             // empty
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,
//             EMPTY_OBJ_CELL, TREE_CANOPY_CELL, TREE_CANOPY_CELL, EMPTY_OBJ_CELL,
//             // lower canopy

//         )),
// );

