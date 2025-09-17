// ---------- Helpers ----------
fn idx(x : u32, y : u32) -> u32 {
    return y * uView.size.x + x;
}

fn inside_circle(p: vec2<u32>, c: vec2<u32>, radius: f32) -> bool {
    let d = vec2<f32>(f32(i32(p.x) - i32(c.x)), f32(i32(p.y) - i32(c.y)));
    return dot(d, d) <= radius * radius;
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

fn cellHeight(coord: vec2<u32>) -> f32 {
  return currentCells[idx(coord.x, coord.y)].height;
}

fn roundedCellHeight(coord: vec2<u32>) -> f32 {
  let maxHeight = i32(round(uTerrain.maxCellValue * uTerrain.terrainHeightMultiplier));
  let steps = max(1, i32(uTerrain.colorSteps)); // avoid div by zero
  return roundToStep(cellHeight(coord), f32(maxHeight) / f32(steps));
}

fn colorLerp(a: vec4f, b: vec4f, t: f32) -> vec4f 
{
  return mix(a, b, clamp(t, 0.0, 1.0));
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

    let black = vec4f(0.0, 0.0, 0.0, 1.0);
    let white = vec4f(1.0, 1.0, 1.0, 1.0);

    let darkT  : f32 = 0.35;
    let lightT : f32 = 0.10;
    var changed = false;

    // check north neighbor first
    {
      let nCoord = coord + vec2<u32>(0u, 1u);
      if (inBounds(nCoord.x, nCoord.y)) {
        let nValue = roundedCellHeight(nCoord);

        if (nValue > h) {
          color   = colorLerp(color, black, darkT);
          changed = true;
        } else if (nValue < h) {
          color   = colorLerp(color, white, lightT);
          changed = true;
        }
      }
    }

    // then east neighbor if not changed
    if (!changed) {
      let nCoord = coord + vec2<u32>(1u, 0u);
      if (inBounds(nCoord.x, nCoord.y)) {
        let nValue = roundedCellHeight(nCoord);
        if (nValue > h) {
          color = colorLerp(color, black, darkT);
        } else if (nValue < h) {
          color = colorLerp(color, white, lightT);
        }
      }
    }
  }

  return color;
}