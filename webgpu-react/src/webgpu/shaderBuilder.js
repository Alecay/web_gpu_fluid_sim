import structsWGSL from "../shaders/structs.wgsl?raw";
import helpersWGSL from "../shaders/helpers.wgsl?raw";
import vertexWGSL from "../shaders/vertex.wgsl?raw";
import fragmentWGSL from "../shaders/fragment.wgsl?raw";
// import realtimeFragmentWGSL from "../shaders/realtime_frag.wgsl?raw";
import normalComputeWGSL from "../shaders/normal_compute.wgsl?raw";
import terrainRenderComputeWGSL from "../shaders/terrain_render_compute.wgsl?raw";
import shadowRenderComputeWGSL from "../shaders/shadow_render_compute.wgsl?raw";
import stepComputeWGSL from "../shaders/step_compute.wgsl?raw";
import cursorQueryWGSL from "../shaders/cursor_query.wgsl?raw";
import shaderOutlineWGSL from "../shaders/shader_outline.wgsl?raw";

export function getShaderText() {
  let shaderCode = shaderOutlineWGSL;
  shaderCode = shaderCode.replace("//{Structs}", structsWGSL);
  shaderCode = shaderCode.replace("//{Helpers}", helpersWGSL);
  shaderCode = shaderCode.replace("//{Vertex}", vertexWGSL);
  shaderCode = shaderCode.replace("//{Fragment}", fragmentWGSL);
  // shaderCode = shaderCode.replace("//{Fragment}", realtimeFragmentWGSL);
  shaderCode = shaderCode.replace("//{normal_compute}", normalComputeWGSL);
  shaderCode = shaderCode.replace(
    "//{terrain_render_compute}",
    terrainRenderComputeWGSL
  );
  shaderCode = shaderCode.replace(
    "//{shadow_render_compute}",
    shadowRenderComputeWGSL
  );
  shaderCode = shaderCode.replace("//{step_compute}", stepComputeWGSL);
  shaderCode = shaderCode.replace("//{cursor_query}", cursorQueryWGSL);

  return shaderCode;
}
