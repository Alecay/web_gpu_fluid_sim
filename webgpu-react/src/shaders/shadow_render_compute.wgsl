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

    let sunHeight       = uTerrain.maxCellValue * 1.5;
    let sunPosition     = vec3<f32>(f32(uInput.mousePos.x), sunHeight, f32(uInput.mousePos.y));
    let center          = vec3<f32>(f32(uView.size.x / 2), sunHeight, f32(uView.size.y / 2));
    let terrainInShadow = inShadow(coord, sunPosition);
    let shadowColor     = vec4<f32>(0.0, 0.0, 0.0, 1.0);          // or your tint
    let highlightColor  = vec4f(1.0, 1.0, 1.0, 0.05);
    let shadeColor      = vec4f(0.0, 0.0, 0.0, 0.25);
    let lightDir        = normalize(sunPosition - center);//normalize(sunPosition - terrainPos);

    // Shadow strength s: 0 if not in shadow, else e.g. 0.5 (you can multiply by shadowColor.a if you want)
    var shadowStrength : f32 = 0.5;
    // Build one layer that encodes both effects, then OVER it
    var castedShadowColor = makeCombinedShadowLayer(shadowColor.rgb, select(0.0, shadowStrength, terrainInShadow), 1.0);
    // Apply outline to terrain based on sun position
    var normalOutline = getTerrainOutlineColor(coord, lightDir, shadeColor, highlightColor, castedShadowColor.a < 1e-4);


    // Draw a ring cursor (visual only)
    let mouseWidth  = 3.0;
    let inOuter = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    let inInner = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius - mouseWidth);
    var cursorOutline = clear;
    if (inOuter && !inInner) 
    {
        cursorOutline = vec4f(0.0, 0.0, 0.0, 0.5);
    }

    // Compute the final shadow color
    var finalColor = clear;
    if(uTerrain.colorSteps < 100)
    {
        finalColor = over_rgba(finalColor, normalOutline);
    }
    
    finalColor = over_rgba(finalColor, castedShadowColor);
    finalColor = over_rgba(finalColor, cursorOutline);


    let idOffset = uView.size.x * uView.size.y;
    outputTex[idx(x,y) + idOffset] = finalColor;
}
