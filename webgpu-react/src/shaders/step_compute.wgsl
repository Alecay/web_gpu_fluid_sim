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

    var futureCellValue = getFurtureCellFAmount(coord);
    out.fAmount = futureCellValue;

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
    // // Clamp
    // out.height = clamp(out.height, 0.0, uTerrain.maxCellValue);

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

    // Apply evaporation
    if(out.fAmount < 2.0)
    {
        out.fAmount -= clamp(out.fAmount * 0.001, 0.0, 0.5);
        if(out.fAmount < 0.1 && out.fAmount > 0.0) { out.fAmount = 0.0;}
    }

    // Clamp
    let cellmax = uTerrain.maxCellValue * 2 - out.height;
    out.fAmount = clamp(out.fAmount, 0.0, cellmax);

    nextCells[i] = out;
}
