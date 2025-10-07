struct SpriteData
{
    width       : u32,
    height      : u32,
    colorStart  : u32, // where the first pixel starts in sprite colors
    colors      : array<u32, 256>
}

// fn getSprite(index : u32) -> SpriteData
// {
//     let len = arrayLength(&sprites);
//     return sprites[index];
// }

// fn getSpriteColor(index: u32, pixelCoord : vec2<u32>) -> vec4f
// {
//     let sprite = getSprite(index);
//     return spriteColors[sprite.colorStart + pixelCoord.x + pixelCoord.y * sprite.width];
// }

// fn setSprite(index : u32, subPixelCoord : vec2<u32>)
// {
//     let sprite = getSprite(index);
//     let subPixelTexSize = vec2<u32>(uView.size.x * uView.pixelScale, uView.size.y * uView.pixelScale);
//     for(var x = 0u; x < sprite.width; x++)
//     {
//         for(var y = 0u; y < sprite.height; y++)
//         {
//             let color = spriteColors[sprite.colorStart + x + y * sprite.width];
//             let sCoord = subPixelCoord + vec2<u32>(x, y);
//             if(sCoord.x >= subPixelTexSize.x || sCoord.y >= subPixelTexSize.y)
//             {
//                 continue;
//             }

//             subPixelTex[sCoord.x + subPixelTexSize.x * sCoord.y] = color;
//         }
//     }
// }