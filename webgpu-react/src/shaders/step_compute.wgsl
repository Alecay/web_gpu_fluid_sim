@compute @workgroup_size(16, 16, 1)
fn step(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var prev = prevCells[i];
    var out  = prev; // start from previous state

    // Mouse "paint" demo (writes to next)
    let mouseRadius = 30.0;
    let mouseHeld   = uView.mouseHeld > 0.5;
    if (mouseHeld && inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius)) {
        out.height = out.height + 1.0;
    }

    // Clamp
    out.height = clamp(out.height, 0.0, 100.0);

    nextCells[i] = out;
}
