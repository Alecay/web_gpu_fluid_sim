// ---------- Helpers ----------
fn idx(x : u32, y : u32) -> u32 {
    return y * uView.size.x + x;
}

fn distanceSqrd(p: vec2<u32>, c: vec2<u32>) -> f32
{
  let d = vec2<f32>(f32(i32(p.x) - i32(c.x)), f32(i32(p.y) - i32(c.y)));
  return dot(d, d);
}

fn isCloseToIncrement(x: f32, step: f32, epsilon: f32) -> bool {
    // Scale x by step size
    let scaled = x / step;

    // Round to nearest integer multiple
    let nearest = round(scaled);

    // Difference between x and the nearest multiple
    let diff = abs(x - nearest * step);

    return diff < epsilon;
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

fn inBoundsV2U(coord: vec2<u32>) -> bool 
{
  return (coord.x < uView.size.x) && (coord.y < uView.size.y);
}

fn inBoundsV2I(coord: vec2<i32>) -> bool 
{
  return (coord.x < i32(uView.size.x)) && (coord.y < i32(uView.size.y)) && (coord.x >= 0i) && (coord.y >= 0i);
}

fn clampCoord(coord: vec2<u32>) -> vec2<u32> {
  let cx = clamp(coord.x, 0u, u32(uView.size.x) - 1u);
  let cy = clamp(coord.y, 0u, u32(uView.size.y) - 1u);
  return vec2<u32>(u32(cx), u32(cy));
}

// visibleRect = (x0, y0, x1, y1) in canvas coords; x1,y1 are EXCLUSIVE
fn isVisible(coord: vec2<u32>, expand: i32) -> bool {
  let w: u32 = uView.size.x;
  let h: u32 = uView.size.y;

  let vr = uInput.visibleRect; // vec4<u32> (x0,y0,x1,y1)

  // expand/shrink in signed space, then clamp to [0, size]
  let x0: u32 = u32(clamp(i32(vr.x) - expand, 0, i32(w)));
  let y0: u32 = u32(clamp(i32(vr.y) - expand, 0, i32(h)));
  let x1: u32 = u32(clamp(i32(vr.z) + expand, 0, i32(w)));
  let y1: u32 = u32(clamp(i32(vr.w) + expand, 0, i32(h)));

  return (coord.x >= x0 && coord.x < x1) &&
         (coord.y >= y0 && coord.y < y1);
}

fn isDirectNeighbor(a: vec2<u32>, b: vec2<u32>) -> bool {
    let dx = i32(a.x) - i32(b.x);
    let dy = i32(a.y) - i32(b.y);
    let adx = abs(dx);
    let ady = abs(dy);

    return (a.x == b.x && a.y == b.y) || ((adx + ady) == 1);
}

fn isNeighbor(a: vec2<u32>, b: vec2<u32>) -> bool {
    let dx = abs(i32(a.x) - i32(b.x));
    let dy = abs(i32(a.y) - i32(b.y));

    // Exclude self (dx=0 && dy=0)
    return (dx <= 1 && dy <= 1) && !(dx == 0 && dy == 0);
}

fn getColorStepHeight() -> f32
{
  if(uTerrain.colorSteps <= 0u) { return 0.0; }

  let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));
  let steps = max(1, i32(uTerrain.colorSteps)); // avoid div by zero
  return f32(maxHeight) / f32(steps);
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
  let cCoord = clampCoord(coord);
  let cell = currentCells[idx(cCoord.x, cCoord.y)];

  let spriteInfo = unpackSpriteInfo(cell.spriteInfo);
  if (spriteInfo.height > 0)
  {
    let spriteHeight = f32(spriteInfo.height) * f32(uTerrain.maxCellValue) / 5.0;
    return roundToColorSteps(cell.height + spriteHeight);
  }
  
  return roundToColorSteps(cellHeight(coord));
}

fn cellFAmount(coord: vec2<u32>) -> f32 {
  let cCoord = clampCoord(coord);
  return currentCells[idx(cCoord.x, cCoord.y)].fAmount;
}

fn roundedCellFAmount(coord: vec2<u32>) -> f32 {
  return roundToColorSteps(cellFAmount(coord));
}

fn roundedCombinedCellHeight(coord: vec2<u32>) -> f32 {
  return roundedCellHeight(coord) + abs(cellFAmount(coord));
}

