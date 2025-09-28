@compute @workgroup_size(16, 16, 1)
fn shadow_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let clear = vec4f(0.0, 0.0, 0.0, 0.0);
    let black = vec4f(0.0, 0.0, 0.0, 1.0);
    let white = vec4f(1.0, 1.0, 1.0, 1.0);

    let cell = currentCells[idx(x,y)];
    let currentHeight = roundedCellHeight(coord);

    let sunHeight       = uTerrain.maxCellValue * 2.5;
    let center          = vec3<f32>(f32(uView.size.x / 2), sunHeight, f32(uView.size.y / 2));
    // let sunPosition     = vec3<f32>(f32(uInput.mousePos.x), sunHeight, f32(uInput.mousePos.y));
    let sunPosition     = vec3<f32>(f32(uView.size.x * 3 / 2), sunHeight, center.y);
    let terrainInShadow = inShadow(coord, sunPosition);
    let shadowColor     = vec4<f32>(0.0, 0.0, 0.0, 1.0);          // or your tint
    let highlightColor  = vec4f(1.0, 1.0, 1.0, 0.05);
    let shadeColor      = vec4f(0.0, 0.0, 0.0, 0.25);
    let lightDir        = normalize(sunPosition - center);//normalize(sunPosition - terrainPos);

    var shade = 1.0;
    if(uTerrain.colorSteps >= 100 && distance(vec3(0.0, 1.0, 0.0), cell.heightNormal) > 1e-3)
    {
        shade = clamp(max(dot(cell.heightNormal, lightDir), 0.0) + 0.95, 0.0, 1.0);   // tweak as desired
    }

    // Shadow strength s: 0 if not in shadow, else e.g. 0.5 (you can multiply by shadowColor.a if you want)
    var shadowStrength : f32 = 0.5;
    // Build one layer that encodes both effects, then OVER it
    var castedShadowColor = makeCombinedShadowLayer(shadowColor.rgb, select(0.0, shadowStrength, terrainInShadow), shade);
    // Apply outline to terrain based on sun position
    var normalOutline = getTerrainOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);


    // Compute the final shadow color
    var finalColor = clear;
    if(uTerrain.colorSteps < 100)
    {
        finalColor = over_rgba(finalColor, normalOutline);
    }

    let waterLevel = 50.0;
    let waterAMax = 0.75;
    let waterAMin = 0.3;
    let waterRgb = vec3(0.059, 0.145, 0.478);//0.384, 0.651, 0.663
    let waterHeight = cellFAmount(coord);//waterLevel - currentHeight;
    let waterA = clamp(waterHeight / 50.0 * waterAMax, waterAMin, waterAMax);

    var waterColor = vec4(waterRgb, waterA);
    if(waterHeight > 0.0)
    {
        var waterOutline = getFluidOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);
        waterColor = over_rgba(waterColor, waterOutline);
        finalColor = over_rgba(finalColor, waterColor);
        //castedShadowColor = vec4f(castedShadowColor.rgb, castedShadowColor.a * 0.1);
    }
    finalColor = over_rgba(finalColor, castedShadowColor);

    let idOffset = uView.size.x * uView.size.y;
    outputTex[idx(x,y) + idOffset] = finalColor;
}
