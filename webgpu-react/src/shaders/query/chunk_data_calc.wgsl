// Uses: uView, uTerrain, chunkData, currentCells

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

    var fluidMax = 0.0;
    var aFluidMax = 0.0;
    var maxFI : i32 = -1;
    var maxAFI : i32 = -1;
    var currentI : i32 = -1;

    var left:   u32 = startX + 1u;  // inclusive
    var right:  u32 = endX;    // exclusive
    var top:    u32 = startY + 1u;  // inclusive
    var bottom: u32 = endY;    // exclusive

    loop 
    {
        // stop when empty
        if (!(left < right && top < bottom)) { break; }

        // 1) top row (left -> right-1) at y = top
        var x: u32 = left;
        var y: u32 = top;
        loop {
            if (x >= right) { break; }
            {
                let c = currentCells[idx(x, top)];
                let v = c.fAmount;
                if (v > 0.0) {
                    fluidTotal += v;
                } else {
                    anitFluidTotal -= v; // add magnitude of negative
                }

                if(v > fluidMax)
                {
                    maxFI = i32(x - startX + (top - startY) * chunkSize);
                    fluidMax = v;
                }

                if(v < aFluidMax || (currentI == 0i && v < 0.0))
                {
                    maxAFI = i32(x - startX + (top - startY) * chunkSize);
                    aFluidMax = v;
                }

                currentI++;
            }
            x += 1u;
        }
        top += 1u;

        if (!(left < right && top < bottom)) { break; }

        // 2) right column (top -> bottom-1) at x = right-1
        let xr: u32 = right - 1u;
        
        loop {
            if (y >= bottom) { break; }
            {
                let c = currentCells[idx(xr, y)];
                let v = c.fAmount;
                if (v > 0.0) {
                    fluidTotal += v;
                } else {
                    anitFluidTotal -= v; // add magnitude of negative
                }

                if(v > fluidMax)
                {
                    maxFI = i32(xr - startX + (y - startY) * chunkSize);
                    fluidMax = v;
                }

                if(v < aFluidMax || (currentI == 0i && v < 0.0))
                {
                    maxAFI = i32(xr - startX + (y - startY) * chunkSize);
                    aFluidMax = v;
                }
                
                currentI++;
            }
            y += 1u;
        }
        right -= 1u;

        if (!(left < right && top < bottom)) { break; }

        // 3) bottom row (right-1 -> left) at y = bottom-1  (reverse)
        let yb: u32 = bottom - 1u;
        var xi: i32 = i32(right) - 1;          // start at right-1
        loop {
            if (xi < i32(left)) { break; }
            let xu: u32 = u32(xi);
            {
                let c = currentCells[idx(xu, yb)];
                let v = c.fAmount;
                if (v > 0.0) {
                    fluidTotal += v;
                } else {
                    anitFluidTotal -= v; // add magnitude of negative
                }

                if(v > fluidMax)
                {
                    maxFI = i32(xu - startX + (yb - startY) * chunkSize);
                    fluidMax = v;
                }

                if(v < aFluidMax || (currentI == 0i && v < 0.0))
                {
                    maxAFI = i32(xu - startX + (yb - startY) * chunkSize);
                    aFluidMax = v;
                }
                
                currentI++;
            }
            xi -= 1;
        }
        bottom -= 1u;

        if (!(left < right && top < bottom)) { break; }

        // 4) left column (bottom-1 -> top) at x = left  (reverse)
        let xl: u32 = left;
        var yi: i32 = i32(bottom) - 1;         // start at bottom-1
        loop {
            if (yi < i32(top)) { break; }
            let yu: u32 = u32(yi);
            {
                let c = currentCells[idx(xl, u32(yi))];
                let v = c.fAmount;
                if (v > 0.0) {
                    fluidTotal += v;
                } else {
                    anitFluidTotal -= v; // add magnitude of negative
                }

                if(v > fluidMax)
                {
                    maxFI = i32(xl - startX + (u32(yi) - startY) * chunkSize);
                    fluidMax = v;
                }

                if(v < aFluidMax || (currentI == 0i && v < 0.0))
                {
                    maxAFI = i32(xl - startX + (u32(yi) - startY) * chunkSize);
                    aFluidMax = v;
                }
                
                currentI++;
            }
            yi -= 1;
        }
        left += 1u;
    }

    let chunkIdx = chunkX + chunkY * numChunks.x;
    chunkData[chunkIdx].fluidTotal       = fluidTotal;
    chunkData[chunkIdx].anitFluidTotal   = anitFluidTotal;
    chunkData[chunkIdx].deepestFluid     = maxFI;
    chunkData[chunkIdx].deepestAntiFluid = maxAFI;
}
