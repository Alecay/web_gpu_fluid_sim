@compute @workgroup_size(16, 16, 1)
fn cursor_query(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = uInput.mousePos.x;
    let y = uInput.mousePos.y;
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var cell = currentCells[i];
    // cell.height = roundedCellHeight(vec2(x,y));
    // cell.fAmount = roundedCellFAmount(vec2(x,y));
    cursorQuery.cell = cell;
}
