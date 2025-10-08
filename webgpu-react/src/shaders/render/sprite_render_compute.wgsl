@compute @workgroup_size(1, 1, 1)
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }

    // setSprite(0, vec2<u32>(359, 275) * uView.pixelScale);

    // setSprite(2, vec2<u32>(400, 275) * uView.pixelScale);

    // setSprite(2, vec2<u32>(366, 252) * uView.pixelScale);

    // setSprite(2, vec2<u32>(290, 140) * uView.pixelScale);
}
