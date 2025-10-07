// Uses: uView, uTerrain, uInput, outputTex

@fragment
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    let pixelScale : u32 = uView.pixelScale;
    
    // 1 cell per pixel (nearest)
    let w = uView.size.x;
    let h = uView.size.y;

    let x = u32(clamp(floor(frag_pos.x) / f32(pixelScale), 0.0, f32(w - 1u)));
    let y = u32(clamp(floor(frag_pos.y) / f32(pixelScale), 0.0, f32(h - 1u)));

    let canvasX = u32(clamp(floor(frag_pos.x), 0.0, f32(w * pixelScale - 1u)));
    let canvasY = u32(clamp(floor(frag_pos.y), 0.0, f32(h * pixelScale - 1u)));

    let coord = vec2(x,y);
    let canvasCoord = vec2(canvasX, canvasY);
    let black = vec4f(0.0, 0.0, 0.0, 1.0);

    if(!inBounds(x,y)) { return black; }

    let terrainColor = unpack4x8unorm(outputTex[idx(x,y)]);
    let shadowColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y]);
    let fluidColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y * 2]);
    let debugColor = unpack4x8unorm(outputTex[idx(x,y) + uView.size.x * uView.size.y * 3]);

    var subPixelColor = unpack4x8unorm(subPixelTex[canvasX + (uView.size.x * pixelScale) * canvasY]);

    let mouseWidth  = 2.0;
    let inOuter = inside_circle(coord, uInput.mousePos, uInput.mouseRadius);
    let inInner = inside_circle(coord, uInput.mousePos, uInput.mouseRadius - mouseWidth);
    
    let isCursorSpot = 
        (x == uInput.mousePos.x && y == uInput.mousePos.y)     ||   // center
        (x == uInput.mousePos.x - 1 && y == uInput.mousePos.y) ||   // left
        (x == uInput.mousePos.x  + 1&& y == uInput.mousePos.y) ||   // right
        (x == uInput.mousePos.x && y == uInput.mousePos.y + 1) ||   // up
        (x == uInput.mousePos.x && y == uInput.mousePos.y - 1);     // down
    
    var cursorOutline = vec4f(0.0, 0.0, 0.0, 0.0);
    if ((inOuter && !inInner) || isCursorSpot) 
    {
        cursorOutline = vec4f(0.0, 0.0, 0.0, 0.5);
    }

    var combinedColor = vec4f(0.0, 0.0, 0.0, 0.0);
    combinedColor = over_rgba(combinedColor, terrainColor);
    combinedColor = over_rgba(combinedColor, subPixelColor);
    combinedColor = over_rgba(combinedColor, shadowColor);
    combinedColor = over_rgba(combinedColor, fluidColor);
    combinedColor = over_rgba(combinedColor, cursorOutline);
    if(uView.showDebug > 0u) { combinedColor = over_rgba(combinedColor, debugColor); }


    if(inInner && (canvasX % pixelScale == 0 || canvasY % pixelScale == 0))
    {
        combinedColor = over_rgba(combinedColor, vec4<f32>(1.0, 0.0, 0.0, 1.0));
    }

    // if(canvasX % canvasScale == 0 || canvasY % canvasScale == 0)//if(canvasX == 400u && canvasY == 400u)
    // {
    //     combinedColor = over_rgba(combinedColor, vec4<f32>(1.0, 0.0, 0.0, 1.0));
    // }

    return combinedColor;
}