const MAX_SPRITE_SIZE = 64 * 64;

struct SpriteData
{
    width       : u32,
    height      : u32,
    _pad0        : u32,
    _pad1        : u32,
    colors      : array<u32, MAX_SPRITE_SIZE * 2u>
}

fn getSprite(spriteIndex : u32) -> SpriteData
{
    let len = arrayLength(&sprites);
    return sprites[spriteIndex];
}

fn getSpriteColor(spriteIndex: u32, pixelCoord : vec2<u32>) -> u32
{
    let sprite = getSprite(spriteIndex);
    return sprite.colors[pixelCoord.x + pixelCoord.y * sprite.width];
}

fn getSpriteHeight(spriteIndex: u32, pixelCoord : vec2<u32>) -> u32
{
    let sprite = getSprite(spriteIndex);
    let rawHeight = sprite.colors[MAX_SPRITE_SIZE + pixelCoord.x + pixelCoord.y * sprite.width];
    return rawHeight;
}

fn setSprite(spriteIndex: u32, coord: vec2<u32>, pixelCoord: vec2<u32>)
{
    let x = pixelCoord.x;
    let y = pixelCoord.y;

    let sprite = getSprite(spriteIndex);
    let ps = uView.pixelScale;

    let subSizeX = uView.size.x * ps;
    let subSizeY = uView.size.y * ps;
    let subOrigin = coord * ps;

    var maxX = 0u; if (subOrigin.x < subSizeX) { maxX = min(sprite.width,  subSizeX - subOrigin.x); }
    var maxY = 0u; if (subOrigin.y < subSizeY) { maxY = min(sprite.height, subSizeY - subOrigin.y); }

    let layer4Index = uView.size.x * uView.size.y * 4u;
    let outRowStride = subSizeX;

    let color = sprite.colors[x + y * sprite.width];
    let sCoord = subOrigin + vec2<u32>(x, y);

    let outIndex = layer4Index + sCoord.x + sCoord.y * outRowStride;
    outputTex[outIndex] = color;

    if(x % uView.pixelScale == 0 && y % uView.pixelScale == 0)
    {
        let currentCoord = vec2<u32>(coord.x + x / uView.pixelScale, coord.y + y / uView.pixelScale);
        let cellID = idx(currentCoord.x, currentCoord.y);
        var out = currentCells[cellID];        

        var spriteInfo = SpriteInfo();
        spriteInfo.subPixel = x + y * sprite.width;
        spriteInfo.spriteIndex = spriteIndex;
        spriteInfo.height = getSpriteHeight(spriteIndex, pixelCoord);

        out.spriteInfo = packSpriteInfo(spriteInfo);
        currentCells[cellID] = out;
    }
}


// ---- Unpack from u32 → SpriteInfo ----
fn unpackSpriteInfo(packed : u32) -> SpriteInfo {
    let height      =  packed         & 0x3FFu;        // 10 bits
    let subPixel    = (packed >> 10u) & 0xFFFu;        // 12 bits
    let spriteIndex = (packed >> 22u) & 0x3FFu;        // 10 bits
    return SpriteInfo(spriteIndex, subPixel, height);
}

// ---- Pack from SpriteInfo → u32 ----
fn packSpriteInfo(info : SpriteInfo) -> u32 {
    let si = info.spriteIndex & 0x3FFu;             // 10 bits
    let sp = info.subPixel    & 0xFFFu;             // 12 bits
    let h  = min(info.height, 1000u) & 0x3FFu;      // clamp to 0..1000, 10 bits
    return (si << 22u) | (sp << 10u) | h;
}