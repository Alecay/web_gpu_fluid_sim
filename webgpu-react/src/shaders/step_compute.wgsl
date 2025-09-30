@compute @workgroup_size(16, 16, 1)
fn step(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    let coord = vec2<u32>(x, y);
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var prev = currentCells[i];
    var out  = prev; // start from previous state

    // Mouse "paint" demo (writes to next)
    let mouse0Held = uInput.mouse0Held > 0.5;
    let mouse1Held = uInput.mouse1Held > 0.5;

    let dSqrd = distanceSqrd(vec2<u32>(x,y), uInput.mousePos);
    let radiusSqrd = uInput.mouseRadius * uInput.mouseRadius;
    var radiusT = clamp((radiusSqrd - dSqrd) / radiusSqrd, 0.0, 1.0);
    radiusT = radiusT * radiusT;
    let inside = dSqrd <= radiusSqrd;

    var futureCellValue = getFurtureCellFAmount(coord);
    out.fAmount = futureCellValue;

    // height editing
    // if(mouse0Held || mouse1Held)
    // {
    //     let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
    //     if (mouse0Held && inside) {
    //         out.height = out.height + 1.0;
    //     }
    //     else if (mouse1Held && inside) {
    //         out.height = out.height - 1.0;
    //     }
    // }
    // // Clamp
    // out.height = clamp(out.height, 0.0, uTerrain.maxCellValue);

    // Fluid editing
    let fStrength = 3.0;
    if(mouse0Held || mouse1Held)
    {
        //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
        if (mouse0Held && inside) {
            out.fAmount = out.fAmount + fStrength * radiusT;
        }
        else if (mouse1Held && inside) {
            out.fAmount = out.fAmount - fStrength * radiusT;
        }
    }

    // Apply evaporation
    if(out.fAmount < 2.0 && directNeighorCount(vec2<i32>(coord)) < 8)
    {
        out.fAmount -= clamp(out.fAmount * 0.001, 0.0, 0.001);
        if(out.fAmount < 0.1 && out.fAmount > 0.0) { out.fAmount = 0.0;}
    }

    // Clamp
    let cellmax = uTerrain.maxCellValue * 2 - out.height;
    out.fAmount = clamp(out.fAmount, 0.0, cellmax);

    nextCells[i] = out;
}

// Core tile (WG × WG), plus halo for multi-step evolution
const WG        : u32 = 16u;
const HALO      : u32 = 8u;                           // supports up to 4 sub-steps
const EXTW      : u32 = WG + 2u*HALO;             // shared width
const EXTH      : u32 = WG + 2u*HALO;             // shared height
const EXTN      : u32 = EXTW * EXTH;
const STRIDE    : u32 = EXTW;

var<workgroup> prevH : array<f32, EXTN>;  // read-only across substeps
var<workgroup> prevF : array<f32, EXTN>;  // read in, updated each substep
var<workgroup> nextF : array<f32, EXTN>;  // scratch per substep

fn sidx(x:u32, y:u32) -> u32 { return y * EXTW + x; }

// Row-major index into a 1D buffer using an explicit width.
fn gidx(x: u32, y: u32, width: u32) -> u32 {
  return y * width + x;
}

// ---- Shared/tile bounds helpers ----
fn sInBounds(sx:u32, sy:u32) -> bool {
  return (sx < EXTW) && (sy < EXTH);
}
fn sInBoundsI(c: vec2<i32>) -> bool {
  return c.x >= 0 && c.y >= 0 && u32(c.x) < EXTW && u32(c.y) < EXTH;
}

fn sNeighborCoord(scoord: vec2<i32>, index: u32) -> vec2<i32> {
  let k = ((index % 8u) + 8u) % 8u;
  return scoord + OFFSETS[k];
}

fn sH(sx:u32, sy:u32) -> f32 { return prevH[sidx(sx,sy)]; }
fn sF(sx:u32, sy:u32) -> f32 { return prevF[sidx(sx,sy)]; }

