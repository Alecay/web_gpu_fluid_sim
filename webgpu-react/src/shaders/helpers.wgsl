// ---------- Helpers ----------
fn idx(x : u32, y : u32) -> u32 {
    return y * uView.size.x + x;
}

fn distanceSqrd(p: vec2<u32>, c: vec2<u32>) -> f32
{
  let d = vec2<f32>(f32(i32(p.x) - i32(c.x)), f32(i32(p.y) - i32(c.y)));
  return dot(d, d);
}

fn inside_circle(p: vec2<u32>, c: vec2<u32>, radius: f32) -> bool {
    return distanceSqrd(p, c) <= radius * radius;
}

fn lerp4(a: vec4f, b: vec4f, t: f32) -> vec4f {
    return a * (1.0 - t) + b * t;
}

fn roundToStep(value: f32, step: f32) -> f32 {
    // Divide by step, round to nearest integer, multiply back
    return round(value / step) * step;
}

fn inBounds(x:u32, y:u32) -> bool 
{
  return (x < uView.size.x) && (y < uView.size.y);
}

fn clampCoord(coord: vec2<u32>) -> vec2<u32> {
  let cx = clamp(coord.x, 0u, u32(uView.size.x) - 1u);
  let cy = clamp(coord.y, 0u, u32(uView.size.y) - 1u);
  return vec2<u32>(u32(cx), u32(cy));
}

fn roundToColorSteps(value: f32) -> f32
{
  if(uTerrain.colorSteps <= 0u) { return value; }

  let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));
  let steps = max(1, i32(uTerrain.colorSteps)); // avoid div by zero
  return roundToStep(value, f32(maxHeight) / f32(steps));
}

fn cellHeight(coord: vec2<u32>) -> f32 {
  let cCoord = clampCoord(coord);
  return currentCells[idx(cCoord.x, cCoord.y)].height;
}

fn roundedCellHeight(coord: vec2<u32>) -> f32 {
  return roundToColorSteps(cellHeight(coord));
}

fn cellFAmount(coord: vec2<u32>) -> f32 {
  let cCoord = clampCoord(coord);
  return currentCells[idx(cCoord.x, cCoord.y)].fAmount;
}

fn roundedCellFAmount(coord: vec2<u32>) -> f32 {
  return roundToColorSteps(cellFAmount(coord));
}

fn colorLerp(a: vec4f, b: vec4f, t: f32) -> vec4f 
{
  return mix(a, b, clamp(t, 0.0, 1.0));
}

fn move_towards3(a: vec3<f32>, b: vec3<f32>, step: f32) -> vec3<f32> {
    let delta = b - a;
    let d = length(delta);
    if (d < 1e-6) { return b; }
    let t = clamp(step / d, 0.0, 1.0);
    return mix(a, b, t);
}

// ----------- Sobel normal (8 taps, smoother) -----------
fn surfaceNormalSobel(coord: vec2<u32>) -> vec3<f32> {
  let x = u32(coord.x);
  let y = u32(coord.y);

  let hL  = roundedCellHeight(vec2<u32>(x - 1, y));
  let hR  = roundedCellHeight(vec2<u32>(x + 1, y));
  let hD  = roundedCellHeight(vec2<u32>(x, y - 1));
  let hU  = roundedCellHeight(vec2<u32>(x, y + 1));
  let hLU = roundedCellHeight(vec2<u32>(x - 1, y + 1));
  let hLD = roundedCellHeight(vec2<u32>(x - 1, y - 1));
  let hRU = roundedCellHeight(vec2<u32>(x + 1, y + 1));
  let hRD = roundedCellHeight(vec2<u32>(x + 1, y - 1));

  // Sobel kernels
  let gx = (hLD + 2.0 * hL + hLU) - (hRD + 2.0 * hR + hRU);
  let gz = (hRU + 2.0 * hU + hLU) - (hRD + 2.0 * hD + hLD);

  // Scale to world units (kernel sum factor = 8)
  let inv8dx = uTerrain.maxCellValue / (8.0 * 1.0);
  let inv8dz = inv8dx;

  let dHx = gx * inv8dx;
  let dHz = gz * inv8dz;

  return normalize(vec3(-dHx, 1.0, -dHz));
}

