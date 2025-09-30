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
const HALO      : u32 = 4u;                           // supports up to 4 sub-steps
const EXTW      : u32 = WG + 2u*HALO;             // shared width
const EXTH      : u32 = WG + 2u*HALO;             // shared height
const STRIDE    : u32 = EXTW;

var<workgroup> prevTile : array<StepData, EXTW * EXTH>;
var<workgroup> nextTile : array<f32     , EXTW * EXTH>;

fn sidx(x:u32, y:u32) -> u32 { return y * STRIDE + x; }

// Row-major index into a 1D buffer using an explicit width.
fn gidx(x: u32, y: u32, width: u32) -> u32 {
  return y * width + x;
}

// Your function that computes the *next* value from the *previous* state.
// It should look up neighbors in prevTile using (sx, sy) coordinates in shared space.
fn getFurtureAmount(sx:u32, sy:u32) -> f32 {
  // Example (replace with your real logic that reads prevTile[...]):
  let i = sidx(sx, sy);
  return prevTile[i].fAmount + 1.0; // placeholder
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

// ---- prevTile readers (shared coords) ----
fn sCellHeight(sx:u32, sy:u32) -> f32 {
  return prevTile[sidx(sx, sy)].height;
}
fn sCellFAmount(sx:u32, sy:u32) -> f32 {
  return prevTile[sidx(sx, sy)].fAmount;
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

// ---- future value from prevTile (shared coords) ----
fn sGetFutureCellFAmount(sx:u32, sy:u32, gx:u32, gy:u32) -> f32 {
  let cellVal = sCellFAmount(sx, sy);
  let cellH   = sCellHeight(sx, sy);
  var future  = cellVal;

  let maxCellValue : f32 = uTerrain.maxCellValue * 2.0;

  future += sGetFlowChange(sx, sy, gx, gy);
  // future += interactions...
  // future += emissions...

  future = clamp(future, -maxCellValue + cellH, maxCellValue - cellH);
  return future;
}


// --- Helper: cooperative load of prevTile (no wrap, skip OOB) ---
fn loadPrevTileNoWrap(
  lid : vec3<u32>,         // local_invocation_id
  wid : vec3<u32>,         // workgroup_id
  W   : u32,               // grid width
  H   : u32                // grid height
) {
  // Top-left of this workgroup’s *core* tile in global coords
  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  // Cover the entire extended (WG + 2*HALO) square cooperatively
  var sy = lid.y;
  loop {
    if (sy >= EXTH) { break; }
    var sx = lid.x;
    loop {
      if (sx >= EXTW) { break; }

      // Global coords for this shared cell, offset by -HALO for the border
      let gx = i32(gx0) + i32(sx) - i32(HALO);
      let gy = i32(gy0) + i32(sy) - i32(HALO);

      // Only load if in-bounds; else leave uninitialized
      if (gx >= 0 && gy >= 0 && u32(gx) < W && u32(gy) < H) {
        let cur = currentCells[gidx(u32(gx), u32(gy), W)];
        prevTile[sidx(sx, sy)].height = cur.height;
        prevTile[sidx(sx, sy)].fAmount = cur.fAmount;
      }

      sx += WG; // stride by workgroup size to cover the row
    }
    sy += WG;   // stride by workgroup size to cover all rows
  }

  // Ensure the entire shared tile is populated before anyone uses it
  workgroupBarrier();
}

// Assumes: const WG, HALO_MAX, EXT_W, EXT_H, STRIDE
//          var<workgroup> prevTile, nextTile
//          fn sidx(x,y)->u32
//          fn sGetFutureCellFAmount(sx,sy,gx,gy)->f32

fn evolveNSteps(steps: u32, lid: vec3<u32>, wid: vec3<u32>) {
  // Clamp to supported halo
  let N = min(steps, HALO);

  // Workgroup's core tile top-left in GLOBAL coords
  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  var s: u32 = 0u;
  loop {
    if (s >= N) { break; }

    // Interior offset for this substep (shrink by 1 each step)
    let off = HALO - s;

    // Shared coords inside current valid interior
    let sx = off + lid.x;
    let sy = off + lid.y;

    // The GLOBAL coords corresponding to (sx, sy)
    // In this layout, global = origin + (sx - off, sy - off) = origin + lid.xy
    let gx = gx0 + lid.x;
    let gy = gy0 + lid.y;

    // Do work only where we have the full 3×3 neighborhood in shared
    if (sx > 0u && sy > 0u &&
        sx + 1u < (EXTW - off) &&
        sy + 1u < (EXTH - off)) {

      let v = sGetFutureCellFAmount(sx, sy, gx, gy);   // reads from prevTile
      nextTile[sidx(sx, sy)] = v;              // writes next
    }

    workgroupBarrier(); // ensure nextTile writes are visible

    // Copy the WG×WG core of this iteration back to prevTile
    var cy = lid.y;
    loop {
      if (cy >= WG) { break; }
      var cx = lid.x;
      loop {
        if (cx >= WG) { break; }
        let x = off + cx;
        let y = off + cy;
        let i = sidx(x, y);
        prevTile[i].fAmount = nextTile[i];
        cx = cx + WG;
      }
      cy = cy + WG;
    }

    workgroupBarrier(); // prevTile now holds the just-computed state
    s = s + 1u;
  }
}

// ---- Constants & helpers assumed ----
// const WG, HALO_MAX, EXTW, STRIDE
// fn sidx(x,y) -> u32
// fn gidx(x,y,w) -> u32
// var<workgroup> prevTile : array<CellData, EXTW * EXTH>;
// @group(0) @binding(1) var<storage, read_write> nextCells : array<CellData>;

// ---------- Write-back helper ----------
fn writeBackToNext(
  steps : u32,
  lid   : vec3<u32>,  // local thread id
  wid   : vec3<u32>,  // workgroup id
  W     : u32,        // grid width
  H     : u32         // grid height
) {
  // Clamp steps to our compile-time halo capacity
  let N   : u32 = min(steps, HALO);
  let off : u32 = HALO - N;

  // This workgroup’s core-tile origin in global coords
  let gx0 = wid.x * WG;
  let gy0 = wid.y * WG;

  // Shared coords of the final valid interior cell for this thread
  let sx : u32 = off + lid.x;
  let sy : u32 = off + lid.y;

  // Global coords this thread owns
  let outX : u32 = gx0 + lid.x;
  let outY : u32 = gy0 + lid.y;

  if (outX < W && outY < H) {
    let si = sidx(sx, sy);
    let gi = gidx(outX, outY, W);
    // prevTile holds final state after evolveNSteps (because we copied back each substep)
    nextCells[gi] = currentCells[gi];
    nextCells[gi].height  = prevTile[si].height;
    nextCells[gi].fAmount = prevTile[si].fAmount;
  }
}

@compute @workgroup_size(WG, WG, 1)
fn stepN(
  @builtin(local_invocation_id) lid : vec3<u32>,
  @builtin(workgroup_id)        wid : vec3<u32>
) {
    let W = uView.size.x;   // or your params.width
    let H = uView.size.y;   // or your params.height

    let steps : u32 = 4u;

    loadPrevTileNoWrap(lid, wid, W, H);  // fills prevTile (+halo), then barriers

    evolveNSteps(steps, lid, wid);               // your multi-step shared-memory loop

    writeBackToNext(steps, lid, wid, W, H); // store central WG×WG to nextCells
}