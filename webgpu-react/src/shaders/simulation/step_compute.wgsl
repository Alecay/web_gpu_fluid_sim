// Uses: uView, uTerrain, uInput, cursorQuery, currentCells, nextCells

@compute @workgroup_size(16, 16, 1)
fn step(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2<u32>(x, y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var prev = currentCells[i];
    var out  = prev; // start from previous state

    // Mouse "paint" demo (writes to next)
    let mouse0Held = uInput.mouse0Held > 0.5;
    let mouse1Held = uInput.mouse1Held > 0.5;

    let dSqrd = distanceSqrd(vec2<u32>(x,y), uInput.mousePos);
    let radiusSqrd = uInput.mouseRadius * uInput.mouseRadius;
    var radiusT = clamp((radiusSqrd - dSqrd) / radiusSqrd, 0.0, 1.0);
    radiusT = radiusT * radiusT;
    let inside = dSqrd <= radiusSqrd;

    let chunkSize = 16u;
    let chunkPos = getChunkPos(coord, chunkSize);
    let shouldSim = chunkRegionHasFluid(chunkPos, chunkSize);

    if(shouldSim)
    {
      var futureCellValue = getFurtureCellFAmount(coord);
      out.fAmount = futureCellValue;
    }


    // height editing
    // if(mouse0Held || mouse1Held)
    // {
    //     let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    //     if (mouse0Held && inside) {
    //         out.height = out.height + 1.0;
    //     }
    //     else if (mouse1Held && inside) {
    //         out.height = out.height - 1.0;
    //     }
    // }
    // Clamp
    out.height = clamp(out.height, 0.0, uTerrain.maxCellValue);

    // Fluid editing
    let fStrength = 3.0;
    if(mouse0Held || mouse1Held)
    {
        //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
        if (mouse0Held && inside) {
            out.fAmount = out.fAmount + fStrength * radiusT;
        }
        else if (mouse1Held && inside) {
            out.fAmount = out.fAmount - fStrength * radiusT;
        }
    }

    let simPerSec = 60.0;
    let ePerSec = 3.0;

    var eD = distanceSqrd(vec2<u32>(x, y), vec2<u32>(270, 350));
    if(eD < 5)
    {
      out.fAmount += ePerSec;
    }

    eD = distanceSqrd(vec2<u32>(x, y), vec2<u32>(720, 120));
    if(eD < 5)
    {
      out.fAmount -= ePerSec;
    }


    // Apply evaporation
    let ns = directNeighorCount(vec2<i32>(coord));
    let aAmount = abs(out.fAmount);
    if((ns <= 3 && aAmount < 10.0) || (aAmount <= 2.0 && ns < 8))
    {
      let evapAmount = 0.01;
      out.fAmount -= clamp(out.fAmount * evapAmount, -evapAmount, evapAmount);
      if (abs(out.fAmount) < 0.1) { out.fAmount = 0.0;}
    }

    // Clamp
    let cellmax : f32 = uTerrain.maxCellValue * 2 - out.height;
    out.fAmount = clamp(out.fAmount, -cellmax, cellmax);

    nextCells[i] = out;
}