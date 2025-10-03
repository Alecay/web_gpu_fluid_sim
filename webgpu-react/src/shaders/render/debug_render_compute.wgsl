@compute @workgroup_size(16, 16, 1)
fn debug_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    if(!isVisible(coord, 16)) 
    { 
        //outputTex[idx(x,y) + uView.size.x * uView.size.y] = vec4(1.0, 0.0, 0.0, 0.5);
        return; 
    }

    let clear = vec4f(0.0, 0.0, 0.0, 0.0);
    let black = vec4f(0.0, 0.0, 0.0, 1.0);
    let white = vec4f(1.0, 1.0, 1.0, 1.0);

    // Compute the final color
    var finalColor = clear;

    let showChunkDebug = false;
    let chunkSize = 16u;
    var chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.0);
    if(showChunkDebug)
    {
        let chunkPos = getChunkPos(coord, chunkSize);
        let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
        let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;

        if(chunkIdx < numChunks.x * numChunks.y)
        {
            let chunk = chunkData[chunkIdx];

            var isBoundary = (x % chunkSize == 1 || x % chunkSize == chunkSize - 1u) || (y % chunkSize == 1 || y % chunkSize == chunkSize - 1u);
            //isBoundary = chunkPos.y == 0u;//numChunks.y - 1u;
            
            if(isBoundary)
            {
                if(chunk.fluidTotal > 0.0 && chunk.anitFluidTotal > 0.0)
                {
                    chunkDebugColor = vec4f(1.0, 1.0, 0.0, 0.5);
                }
                else if(chunk.fluidTotal > 0.0)
                {
                    chunkDebugColor = vec4f(1.0, 0.0, 0.0, 0.5);
                }
                else if(chunk.anitFluidTotal > 0.0)
                {
                    chunkDebugColor = vec4f(0.0, 1.0, 0.0, 0.5);
                }
            }
        }
        
        if(x % chunkSize == 0 || y % chunkSize == 0)
        {
            chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.5);
        }
        
    }

    finalColor = over_rgba(finalColor, chunkDebugColor);


    let idOffset = uView.size.x * uView.size.y * 3;
    outputTex[idx(x,y) + idOffset] = finalColor;
}
