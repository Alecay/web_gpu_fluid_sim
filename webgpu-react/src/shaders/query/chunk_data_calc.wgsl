@compute @workgroup_size(1, 1, 1)
fn chunk_data_calc(@builtin(global_invocation_id) gid : vec3<u32>) {
    let chunkX = gid.x;
    let chunkY = gid.y;

    let chunkSize : u32 = 16u;
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);

    if (chunkX >= numChunks.x || chunkY >= numChunks.y) { return; }

    let startX = chunkX * chunkSize;
    let startY = chunkY * chunkSize;
    let endX   = min(startX + chunkSize, uView.size.x);
    let endY   = min(startY + chunkSize, uView.size.y);

    var fluidTotal      : f32 = 0.0;
    var anitFluidTotal  : f32 = 0.0;

    var y = startY;
    loop {
        if (y >= endY) { break; }
        var x = startX;
        loop {
            if (x >= endX) { break; }
            let c = currentCells[idx(x, y)];
            let v = c.fAmount;
            if (v > 0.0) {
                fluidTotal += v;
            } else {
                anitFluidTotal -= v; // add magnitude of negative
            }
            x = x + 1u;
        }
        y = y + 1u;
    }

    let chunkIdx = chunkX + chunkY * numChunks.x;
    chunkData[chunkIdx].fluidTotal      = fluidTotal;
    chunkData[chunkIdx].anitFluidTotal  = anitFluidTotal;
}
