fn getCursorColor(coord : vec2<u32>) -> vec4f
{
    let x = coord.x;
    let y = coord.y;

    var cursorColor = vec4f(0.0, 0.0, 0.0, 0.0);

    let mouseWidth  = 2.0;

    if(uInput.cursorType == 1u)
    {
        let inOuter = inside_circle(coord, uInput.mousePos, uInput.mouseRadius);
        let inInner = inside_circle(coord, uInput.mousePos, uInput.mouseRadius - mouseWidth);
        
        let isCursorSpot = 
            (x == uInput.mousePos.x && y == uInput.mousePos.y) || 
            isDirectNeighbor(coord, uInput.mousePos);
        
        if((inOuter && !inInner) || isCursorSpot)
        {
            cursorColor = vec4f(0.0, 0.0, 0.0, 0.5);
        }
    }

    return cursorColor;
}