// ---- prevTile readers (shared coords) ----
fn sCellHeight(sx:u32, sy:u32) -> f32 {
  return sH(sx, sy);
}
fn sCellFAmount(sx:u32, sy:u32) -> f32 {
  return sF(sx, sy);
}

// ---- rounding / coloring based on uniforms ----

fn sRoundedCellHeight(sx:u32, sy:u32) -> f32 {
  return roundToColorSteps(sCellHeight(sx, sy));
}
fn sRoundedCellFAmount(sx:u32, sy:u32) -> f32 {
  return roundToColorSteps(sCellFAmount(sx, sy));
}
fn sRoundedCombinedHeight(sx:u32, sy:u32) -> f32 {
  return roundToColorSteps(sCellHeight(sx, sy)) + sCellFAmount(sx, sy);
}

// ---- neighbor index search (shared coords) ----
// Pass (gx,gy) so we can still index your randomDirectionsBuffer[idx(gx,gy)]
fn sHighestNeighborIndex(scoord: vec2<i32>, gx:u32, gy:u32) -> u32 {
  var bestIdx : u32 = 0u;
  var bestVal : f32 = -1.0;
  let cycleIndex  : u32 = (uView.simIndex * 3u) % 8u;
  let baseOffset  : u32 = u32(randomDirectionsBuffer[idx(gx, gy)]) % 8u;
  let start       : u32 = (cycleIndex + baseOffset) % 8u;

  for (var i: u32 = 0u; i < 8u; i++) {
    let j = (i + start) % 8u;
    let nC = sNeighborCoord(scoord, j);
    if (!sInBoundsI(nC)) { continue; }
    let v = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));
    if (i == 0u || v > bestVal) {
      bestVal = v;
      bestIdx = j;
    }
  }
  return bestIdx;
}

fn sLowestNeighborIndex(scoord: vec2<i32>, gx:u32, gy:u32) -> u32 {
  var bestIdx : u32 = 0u;
  var bestVal : f32 =  1e30; // large
  let cycleIndex  : u32 = (uView.simIndex * 3u) % 8u;
  let baseOffset  : u32 = u32(randomDirectionsBuffer[idx(gx, gy)]) % 8u;
  let start       : u32 = (cycleIndex + baseOffset) % 8u;

  for (var i: u32 = 0u; i < 8u; i++) {
    let j = (i + start) % 8u;
    let nC = sNeighborCoord(scoord, j);
    if (!sInBoundsI(nC)) { continue; }
    let v = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));
    if (i == 0u || v < bestVal) {
      bestVal = v;
      bestIdx = j;
    }
  }
  return bestIdx;
}

// Direct neighbor count with sign filtering, from prevTile
fn sDirectNeighborCount(scoord: vec2<i32>) -> u32 {
  var count : u32 = 0u;
  let selfVal = sCellFAmount(u32(scoord.x), u32(scoord.y));
  let isAnti  = selfVal < 0.0;

  for (var i: u32 = 0u; i < 8u; i++) {
    let nC = sNeighborCoord(scoord, i);
    if (!sInBoundsI(nC)) { continue; }
    let nVal = sCellFAmount(u32(nC.x), u32(nC.y));
    if (nVal == 0.0) { continue; }
    if ((selfVal != 0.0) && (isAnti != (nVal < 0.0))) { continue; }
    count++;
  }
  return count;
}

