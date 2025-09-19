@compute @workgroup_size(16, 16, 1)
fn step(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var prev = prevCells[i];
    var out  = prev; // start from previous state

    // Mouse "paint" demo (writes to next)
    let mouse0Held   = uInput.mouse0Held > 0.5;
    let mouse1Held   = uInput.mouse1Held > 0.5;
    
if(mouse0Held || mouse1Held)
{
    let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    if (mouse0Held &&inside) {
        out.height = out.height + 1.0;
    }
    else if (mouse1Held && inside) {
        out.height = out.height - 1.0;
    }
}


    // Clamp
    out.height = clamp(out.height, 0.0, 100.0);

    nextCells[i] = out;
}