// Sample gradient array (terrainColorsBuf.items[0..N-1]) at t∈[0,1]
fn terrainColorLerp(t: f32) -> vec4f {
  let n = uTerrain.numberOfTerrainColors;
  if (n == 0u) { return vec4f(0.0, 0.0, 0.0, 1.0); }
  if (n == 1u) { return terrainColors[0u]; }

  // map t to [0, n-1]
  let pos   = clamp(t, 0.0, 1.0) * f32(n - 1u);
  let i0    = u32(floor(pos));
  let i1    = u32(min(i0 + 1u, n - 1u));
  let local = fract(pos);

  return mix(terrainColors[i0], terrainColors[i1], local);
}

// ---------- Port of getTerrainColor ----------
fn getTerrainColor(coord: vec2<u32>) -> vec4f {
  var color = vec4f(0.0, 0.0, 0.0, 0.0); // CLEAR

  let h = roundedCellHeight(coord);
  if (h >= 0.0) {
    let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));
    color = terrainColorLerp(h / f32(maxHeight));
  }

  return color;
}

fn distToGround(pos : vec3<f32>) -> f32
{
  let x = u32(round(pos.x));
  let y = u32(round(pos.z));
  let height = roundedCellHeight(vec2<u32>(x,y));
  let dist = f32(pos.y - height);

  return dist;
}

fn over_rgba(base: vec4<f32>, top: vec4<f32>) -> vec4<f32> {
  let a  = clamp(top.a, 0.0, 1.0);
  let oa = a + base.a * (1.0 - a);
  let rgb = (top.rgb * a + base.rgb * base.a * (1.0 - a)) / max(oa, 1e-6);
  return vec4<f32>(rgb, oa);
}

