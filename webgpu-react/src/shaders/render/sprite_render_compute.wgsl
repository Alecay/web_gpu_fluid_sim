@compute @workgroup_size(16, 16, 1)
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let spriteIndex : u32 = (uSim.simIndex / 2u) % 8u + 3u;//0u;
    let coord = vec2<u32>(388u, 270u);//uInput.mousePos;//vec2<u32>(534, 200);
    
    let sprite = getSprite(spriteIndex);
    if (gid.x >= sprite.width || gid.y >= sprite.height) { return; }

    setSprite(spriteIndex, coord, vec2<u32>(gid.x, gid.y));
    setSprite(spriteIndex, coord + vec2<u32>(0u, 8u), vec2<u32>(gid.x, gid.y));
    // setSprite(spriteIndex, coord + vec2<u32>(0u, 16u), vec2<u32>(gid.x, gid.y));
}