@fragment
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    // 1 cell per pixel (nearest)
    let w = uView.size.x;
    let h = uView.size.y;

    let x = u32(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)));
    let y = u32(clamp(floor(frag_pos.y), 0.0, f32(h - 1u)));
    let coord = vec2(x,y);
    let black = vec4f(0.0, 0.0, 0.0, 1.0);

    if(!inBounds(x,y)) { return black; }

    let terrainColor = outputTex[idx(x,y)];
    let shadowColor = outputTex[idx(x,y) + uView.size.x * uView.size.y];

    var combinedColor = over_rgba(terrainColor, shadowColor);

    return combinedColor;
}