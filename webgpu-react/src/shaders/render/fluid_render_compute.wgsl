// Uses: uView, uTerrain, chunkData, currentCells, outputTex

@compute @workgroup_size(16, 16, 1)
fn fluid_render(@builtin(global_invocation_id) gid : vec3<u32>) {
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

    // Compute the final shadow color
    let idOffset = uView.size.x * uView.size.y * 2;
    var finalColor = clear;

    let chunkSize = 16u;
    let chunk = getChunk(getChunkPos(coord, chunkSize), chunkSize);
    if(chunk.fluidTotal < 1e-7 && chunk.anitFluidTotal < 1e-7)
    {
        outputTex[idx(x,y) + idOffset] = clear;
        return;
    }

    let fluidLevel = (f32(uTerrain.maxCellValue) * 1.0);
    let fluidAMax = 0.75;
    let fluidAMin = 0.3;
    let fluidRgb = vec3(0.059, 0.145, 0.478);//0.384, 0.651, 0.663
    let fluidHeight = cellFAmount(coord);
    let terrainHeight = cellHeight(coord);
    let fluidA = clamp(fluidHeight / fluidLevel * fluidAMax, fluidAMin, fluidAMax);

    let antiFluidRgb = vec3(1.0, 1.0, 1.0);//0.384, 0.651, 0.663
    let antiFluidA = clamp(fluidHeight / -fluidLevel * fluidAMax, fluidAMin, fluidAMax);

    var fluidColor = select(vec4(fluidRgb, fluidA), vec4(antiFluidRgb, antiFluidA), fluidHeight < 0);
    

    //Compute Outline
    if(abs(fluidHeight) > 0.0)
    {
        finalColor = over_rgba(finalColor, fluidColor);

        var fluidOutline = clear;//getFluidOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);
        let epsilon = getColorStepHeight() * 0.9;
        if(abs(fluidHeight) + terrainHeight < f32(uTerrain.maxCellValue) * 2.0 && isFluidBoundary(coord, epsilon))
        {
            fluidOutline = lerp4(fluidColor, vec4(0.0, 0.0, 0.0, fluidA), 0.5);
            finalColor = over_rgba(finalColor, fluidOutline);
        }
    }
    


    outputTex[idx(x,y) + idOffset] = finalColor;
}
