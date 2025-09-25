@compute @workgroup_size(16, 16, 1)
fn terrain_render(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2(x,y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    outputTex[idx(x,y)] = getTerrainColor(coord);

    // updated
    // let w = uView.size.x;
    // let h = uView.size.y;
    // let pos = vec2<u32>(x, y);

    // // Get height from height map
    // let hgt: f32 = cellHeight(pos);

    // // Starting point for ray cast
    // var px = f32(clamp(f32(x), 0.0, f32(w - 1u)));
    // var py = f32(clamp(f32(y), 0.0, f32(h - 1u)));
    // var p: vec3f = vec3<f32>(px, py, cellHeight(pos));

    // // Minimum step size based on pixel size
    // let minStepSize: f32 = 0.5;

    // // Direction of raycast is towards the sun from centre of screen
    // let sunPos  = vec3<f32>(f32(uInput.mousePos.x), f32(uInput.mousePos.y), 300);
    // // let terrainPos   = vec3<f32>(f32(x), hgt, f32(y));
    // // let lightDir     = normalize(sunPos - terrainPos);
    // let sunDir: vec3f = sunPos - vec3f(f32(w / 2), f32(h / 2), 300);
    // let stepDir: vec3f = normalize(sunDir);

    // // Ray-march to check shadow
    // var inShadow: f32 = 0.0;
    // var n: i32 = 0;

    // let MAX_STEPS = 64;

    // for (var i: i32 = 1; i <= MAX_STEPS; i = i + 1) {
    // n = n + 1;

    // let px = u32(clamp(floor(p.x), 0.0, f32(w - 1u)));
    // let py = u32(clamp(floor(p.y), 0.0, f32(h - 1u)));

    // // Sample height at current ray location
    // let h: f32 = cellHeight(vec2<u32>(px, py));

    // if (h > p.z) {
    //     // Ray is inside terrain => in shadow
    //     inShadow = 1.0;
    //     break;
    // }
    // if (p.z > 1.0) {
    //     // Above highest terrain level => not in shadow
    //     break;
    // }

    // // Step towards the sun; ensure a minimum step
    // let dz: f32 = p.z - h;
    // let stepLen: f32 = max(minStepSize, dz * 0.05);
    // p = p + stepDir * stepLen;
    // }

    // if (n == MAX_STEPS) 
    // {
    //     inShadow = 1.0;
    // }

    // // Normal-based shading term (faces away from sun get darker)
    // let normal: vec3f = surfaceNormalSobel(pos);
    // let normalShadow: f32 = (dot(normal, -stepDir) + 1.0) * 0.5;

    // // Base terrain color
    // var col: vec4f = getTerrainColor(coord);//getTerrainColour(hgt, normal);

    // // // Water logic
    // // // let waterDepth: f32 = uParams.waterLevel - hgt;

    // // // // isWater = step(0., waterDepth)
    // // // let isWater: f32 = select(0.0, 1.0, waterDepth >= 0.0);

    // // // // Shallow-water waves factor
    // // // var isWave: f32 = isWater * (1.0 - smoothstep(0.0, 0.05, waterDepth));
    // // // isWave = isWave * ( (sin(cos(uParams.millis / 500.0) * 2.0 + waterDepth * 500.0) + 1.0) * 0.5 );

    // // // let waterLerp: f32 = easeOut(waterDepth / uParams.waterLevel);

    // // // // Simulate see-through water by depth-based lerp
    // // // col = mix(col, uParams.colourWater, waterLerp);

    // // // // Add waves
    // // // col = col + vec4f(isWave / 8.0);

    // // Combine ray shadow and normal-based shadow
    // inShadow = clamp(inShadow + normalShadow, 0.0, 1.0);

    // let shadowBrightness = 0.2;

    // // Slight blue shift in shadow based on inShadow
    // let shadowCol: vec4f = col * shadowBrightness * vec4f(1.0, 1.0, 1.0 + inShadow * 0.2, 1.0);

    // // Final color
    // // let outCol: vec4f = mix(col, shadowCol, inShadow);
    // let outCol: vec4f = mix(col, shadowCol, inShadow);
    // // return outCol;

    // outputTex[idx(x,y)] = outCol;// vec4(1.0, 0.0, 0.0, 1.0);
}
