// Uses: uView, uTerrain, currentCells, outputTex

@compute @workgroup_size(16, 16, 1)
fn terrain_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    outputTex[idx(x,y)] = getTerrainColor(coord);
}