fn fHeight(coord: vec2<u32>) -> f32 {
  return abs(roundedCellFAmount(coord)) + roundedCellHeight(coord);
}

fn avgFHeight(coord: vec2<u32>) -> f32 {
  let x = coord.x;
  let y = coord.y;

  let currentHeight = abs(cellFAmount(coord)) + roundedCellHeight(coord);

  if(!(currentHeight < 0 || currentHeight > 0)) { return 0.0; }

  // get surrounding heights
  let nVal0 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal1 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal2 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal3 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal4 = abs(cellFAmount(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal5 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal6 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal7 = abs(cellFAmount(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)))) + roundedCellHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));

  var count : f32 = 1.0;
  if(nVal0 > 0 || nVal0 < 0) { count += 1.0; }
  if(nVal1 > 0 || nVal1 < 0) { count += 1.0; }
  if(nVal2 > 0 || nVal2 < 0) { count += 1.0; }
  if(nVal3 > 0 || nVal3 < 0) { count += 1.0; }
  if(nVal4 > 0 || nVal4 < 0) { count += 1.0; }
  if(nVal5 > 0 || nVal5 < 0) { count += 1.0; }
  if(nVal6 > 0 || nVal6 < 0) { count += 1.0; }
  if(nVal7 > 0 || nVal7 < 0) { count += 1.0; }

  return roundToColorSteps((nVal0 + nVal1 + nVal2 + nVal3 + nVal4 + nVal5 + nVal6 + nVal7 + currentHeight) / count);
}

fn isFluidBoundary(coord: vec2<u32>, epsilon : f32) -> bool
{
  var fAmount = cellFAmount(coord);
  var nAmount = 0.0;

  if(abs(fAmount) > 0.0)
  {
    nAmount = cellFAmount(vec2<u32>(coord.x - 1, coord.y));
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }

    nAmount = cellFAmount(vec2<u32>(coord.x + 1, coord.y));
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }

    nAmount = cellFAmount(vec2<u32>(coord.x, coord.y - 1));
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }

    nAmount = cellFAmount(vec2<u32>(coord.x, coord.y + 1));
    if(abs(nAmount) < 1e-7 || ((nAmount < 0.0) != (fAmount < 0.0))) { return true; }
  }
  else { return false; }

  let h = fHeight(coord);
  var count = 0.0;

  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x, coord.y - 1))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x, coord.y + 1))) > epsilon) { count += 1.0; }

  // Diagonals
  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y - 1))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y + 1))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x + 1, coord.y - 1))) > epsilon) { count += 1.0; }
  if(abs(h - fHeight(vec2<u32>(coord.x - 1, coord.y + 1))) > epsilon) { count += 1.0; }


  if(count > 2.0) { return true; }

  return false;
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
  let cell = currentCells[idx(coord.x, coord.y)];

  let h = roundedCellHeight(coord);
  if (h >= 0.0) {
    let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));
    color = terrainColorLerp(h / f32(maxHeight));

    color = lerp4(color, vec4(0.0, 0.0, 0.0, 1.0), cell.randDir / 8.0 * 0.1);
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

fn slice_count(coord: vec2<u32>) -> u32
{
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)
  {
    return 2u;
  }
  return 0u;
}

fn slice_min(coord: vec2<u32>, idx: u32) -> f32
{
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)
  {
    let gap = 3.0;
    let width = 3.0;
    if(idx == 0u)
    {
      return roundedCellHeight(coord) + gap;
    }
    else if(idx == 1u)
    {
      return roundedCellHeight(coord) + gap * 2.0 + width;
    }
  }

  return 0.0;
}

fn slice_max(coord: vec2<u32>, idx: u32) -> f32
{
  if (coord.x >= 400u && coord.x < 402u && coord.y >= 280u && coord.y < 282u)
  {
    let gap = 3.0;
    let width = 3.0;
    if(idx == 0u)
    {
      return roundedCellHeight(coord) + gap + width;
    }
    else if(idx == 1u)
    {
      return roundedCellHeight(coord) + gap * 2.0 + width * 2.0;
    }
  }

  return roundedCellHeight(coord);
}

