fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {
    // ceil(width / chunkSize) = (width + chunkSize - 1) / chunkSize
    let chunksX = (width  + chunkSize - 1u) / chunkSize;
    let chunksY = (height + chunkSize - 1u) / chunkSize;
    return vec2<u32>(chunksX, chunksY);
}

fn getChunkPos(cellPos: vec2<u32>, chunkSize: u32) -> vec2<u32> {
    return cellPos / vec2<u32>(chunkSize, chunkSize);
}

fn clampChunkPos(chunkPos: vec2<i32>, chunkSize: u32) -> vec2<u32>
{
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
    return vec2<u32>(
        u32(clamp(chunkPos.x, 0i, i32(numChunks.x) - 1i)), 
        u32(clamp(chunkPos.y, 0i, i32(numChunks.x) - 1i)));
}

fn getChunk(chunkPos: vec2<u32>, chunkSize: u32) -> ChunkData
{
    let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
    let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;
    return chunkData[chunkIdx];
}

fn getSurroundingChunk(chunkPos: vec2<u32>, chunkSize: u32, index: u32) -> ChunkData
{
    let chunkPosI = vec2<i32>(chunkPos);
    var nCoord = chunkPos;
    if(index == 0)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(0, 1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 1)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, 1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 2)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, 0), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 3)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(1, -1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 4)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(0, -1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 5)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, -1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 6)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, 0), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    else if(index == 7)
    {
        nCoord = clampChunkPos(chunkPosI + vec2<i32>(-1, 1), chunkSize);
        return getChunk(nCoord, chunkSize);
    }
    

    return getChunk(nCoord, chunkSize);
}

fn chunkHasFluid(chunkPos: vec2<u32>, chunkSize: u32) -> bool
{
    let epsilon = 1e-7;
    let chunk = getChunk(chunkPos, chunkSize);
    return (chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon);
}

fn chunkRegionHasFluid(chunkPos: vec2<u32>, chunkSize: u32) -> bool
{
    let epsilon = 1e-7;
    var chunk = getChunk(chunkPos, chunkSize);
    if(chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon) {return true; }

    for(var i = 0u; i < 8u; i++)
    {
        chunk = getSurroundingChunk(chunkPos, chunkSize, i);
        if(chunk.fluidTotal > epsilon || chunk.anitFluidTotal > epsilon) {return true; }
    }

    return false;
}

fn localCoord2D(cellIdx: u32, chunkSize: u32) -> vec2<u32> {
    let x = cellIdx % chunkSize;
    let y = cellIdx / chunkSize;
    return vec2<u32>(x, y);
}