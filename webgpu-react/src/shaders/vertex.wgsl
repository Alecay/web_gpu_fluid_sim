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