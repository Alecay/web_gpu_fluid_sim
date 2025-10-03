fn getNumChunks(width: u32, height: u32, chunkSize: u32) -> vec2<u32> {
    // ceil(width / chunkSize) = (width + chunkSize - 1) / chunkSize
    let chunksX = (width  + chunkSize - 1u) / chunkSize;
    let chunksY = (height + chunkSize - 1u) / chunkSize;
    return vec2<u32>(chunksX, chunksY);
}

fn getChunkPos(cellPos: vec2<u32>, chunkSize: u32) -> vec2<u32> {
    return cellPos / vec2<u32>(chunkSize, chunkSize);
}