fn inShadowSlices(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool
{
  var targetHeight = roundedCellHeight(coord);
  targetHeight = max(50.0, targetHeight);

  let rayTarget = vec3<f32>(f32(coord.x), targetHeight, f32(coord.y));
  var currentPos = sunPosition;

  let accuracy = f32(1.0);
  let EPS = 1e-3;

  var passes = 0;
  while (passes < 1000) {
    passes++;

    // --- done? (avoid sqrt unless needed)
    let toT = currentPos - rayTarget;
    let toT2 = dot(toT, toT);
    if (toT2 < 1e-8) {
      return false;
    }

    // --- terrain hit (your existing SDF/height test)
    let distG = distToGround(currentPos);
    if (distG <= -EPS) {
      return true;
    }

    // --- OVERHANG test: check vertical slices in this XZ cell
    //     If current Y lies within any [z0, z1], we are inside shadow.
    //     (Assumes slices do NOT include the terrain interval.)
    let ix = u32(clamp(floor(currentPos.x), 0.0, f32(uView.size.x - 1u)));
    let iz = u32(clamp(floor(currentPos.z), 0.0, f32(uView.size.y - 1u)));
    let cCell = vec2<u32>(ix, iz);

    let nSlices = slice_count(cCell);
    var hitSlice = false;
    for (var s: u32 = 0u; s < nSlices; s = s + 1u) {
      let z0 = slice_min(cCell, s);
      let z1 = slice_max(cCell, s);
      // inclusive with small epsilon to be robust
      if (currentPos.y >= z0 - EPS && currentPos.y <= z1 + EPS) {
        hitSlice = true;
        break;
      }
    }
    if (hitSlice) {
      return true;
    }

    // --- Adaptive step (as before), but avoid skipping thin slices:
    let coarse = clamp(distG * 0.8, 0.5, uTerrain.maxCellValue * 0.2);
    let fine   = clamp(distG / accuracy, 0.5, 2.0);
    var moveAmount = select(coarse, fine, distG > uTerrain.maxCellValue * 0.02);

    // If this column has overhangs, cap step so we don't leap past them
    if (nSlices > 0u) {
      // Tune this cap to your vertical resolution; 0.75..1.0 cell is a good start.
      moveAmount = min(moveAmount, 1.0);
    }

    // Never overshoot the target
    let toTargetLen = sqrt(toT2);
    moveAmount = min(moveAmount, toTargetLen);

    // March toward target
    currentPos = move_towards3(currentPos, rayTarget, moveAmount);
  }
  return false;
}

fn inShadow(coord : vec2<u32>, sunPosition : vec3<f32>) -> bool
{
  //return inShadowSlices(coord, sunPosition);

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

  var normalOutline = vec4f(0.0, 0.0, 0.0, 0.0);

  let currentHeight = fHeight(coord);

  // get surrounding heights
  let nVal0 = fHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  let nVal1 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));
  let nVal2 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));
  let nVal3 = fHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));
  let nVal4 = fHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));
  let nVal5 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));
  let nVal6 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));
  let nVal7 = fHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));

  // let nVal0 = avgFHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) + 1)));
  // let nVal1 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 1)));
  // let nVal2 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) + 0)));
  // let nVal3 = avgFHeight(vec2<u32>(u32(i32(x) + 1), u32(i32(y) - 1)));
  // let nVal4 = avgFHeight(vec2<u32>(u32(i32(x) + 0), u32(i32(y) - 1)));
  // let nVal5 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) - 1)));
  // let nVal6 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 0)));
  // let nVal7 = avgFHeight(vec2<u32>(u32(i32(x) - 1), u32(i32(y) + 1)));

  // let diffThreshold : f32 = 1.5;
  // if(
  //     (abs(nVal0 - currentHeight) < diffThreshold) &&
  //     (abs(nVal1 - currentHeight) < diffThreshold) &&
  //     (abs(nVal2 - currentHeight) < diffThreshold) &&
  //     (abs(nVal3 - currentHeight) < diffThreshold) &&
  //     (abs(nVal4 - currentHeight) < diffThreshold) &&
  //     (abs(nVal5 - currentHeight) < diffThreshold) &&
  //     (abs(nVal6 - currentHeight) < diffThreshold) &&
  //     (abs(nVal7 - currentHeight) < diffThreshold)
  //   )
  //   {
  //     return normalOutline;
  //   }

  

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