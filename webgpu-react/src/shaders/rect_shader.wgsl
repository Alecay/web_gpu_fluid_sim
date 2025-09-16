// ---------- Shared data ----------
struct View {
    size      : vec2<u32>, // width, height (pixels)
    mouse     : vec2<u32>, // mouse x, y (pixels)
    time      : f32,       // seconds
    mouseHeld : f32,       // 0 or 1
    _pad1     : f32,
    _pad2     : f32,
};

struct CellData {
    height  : f32,
    famount : f32,
    _pad0   : f32,
    _pad1   : f32,
};

@group(0) @binding(0) var<uniform> uView : View;

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

// =====================================================
// ===================== RENDER ========================
// =====================================================

// Fragment reads whichever buffer is "current" this frame (bind 1)
@group(0) @binding(1) var<storage, read> currentCells : array<CellData>;

// Fullscreen triangle VS
struct VSOut {
  @builtin(position) pos : vec4f
};

@vertex
fn vs(@builtin(vertex_index) vid : u32) -> VSOut {
  var xy = array<vec2f, 3>(
    vec2f(-1.0, -3.0),
    vec2f( 3.0,  1.0),
    vec2f(-1.0,  1.0)
  );
  var out : VSOut;
  out.pos = vec4f(xy[vid], 0.0, 1.0);
  return out;
}

@fragment
fn fs(@builtin(position) frag_pos: vec4f) -> @location(0) vec4f {
    // 1 cell per pixel (nearest)
    let w = uView.size.x;
    let h = uView.size.y;

    let x = u32(clamp(floor(frag_pos.x), 0.0, f32(w - 1u)));
    let y = u32(clamp(floor(frag_pos.y), 0.0, f32(h - 1u)));

    // Optional border
    let borderWidth : u32 = 5u;
    if (x < borderWidth || y < borderWidth || x >= (w - borderWidth) || y >= (h - borderWidth)) {
        return vec4f(0.0, 0.0, 0.0, 1.0);
    }

    // Draw a ring cursor (visual only)
    let mouseRadius = 30.0;
    let mouseWidth  = 3.0;
    let inOuter = inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius);
    let inInner = inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius - mouseWidth);
    if (inOuter && !inInner) {
        return vec4f(0.0, 0.0, 0.0, 1.0);
    }

    let c = currentCells[idx(x, y)];
    let background = vec4f(1.0, 1.0, 1.0, 1.0);
    let fluid      = vec4f(0.0, 0.0, 1.0, 1.0);
    let cellColor  = lerp4(background, fluid, clamp(c.height / 100.0, 0.0, 1.0));
    return cellColor;
}

// =====================================================
// ===================== COMPUTE =======================
// =====================================================

// Compute reads previous (bind 1) and writes next (bind 2)
@group(0) @binding(1) var<storage, read>       prevCells : array<CellData>;
@group(0) @binding(2) var<storage, read_write> nextCells : array<CellData>;

@compute @workgroup_size(16, 16, 1)
fn cs(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;
    if (x >= uView.size.x || y >= uView.size.y) { return; }

    let i = idx(x, y);
    var prev = prevCells[i];
    var out  = prev; // start from previous state

    // Mouse "paint" demo (writes to next)
    let mouseRadius = 30.0;
    let mouseHeld   = uView.mouseHeld > 0.5;
    if (mouseHeld && inside_circle(vec2<u32>(x,y), uView.mouse, mouseRadius)) {
        out.height = out.height + 1.0;
    }

    // Clamp
    out.height = clamp(out.height, 0.0, 100.0);

    nextCells[i] = out;
}