fn inShadow(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool
{
  // let rayTarget = vec3<f32>(f32(coord.x), roundedCellHeight(coord), f32(coord.y));
  // var currentPos = sunPosition;

  // let accuracy = f32(10.0);

  // var passes = 0;
  // while (passes < 1000)
  // {
  //   passes++;

  //   if(distance(currentPos, rayTarget) < 1e-6)
  //   {
  //     return false;
  //   }
    
  //   let distG = distToGround(currentPos);
  //   if(distG <= -1e-3) 
  //   { 
  //     return true;
  //   }

  //   let nextPosition = move_towards3(currentPos, rayTarget, f32(max(0.5, distG / accuracy)));
  //   currentPos = nextPosition;    
  // }

  var targetHeight = roundedCellHeight(coord);
  targetHeight = max(50.0, targetHeight);

  let rayTarget = vec3<f32>(f32(coord.x), targetHeight, f32(coord.y));
  var currentPos = sunPosition;

  // accuracy stays high, but steps adapt to distance-to-ground
  let accuracy = f32(1.0);

  var passes = 0;
  while (passes < 1000) {
    passes++;

    // squared distance check (avoid sqrt each loop)
    let toT = currentPos - rayTarget;
    let toT2 = dot(toT, toT);
    if (toT2 < 1e-8) {        // (~1e-4^2); tune as needed
      return false;
    }

    let distG = distToGround(currentPos);
    if (distG <= -1e-3) {
      return true;
    }


    // --- Adaptive step: coarse when far from ground, fine near ground ---
    // Coarse branch: larger/faster steps when well above ground
    let coarse = clamp(distG * 0.8, 0.5, uTerrain.maxCellValue * 0.2);
    // Fine branch: smaller/safer steps near ground to prevent gaps
    let fine = clamp(distG / accuracy, 0.5, 2.0);
    var moveAmount = select(coarse, fine, distG > uTerrain.maxCellValue * 0.02);

    // Never overshoot the target
    let toTargetLen = sqrt(toT2);        // one sqrt only when needed
    moveAmount = min(moveAmount, toTargetLen);

    let nextPosition = move_towards3(currentPos, rayTarget, moveAmount);
    currentPos = nextPosition;
  }
  return false;


  // return false;
}

// Build one "shadow layer" that combines tinting + shading.
// Inputs:
//   shadowRgb  - the shadow/tint color (e.g., black or bluish tint)
//   s          - shadow strength in [0,1] (0 if not in shadow, else e.g. 0.5)
//   shade      - lambert-ish term in [0,1] (1=no darkening, 0=black)
// Output: straight-alpha color to place OVER the base with normal alpha.
fn makeCombinedShadowLayer(shadowRgb: vec3<f32>, s: f32, shade: f32) -> vec4<f32> 
{
  let bs = clamp(s, 0.0, 1.0);
  let bm = clamp(shade, 0.0, 1.0);

  // Combined alpha that reproduces: shade * mix(base, shadowRgb, S)
  let a = 1.0 - bm * (1.0 - bs);

  if (a <= 1e-6) {
    return vec4<f32>(0.0, 0.0, 0.0, 0.0); // no effect
  }

  // Top RGB so that mix(base, topRgb, a) == shade * mix(base, shadowRgb, S)
  let topRgb = (bm * bs / a) * shadowRgb;
  return vec4<f32>(topRgb, a);
}

// Gets a highlight or shade color based on terrain height
fn getTerrainOutlineColor(coord : vec2<u32>, lightDir: vec3<f32>, shadeColor: vec4<f32>, highlightColor: vec4<f32>, inShadow: bool) -> vec4<f32> 
{
  
  let x = coord.x;
  let y = coord.y;

  let currentHeight = roundedCellHeight(coord);

  // get surrounding heights
  let nVal0 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal1 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));
  let nVal2 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));
  let nVal3 = roundedCellHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));
  let nVal4 = roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));
  let nVal5 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));
  let nVal6 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));
  let nVal7 = roundedCellHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));

  var normalOutline = vec4f(0.0, 0.0, 0.0, 0.0);

  // axis feather width in direction space (tweak 0.08..0.2)
  let k = 30.0;

  // weights that go to 1 near the seam (x≈0 or z≈0)
  let sx = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.x));
  let sz = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.z));

  // --- compute your four triplet results exactly as before ---
  let maxXp = max(max(nVal2, nVal1), nVal3);
  let minXp = min(min(nVal2, nVal1), nVal3);
  let maxXn = max(max(nVal6, nVal7), nVal5);
  let minXn = min(min(nVal6, nVal7), nVal5);
  let maxZp = max(max(nVal0, nVal7), nVal1);
  let minZp = min(min(nVal0, nVal7), nVal1);
  let maxZn = max(max(nVal4, nVal5), nVal3);
  let minZn = min(min(nVal4, nVal5), nVal3);

  // base directional weights (no branching)
  var wxp = max(lightDir.x, 0.0);
  var wxn = max(-lightDir.x, 0.0);
  var wzp = max(lightDir.z, 0.0);
  var wzn = max(-lightDir.z, 0.0);

  // add a tiny floor so weights never hit exact 0 at the seam
  let epsW = 1e-3;
  wxp += epsW; wxn += epsW; wzp += epsW; wzn += epsW;

  // normalize
  let wsum = wxp + wxn + wzp + wzn;
  let WXp = wxp / wsum;
  let WXn = wxn / wsum;
  let WZp = wzp / wsum;
  let WZn = wzn / wsum;

  // pre-blend (no seam)
  var blendedMax = WXp*maxXp + WXn*maxXn + WZp*maxZp + WZn*maxZn;
  var blendedMin = WXp*minXp + WXn*minXn + WZp*minZp + WZn*minZn;

  // axis cross-fade: when near x=0, mix X+ and X−; when near z=0, mix Z+ and Z−
  let maxX_axis = mix(maxXp, maxXn, 0.5 + 0.5*sign(-lightDir.x)); // equal when |x| small
  let minX_axis = mix(minXp, minXn, 0.5 + 0.5*sign(-lightDir.x));
  let maxZ_axis = mix(maxZp, maxZn, 0.5 + 0.5*sign(-lightDir.z));
  let minZ_axis = mix(minZp, minZn, 0.5 + 0.5*sign(-lightDir.z));

  // stronger replacement only *near* axes
  blendedMax = mix(blendedMax, 0.5*(maxX_axis + maxZ_axis), max(sx, sz));
  blendedMin = mix(blendedMin, 0.5*(minX_axis + minZ_axis), max(sx, sz));

  let E = 1e-4;  // tiny dead zone to avoid flicker on flats
  if (blendedMax > currentHeight + E) 
  {
      normalOutline = shadeColor;
  } 
  // Only apply highlight when not in shadow
  else if (!inShadow && blendedMin < currentHeight - E) 
  {
      normalOutline = highlightColor;
  }

  return normalOutline;
}