// ---- flow change computed entirely from prevTile (shared coords) ----
fn sGetFlowChange(sx:u32, sy:u32, gx:u32, gy:u32) -> f32 {
  let scoord = vec2<i32>(i32(sx), i32(sy));
  let cellVal  = sCellFAmount(sx, sy);
  let cellH    = sRoundedCellHeight(sx, sy);
  let combined = cellVal + cellH;

  var change : f32 = 0.0;
  let maxCellValue : f32 = uTerrain.maxCellValue;

  var nC : vec2<i32>;
  var nVal : f32;
  var nComb : f32;
  var nH : f32;
  var highestIdx : u32;
  var lowestIdx  : u32;
  var opposite   : u32;

  // tunables (copied from your func)
  let movementDivisor        : f32 = 2.0;
  let minSpreadAmount        : f32 = 1.0;
  let minMoveAmount          : f32 = 0.1;
  let cellMovementMultiplier : f32 = 1.0;
  let clampToOne             : bool = true;

  // Increase due to higher neighbor flowing in
  if (combined < maxCellValue) {
    highestIdx = sHighestNeighborIndex(scoord, gx, gy);
    nC = sNeighborCoord(scoord, highestIdx);

    if (sInBoundsI(nC)) {
      nVal  = sCellFAmount(u32(nC.x), u32(nC.y));
      nComb = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));
      let nIsAnti = nVal < 0.0;

      if (((cellVal != 0.0) || (abs(nVal) > minSpreadAmount))
           && (abs(nVal) > minMoveAmount)
           && (nComb >= combined))
      {
        opposite  = (highestIdx + 4u) % 8u;
        lowestIdx = sLowestNeighborIndex(nC, u32(i32(gx) + OFFSETS[highestIdx].x), 
                                             u32(i32(gy) + OFFSETS[highestIdx].y));

        if (lowestIdx == opposite) {
          let m = maxCellValue - combined;
          var n = floor((nComb - combined) / movementDivisor * cellMovementMultiplier);
          n = min(abs(nVal), n);
          let lower = f32(select(0, 1, clampToOne));
          let sign  = f32(select(1, -1, nIsAnti));
          change += clamp(n, lower, m) * sign;
        }
      }
    }
  }

  // Decrease due to flowing out to lower neighbor
  if (abs(cellVal) > minMoveAmount) {
    lowestIdx = sLowestNeighborIndex(scoord, gx, gy);
    nC = sNeighborCoord(scoord, lowestIdx);

    if (sInBoundsI(nC)) {
      nVal  = sCellFAmount(u32(nC.x), u32(nC.y));
      nComb = sRoundedCombinedHeight(u32(nC.x), u32(nC.y));
      if ((nVal != 0.0 || abs(cellVal) > minSpreadAmount)
           && nComb < maxCellValue && nComb <= combined)
      {
        opposite   = (lowestIdx + 4u) % 8u;
        highestIdx = sHighestNeighborIndex(nC, u32(i32(gx) + OFFSETS[lowestIdx].x),
                                               u32(i32(gy) + OFFSETS[lowestIdx].y));
        nH = sCellHeight(u32(nC.x), u32(nC.y));

        if (highestIdx == opposite) {
          let m = maxCellValue - nComb;
          var n = floor((combined - nComb) / movementDivisor * cellMovementMultiplier);
          n = min(abs(cellVal), n);
          let lower = f32(select(0, 1, clampToOne));
          let sign  = f32(select(1, -1, (nVal < 0.0)));
          change -= clamp(n, lower, m) * sign;
        }
      }
    }
  }

  return change;
}

fn sGetFutureF(sx:u32, sy:u32, gx:u32, gy:u32) -> f32 {
    let f = sF(sx, sy);
    let h = sH(sx, sy);
    var out = f;
    out += sGetFlowChange(sx, sy, gx, gy);

    let mouse0Held = uInput.mouse0Held > 0.5;
    let mouse1Held = uInput.mouse1Held > 0.5;

    let dSqrd = distanceSqrd(vec2<u32>(gx,gy), uInput.mousePos);
    let radiusSqrd = uInput.mouseRadius * uInput.mouseRadius;
    var radiusT = clamp((radiusSqrd - dSqrd) / radiusSqrd, 0.0, 1.0);
    radiusT = radiusT * radiusT;
    let inside = dSqrd <= radiusSqrd;



    // Fluid editing
    let fStrength = 3.0;
    if(mouse0Held || mouse1Held)
    {
        //let inside = inside_circle(vec2<u32>(x,y), uInput.mousePos, uInput.mouseRadius);
        if (mouse0Held && inside) {
            out = out + fStrength * radiusT;
        }
        else if (mouse1Held && inside) {
            out = out - fStrength * radiusT;
        }
    }

    // Apply evaporation
    if(out < 2.0 && sDirectNeighborCount(vec2<i32>(vec2(gx, gy))) < 8)
    {
        out -= clamp(out * 0.001, 0.0, 0.001);
        if(out < 0.1 && out > 0.0) { out = 0.0;}
    }


    let maxV = uTerrain.maxCellValue * 2.0;
    return clamp(out, -maxV + h, maxV - h);
}


