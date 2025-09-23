@compute @workgroup_size(16, 16, 1)
fn render(@builtin(global_invocation_id) gid : vec3<u32>) {
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
    if (inOuter && !inInner) {
        outputTex[idx(x,y)] = black;
        return;
    }

    var terrainColor = getTerrainColor(coord);

    let shadowColor = mix(vec4(0.0, 0.0, 1.0, 1.0), black, 0.75);
    let sunPosition = vec3<f32>(f32(uInput.mousePos.x), 300, f32(uInput.mousePos.y));
    let terrainInShadow = inShadow(coord, sunPosition);
    
    // Get surface normal shadows
    var sNorm = cell.heightNormal;
    // sNorm = sNorm / sNorm;
    let terrainPos = vec3<f32>(f32(coord.x), roundedCellHeight(coord), f32(coord.y));
    let lightDir = normalize(sunPosition - terrainPos);
    let shade = clamp(max(dot(sNorm, lightDir), 0.0) + 0.95, 0.0, 1.0);


    if(terrainInShadow) { terrainColor = mix(terrainColor, shadowColor, 0.5); }

    terrainColor = vec4<f32>(terrainColor.r * shade, terrainColor.g * shade, terrainColor.b * shade, terrainColor.a);

    outputTex[idx(x,y)] = terrainColor;
}
