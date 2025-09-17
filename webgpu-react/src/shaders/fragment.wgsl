@fragment
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    // 1 cell per pixel (nearest)
    let w = uView.size.x;
    let h = uView.size.y;

    let x = u32(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)));
    let y = u32(clamp(floor(frag_pos.y), 0.0, f32(h - 1u)));
    let coord = vec2(x,y);

    let black = vec4f(0.0, 0.0, 0.0, 1.0);

    
    // let borderWidth : u32 = 5u;
    // if (x < borderWidth || y < borderWidth || x >= (w - borderWidth) || y >= (h - borderWidth)) {
    //     return black;
    // }

    // Draw a ring cursor (visual only)
    let mouseRadius = 30.0;
    let mouseWidth  = 3.0;
    let inOuter = inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius);
    let inInner = inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius - mouseWidth);
    if (inOuter && !inInner) {
        return black;
    }

    let terrainColor = getTerrainColor(coord);

    let sunPosition = vec3<f32>(f32(uView.mouse.x), 500, f32(uView.mouse.y));
    let terrainInShadow = inShadow(coord, sunPosition);

    if(terrainInShadow) { return mix(terrainColor, black, 0.5); }

    return terrainColor;
}