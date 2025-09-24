@compute @workgroup_size(16, 16, 1)
fn shadow_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let black = vec4f(0.0, 0.0, 0.0, 1.0);

    let cell = currentCells[idx(x,y)];

    // Draw a ring cursor (visual only)
    let mouseWidth  = 3.0;
    let inOuter = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    let inInner = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius - mouseWidth);

    // var terrainColor = getTerrainColor(coord);                 // vec4
    let sunPosition  = vec3<f32>(f32(uInput.mousePos.x), 300, f32(uInput.mousePos.y));
    let terrainInShadow = inShadow(coord, sunPosition);
    let shadowColor  = vec4<f32>(0.0, 0.0, 0.0, 1.0);          // or your tint
    let terrainPos   = vec3<f32>(f32(coord.x), sunPosition.y, f32(coord.y));//roundedCellHeight(coord)
    let lightDir     = normalize(sunPosition - terrainPos);

    // Your shade (0..1). Example: plain Lambert with a small floor.
    let rawShade = dot(cell.heightNormal, lightDir);
    var shade = clamp(max(dot(cell.heightNormal, lightDir), 0.0) + 0.95, 0.0, 1.0);   // tweak as desired
    if(distance(vec3(0.0, 1.0, 0.0), cell.heightNormal) < 1e-3)
    {
        shade = 1.0;
    }

    // Shadow strength s: 0 if not in shadow, else e.g. 0.5 (you can multiply by shadowColor.a if you want)
    var shadowStrength : f32 = 0.0;
    if (terrainInShadow) 
    { // your 50% from before
        shadowStrength = 0.5; 
    }                          
    

    // Build one layer that encodes both effects, then OVER it
    var top = makeCombinedShadowLayer(shadowColor.rgb, shadowStrength, shade);

    if (inOuter && !inInner) 
    {
        top = over_rgba(top, mix(top, black, 0.5));
    }

    // let outlineStrength = 0.5;
    // if(distance(vec3(0.0, 1.0, 0.0), cell.heightNormal) > 1e-6)
    // {
    //     if(rawShade <= 0)
    //     {
    //         top *= vec4(1.0, 1.0, 1.0, outlineStrength);
    //     }
    //     else if(rawShade > 0)
    //     {
    //         top *= vec4(0.0, 0.0, 0.0, outlineStrength);
    //     }
    // }

    let idOffset = uView.size.x * uView.size.y;
    outputTex[idx(x,y) + idOffset] = top;
}
