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

    // Draw a ring cursor (visual only)
    let mouseWidth  = 3.0;
    let inOuter = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    let inInner = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius - mouseWidth);

    let sunHeight    = uTerrain.maxCellValue * 1.25;
    let sunPosition  = vec3<f32>(f32(uInput.mousePos.x), sunHeight, f32(uInput.mousePos.y));
    let center       = vec3<f32>(f32(uView.size.x / 2), sunHeight, f32(uView.size.y / 2));
    let terrainInShadow = inShadow(coord, sunPosition);
    let shadowColor  = vec4<f32>(0.0, 0.0, 0.0, 1.0);          // or your tint
    let terrainPos   = vec3<f32>(f32(coord.x), sunPosition.y, f32(coord.y));//roundedCellHeight(coord)
    let rawLightDir  = sunPosition - terrainPos;
    let lightDir     = normalize(sunPosition - center);//normalize(sunPosition - terrainPos);

    // Your shade (0..1). Example: plain Lambert with a small floor.
    // let rawShade = dot(cell.heightNormal, lightDir);
    // var shade = clamp(max(dot(cell.heightNormal, lightDir), 0.0) + 0.95, 0.0, 1.0);   // tweak as desired
    // if(distance(vec3(0.0, 1.0, 0.0), cell.heightNormal) < 1e-3)
    // {
    //     shade = 1.0;
    // }
    // shade = 1.0;

    // Shadow strength s: 0 if not in shadow, else e.g. 0.5 (you can multiply by shadowColor.a if you want)
    var shadowStrength : f32 = 0.0;
    if (terrainInShadow) 
    { // your 50% from before
        shadowStrength = 0.5; 
    }

    // Build one layer that encodes both effects, then OVER it
    var castedShadowColor = makeCombinedShadowLayer(shadowColor.rgb, shadowStrength, 1.0);

    let highlightColor = vec4f(1.0, 1.0, 1.0, 0.05);
    let shadeColor = vec4f(0.0, 0.0, 0.0, 0.25);
    //top = clear;

    let nVal0 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
    let nVal1 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));
    let nVal2 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));
    let nVal3 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));
    let nVal4 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));
    let nVal5 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));
    let nVal6 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));
    let nVal7 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));

    var normalOutline = clear;

    // if(abs(rawLightDir.x) > abs(rawLightDir.z))
    // {
    //     if(lightDir.x <= 0)
    //     {
    //         if(max(max(nVal6, nVal7), nVal5) > currentHeight )
    //         {
    //             normalOutline = shadeColor;
    //         }
    //         else if(min(min(nVal6, nVal7), nVal5) < currentHeight )
    //         {
    //             normalOutline = highlightColor;
    //         }
    //     }
    //     else if(lightDir.x > 0)
    //     {
    //         var m = max(max(nVal2, nVal1), nVal3);
    //         if(max(max(nVal2, nVal1), nVal3) > currentHeight )
    //         {
    //             normalOutline = shadeColor;
    //         }

    //         // highlights
    //         if(min(min(nVal2, nVal1), nVal3) < currentHeight )
    //         {
    //             normalOutline = highlightColor;
    //         }
    //     }
    // }
    // else
    // {
    //     if(lightDir.z <= 0)
    //     {
    //         if(max(max(nVal4, nVal5), nVal3) > currentHeight )
    //         {
    //             normalOutline = shadeColor;
    //         }

    //         // highlights
    //         if(min(min(nVal4, nVal5), nVal3) < currentHeight )
    //         {
    //             normalOutline = highlightColor;
    //         }
    //     }
    //     else if(lightDir.z > 0)
    //     {
    //         if(max(max(nVal0, nVal7), nVal1) > currentHeight )
    //         {
    //             normalOutline = shadeColor;
    //         }

    //         // highlights
    //         if(min(min(nVal0, nVal7), nVal1) < currentHeight )
    //         {
    //             normalOutline = highlightColor;
    //         }
    //     }
    // }

    // axis feather width in direction space (tweak 0.08..0.2)
    let k = 30.0;

    // weights that go to 1 near the seam (x≈0 or z≈0)
    let sx = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.x));
    let sz = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.z));

    // --- compute your four triplet results exactly as before ---
    let maxXp = max(max(nVal2, nVal1), nVal3);
    let minXp = min(min(nVal2, nVal1), nVal3);
    let maxXn = max(max(nVal6, nVal7), nVal5);
    let minXn = min(min(nVal6, nVal7), nVal5);
    let maxZp = max(max(nVal0, nVal7), nVal1);
    let minZp = min(min(nVal0, nVal7), nVal1);
    let maxZn = max(max(nVal4, nVal5), nVal3);
    let minZn = min(min(nVal4, nVal5), nVal3);

    // base directional weights (no branching)
    var wxp = max(lightDir.x, 0.0);
    var wxn = max(-lightDir.x, 0.0);
    var wzp = max(lightDir.z, 0.0);
    var wzn = max(-lightDir.z, 0.0);

    // add a tiny floor so weights never hit exact 0 at the seam
    let epsW = 1e-3;
    wxp += epsW; wxn += epsW; wzp += epsW; wzn += epsW;

    // normalize
    let wsum = wxp + wxn + wzp + wzn;
    let WXp = wxp / wsum;
    let WXn = wxn / wsum;
    let WZp = wzp / wsum;
    let WZn = wzn / wsum;

    // pre-blend (no seam)
    var blendedMax = WXp*maxXp + WXn*maxXn + WZp*maxZp + WZn*maxZn;
    var blendedMin = WXp*minXp + WXn*minXn + WZp*minZp + WZn*minZn;

    // axis cross-fade: when near x=0, mix X+ and X−; when near z=0, mix Z+ and Z−
    let maxX_axis = mix(maxXp, maxXn, 0.5 + 0.5*sign(-lightDir.x)); // equal when |x| small
    let minX_axis = mix(minXp, minXn, 0.5 + 0.5*sign(-lightDir.x));
    let maxZ_axis = mix(maxZp, maxZn, 0.5 + 0.5*sign(-lightDir.z));
    let minZ_axis = mix(minZp, minZn, 0.5 + 0.5*sign(-lightDir.z));

    // stronger replacement only *near* axes
    blendedMax = mix(blendedMax, 0.5*(maxX_axis + maxZ_axis), max(sx, sz));
    blendedMin = mix(blendedMin, 0.5*(minX_axis + minZ_axis), max(sx, sz));

    let E = 1e-4;  // tiny dead zone to avoid flicker on flats
    if (blendedMax > currentHeight + E) {
        normalOutline = shadeColor;
    } else if (blendedMin < currentHeight - E && castedShadowColor.a <= E) {
        normalOutline = highlightColor;
    }

    var cursorOutline = clear;
    if (inOuter && !inInner) 
    {
        cursorOutline = vec4f(0.0, 0.0, 0.0, 0.5);
    }

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
