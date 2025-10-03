@compute @workgroup_size(16, 16, 1)
fn calc_normals(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var out = currentCells[i];

    let sNorm = surfaceNormalSobel(coord);
    out.heightNormal = sNorm;

    currentCells[i] = out;
}
