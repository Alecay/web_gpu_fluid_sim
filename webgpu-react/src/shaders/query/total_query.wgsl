@compute @workgroup_size(1, 1, 1)
fn total_query(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }

    let chunkSize = 16u;
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
    let chunkCount : u32 =  numChunks.x * numChunks.y;

    var fluidTotal : f32 = 0.0;
    var anitFluidTotal : f32 = 0.0;
    for(var i : u32 = 0; i < chunkCount; i++)
    {
        fluidTotal += chunkData[i].fluidTotal;
        anitFluidTotal += chunkData[i].anitFluidTotal;
    }

    cursorQuery.fluidTotal = fluidTotal;
    cursorQuery.anitFluidTotal = anitFluidTotal;
}