// Gets a highlight or shade color based on terrain height
fn getFluidOutlineColor(coord : vec2<u32>, lightDir: vec3<f32>, shadeColor: vec4<f32>, highlightColor: vec4<f32>, inShadow: bool) -> vec4<f32> 
{
  
  let x = coord.x;
  let y = coord.y;

  let currentHeight = roundedCellFAmount(coord) + roundedCellHeight(coord);

  // get surrounding heights
  let nVal0 = roundedCellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal1 = roundedCellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal2 = roundedCellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal3 = roundedCellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal4 = roundedCellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal5 = roundedCellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal6 = roundedCellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal7 = roundedCellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));

  var normalOutline = vec4f(0.0, 0.0, 0.0, 0.0);

  // axis feather width in direction space (tweak 0.08..0.2)
  let k = 30.0;

  // weights that go to 1 near the seam (x≈0 or z≈0)
  let sx = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.x));
  let sz = 1.0 - smoothstep(k, 2.0*k, abs(lightDir.z));

  // --- compute your four triplet results exactly as before ---
  let maxXp = max(max(nVal2, nVal1), nVal3);
  let minXp = min(min(nVal2, nVal1), nVal3);
  let maxXn = max(max(nVal6, nVal7), nVal5);
  let minXn = min(min(nVal6, nVal7), nVal5);
  let maxZp = max(max(nVal0, nVal7), nVal1);
  let minZp = min(min(nVal0, nVal7), nVal1);
  let maxZn = max(max(nVal4, nVal5), nVal3);
  let minZn = min(min(nVal4, nVal5), nVal3);

  // base directional weights (no branching)
  var wxp = max(lightDir.x, 0.0);
  var wxn = max(-lightDir.x, 0.0);
  var wzp = max(lightDir.z, 0.0);
  var wzn = max(-lightDir.z, 0.0);

  // add a tiny floor so weights never hit exact 0 at the seam
  let epsW = 1e-3;
  wxp += epsW; wxn += epsW; wzp += epsW; wzn += epsW;

  // normalize
  let wsum = wxp + wxn + wzp + wzn;
  let WXp = wxp / wsum;
  let WXn = wxn / wsum;
  let WZp = wzp / wsum;
  let WZn = wzn / wsum;

  // pre-blend (no seam)
  var blendedMax = WXp*maxXp + WXn*maxXn + WZp*maxZp + WZn*maxZn;
  var blendedMin = WXp*minXp + WXn*minXn + WZp*minZp + WZn*minZn;

  // axis cross-fade: when near x=0, mix X+ and X−; when near z=0, mix Z+ and Z−
  let maxX_axis = mix(maxXp, maxXn, 0.5 + 0.5*sign(-lightDir.x)); // equal when |x| small
  let minX_axis = mix(minXp, minXn, 0.5 + 0.5*sign(-lightDir.x));
  let maxZ_axis = mix(maxZp, maxZn, 0.5 + 0.5*sign(-lightDir.z));
  let minZ_axis = mix(minZp, minZn, 0.5 + 0.5*sign(-lightDir.z));

  // stronger replacement only *near* axes
  blendedMax = mix(blendedMax, 0.5*(maxX_axis + maxZ_axis), max(sx, sz));
  blendedMin = mix(blendedMin, 0.5*(minX_axis + minZ_axis), max(sx, sz));

  let E = 1e-4;  // tiny dead zone to avoid flicker on flats
  if (blendedMax > currentHeight + E) 
  {
      normalOutline = shadeColor;
  } 
  // Only apply highlight when not in shadow
  else if (!inShadow && blendedMin < currentHeight - E) 
  {
      normalOutline = highlightColor;
  }

  return normalOutline;
}