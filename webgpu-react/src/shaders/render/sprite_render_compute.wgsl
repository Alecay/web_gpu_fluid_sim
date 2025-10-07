@compute @workgroup_size(1, 1, 1)
fn sprite_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    if(gid.x > 0 || gid.y > 0 || gid.z > 0) { return; }

    setSprite(0, vec2<u32>(410, 275) * uView.pixelScale);
}
