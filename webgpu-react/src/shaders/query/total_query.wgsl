// Uses: uView, uTerrain, cursorQuery, currentCells, chunkData

@compute @workgroup_size(1, 1, 1)
fn total_query(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }

    let chunkSize = 16u;
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
    let chunkCount : u32 =  numChunks.x * numChunks.y;

    var fluidTotal : f32 = 0.0;
    var anitFluidTotal : f32 = 0.0;
    var chunkUpdates : u32 = 0u;

    for(var i : u32 = 0; i < chunkCount; i++)
    {
        let chunkPos = vec2<u32>(i % numChunks.x, i / numChunks.x);
        let chunkUpdated = chunkRegionHasFluid(chunkPos, chunkSize);

        fluidTotal += chunkData[i].fluidTotal;
        anitFluidTotal += chunkData[i].anitFluidTotal;

        if(chunkUpdated) { chunkUpdates++; }
    }

    cursorQuery.fluidTotal = fluidTotal;
    cursorQuery.anitFluidTotal = anitFluidTotal;
    cursorQuery.chunkUpdates = chunkUpdates;
}
