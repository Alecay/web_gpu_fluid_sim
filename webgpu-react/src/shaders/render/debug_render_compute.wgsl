// Uses: uView, chunkData, currentCells, outputTex

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

    let showChunkDebug = uView.showDebug > 0u;
    let chunkSize = 16u;
    var chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.0);
    if(showChunkDebug)
    {
        let chunkPos = getChunkPos(coord, chunkSize);
        let chunkStart = chunkPos * chunkSize;
        let chunkEnd = chunkStart + vec2<u32>(chunkSize, chunkSize);
        let numChunks = getNumChunks(uView.size.x, uView.size.y, chunkSize);
        let chunkIdx = chunkPos.x + chunkPos.y * numChunks.x;

        if(chunkIdx < numChunks.x * numChunks.y)
        {
            let chunk = chunkData[chunkIdx];

            let cx = x % chunkSize;
            let cy = y % chunkSize;

            let inside = (cx >= 0u && cx <= chunkSize - 1u) &&
                        (cy >= 0u && cy <= chunkSize - 1u);

            // on the inner frame (one in from any side)
            let on_inner_frame = (cx == 0u || cx == chunkSize - 1u ||
                                cy == 0u || cy == chunkSize - 1u);

            let isBoundary = inside && on_inner_frame;
            
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
                else
                {
                    if(chunkRegionHasFluid(chunkPos, chunkSize))
                    {
                        chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.5);
                    }
                    else
                    {
                        chunkDebugColor = vec4f(0.0, 0.0, 0.0, 0.1);
                    }
                }
            }

            if(chunk.deepestFluid >= 0)
            {
                let deepestFluidPos = chunkPos * chunkSize + localCoord2D(u32(chunk.deepestFluid), chunkSize);
                if(isDirectNeighbor(deepestFluidPos, coord))
                {
                    chunkDebugColor = vec4f(1.0, 0.5, 0.0, 0.75);
                }
            }

            if(chunk.deepestAntiFluid >= 0)
            {
                let deepestAntiFluidPos = chunkPos * chunkSize + localCoord2D(u32(chunk.deepestAntiFluid), chunkSize);
                if(isDirectNeighbor(deepestAntiFluidPos, coord))
                {
                    chunkDebugColor = vec4f(0.0, 0.5, 1.0, 0.75);
                }
            }

        }       
        
    }

    finalColor = over_rgba(finalColor, chunkDebugColor);


    let idOffset = uView.size.x * uView.size.y * 3;
    outputTex[idx(x,y) + idOffset] = pack4x8unorm(finalColor);
}
