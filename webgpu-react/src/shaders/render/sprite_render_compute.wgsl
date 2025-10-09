@compute @workgroup_size(16, 16, 1)
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let spriteIndex : u32 = 0u;
    let coord = uInput.mousePos;//vec2<u32>(534, 200);
    
    let sprite = getSprite(spriteIndex);
    if (gid.x >= sprite.width || gid.y >= sprite.height) { return; }

    setSprite(spriteIndex, coord, vec2<u32>(gid.x, gid.y));
}