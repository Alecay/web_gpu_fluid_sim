// Uses: uView, uTerrain, uInput, cursorQuery, currentCells

@compute @workgroup_size(1, 1, 1)
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0) { return; }

    let i = idx(uInput.mousePos.x, uInput.mousePos.y);
    var cell = currentCells[i];
    cursorQuery.cell = cell;
}
