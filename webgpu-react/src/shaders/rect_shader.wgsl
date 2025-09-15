// ---------- Shared data ----------
struct View {
    size  : vec2<u32>,  // width, height (pixels)
    mouse : vec2<u32>,  // mouse x, y (pixels)
    time  : f32,        // seconds
    mouseHeld : f32,        // padding to 16B boundary
    _pad1 : f32,
    _pad2 : f32,
};

struct CellData {
    color   : vec4f,      // 16 bytes per pixel
    height  : f32,
    famount : f32,
    _pad0 : f32,        // padding to 16B boundary
    _pad1 : f32,
};

@group(0) @binding(0) var<uniform>       uView  : View;
@group(0) @binding(1) var<storage, read_write> cells : array<CellData>;

// ---------- Helpers ----------

fn inside_circle(p: vec2<u32>, c: vec2<u32>, radius: f32) -> bool {
    let d = vec2<f32>(f32(i32(p.x) - i32(c.x)), f32(i32(p.y) - i32(c.y)));
    return dot(d, d) <= radius * radius;
}

fn lerp4(a: vec4f, b: vec4f, t: f32) -> vec4f {
    return a * (1.0 - t) + b * t;
}

// ---------- Vertex ----------
@vertex
fn vs(@builtin(vertex_index) vertexIndex : u32) -> @builtin(position) vec4f {
    let pos = array(
        vec2f( -1.0,  1.0), // Top Left
        vec2f( 1.0,  1.0),  // Top Right
        vec2f( -1.0, -1.0), // Bottom Left

        vec2f( 1.0,  1.0),  // Top Left
        vec2f(-1.0, -1.0),  // Top Right
        vec2f( 1.0, -1.0),  // Bottom Left
    );
    return vec4f(pos[vertexIndex], 0.0, 1.0);
}

// ---------- Fragment ----------
@fragment
fn fs(@builtin(position) frag_coord: vec4f) -> @location(0) vec4f {
    let x = u32(frag_coord.x);
    let y = u32(frag_coord.y);
    if (x >= uView.size.x || y >= uView.size.y) { discard; }
    let idx = y * uView.size.x + x;

    return cells[idx].color;
}

// ---------- Compute ----------
// Each invocation writes exactly one pixel.
// Workgroup size must match the JS dispatch assumptions.
@compute @workgroup_size(16, 16, 1)
fn cs(@builtin(global_invocation_id) gid : vec3<u32>) {
    let x = gid.x;
    let y = gid.y;

    if (x >= uView.size.x || y >= uView.size.y) {
        return;
    }

    let w = uView.size.x;
    let idx = y * w + x;

    // Example animation: moving color bands using time
    let nx = f32(x) / max(1.0, f32(uView.size.x - 1u));
    let ny = f32(y) / max(1.0, f32(uView.size.y - 1u));

    let t  = uView.time;
    let r  = 0.5 + 0.5 * sin(6.28318 * (nx * 1.0 + t * 0.20));
    let g  = ny;
    let b  = 0.5 + 0.5 * cos(6.28318 * (ny * 1.5 - t * 0.15));

    let black = vec4<f32>(0.0, 0, 0, 1);

    let mouseRadius = 30.0;
    let mouseWidth = 3.0;

    let mouseHeld = uView.mouseHeld > 0;
    let insideCursor = inside_circle(vec2(x,y), uView.mouse, mouseRadius);
    
    if(insideCursor && mouseHeld)
    {
        cells[idx].height = cells[idx].height + 0.05;
    }

    if(cells[idx].height > 1.0)
    {
        cells[idx].height = 1.0;
    }
    
    //Rendering
    
    let isCursor = inside_circle(vec2(x,y), uView.mouse, mouseRadius) && !inside_circle(vec2(x,y), uView.mouse, mouseRadius - mouseWidth);
    if(isCursor)
    {
        cells[idx].color = black;
        return;
    }

    let cellHeight = cells[idx].height;
    let fluidAmount = cells[idx].famount;
    let backgroundColor = vec4(1.0, 1.0, 1.0, 1.0);
    let fluidColor = vec4(0.0, 0.0, 1.0, 1.0);

    let cellColor = lerp4(backgroundColor, fluidColor, cellHeight);

    // cells[idx].color = vec4f(r, g, b, 1.0);
    cells[idx].color = cellColor;
}