// --- Helper: cooperative load of prevTile (no wrap; clamp-to-edge halo) ---
fn loadPrevTileNoWrap(lid: vec3<u32>, wid: vec3<u32>, W:u32, H:u32) {
  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  var sy = lid.y;
  loop {
    if (sy >= EXTH) { break; }
    var sx = lid.x;
    loop {
      if (sx >= EXTW) { break; }

      let gx_i = i32(gx0) + i32(sx) - i32(HALO);
      let gy_i = i32(gy0) + i32(sy) - i32(HALO);
      let cx   = u32(clamp(gx_i, 0, i32(W) - 1));
      let cy   = u32(clamp(gy_i, 0, i32(H) - 1));

      let gi = gidx(cx, cy, W);
      let si = sidx(sx, sy);
      let c  = currentCells[gi];

      prevH[si] = c.height;
      prevF[si] = c.fAmount;

      sx += WG;
    }
    sy += WG;
  }
  workgroupBarrier();
}

// Evolve up to `steps` sub-steps entirely in shared memory.
// Fixed indexing: sx=HALO+lid.x, sy=HALO+lid.y (no sliding).
fn evolveNSteps(steps:u32, lid:vec3<u32>, wid:vec3<u32>) {
  let N  : u32 = min(steps, HALO);

  // Global origin (if your helpers need gx,gy for random indexing etc.)
  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  // Fixed shared coords for this thread
  let sx_fixed : u32 = HALO + lid.x;
  let sy_fixed : u32 = HALO + lid.y;

  var s:u32 = 0u;
  loop {
    if (s >= N) { break; }

    let gx = gx0 + lid.x;
    let gy = gy0 + lid.y;

    let i = sidx(sx_fixed, sy_fixed);
    nextF[i] = sGetFutureF(sx_fixed, sy_fixed, gx, gy);

    workgroupBarrier(); // make nextF visible

    // Copy results back in-place (no sliding): only where we computed
    prevF[i] = nextF[i];

    workgroupBarrier(); // prevF now holds the state for next sub-step
    s += 1u;
  }
}



// Writes only the final interior of size (WG - 2*N) × (WG - 2*N)
fn writeBackToNext(steps:u32, lid:vec3<u32>, wid:vec3<u32>, W:u32, H:u32) {
  let N : u32 = min(steps, HALO);

  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  let sx  = HALO + lid.x;   // fixed, no sliding
  let sy  = HALO + lid.y;

  let outX = gx0 + lid.x;
  let outY = gy0 + lid.y;

  // Final interior: N cells away from each edge; no ±1 neighbor margin needed for write-back
  if (outX < W && outY < H ) {

    let si = sidx(sx, sy);
    let gi = gidx(outX, outY, W);

    var out = currentCells[gi];                 // preserve other fields
    out.height  = clamp(prevH[si], 0.0, uTerrain.maxCellValue);
    out.fAmount = prevF[si];
    nextCells[gi] = out;
  }
}


@compute @workgroup_size(WG, WG, 1)
fn stepN(
  @builtin(local_invocation_id) lid : vec3<u32>,
  @builtin(workgroup_id)        wid : vec3<u32>
) {
    let W = uView.size.x;   // or your params.width
    let H = uView.size.y;   // or your params.height

    let gx = wid.x * WG;
    let gy = wid.y * WG;

    if(gx >= W || gy >= H || gx < 0 || gy < 0) { return; }

    let steps : u32 = 4u;

    loadPrevTileNoWrap(lid, wid, W, H);  // fills prevTile (+halo), then barriers

    evolveNSteps(steps, lid, wid);               // your multi-step shared-memory loop

    writeBackToNext(steps, lid, wid, W, H); // store central WG×WG to nextCells
}