import structsWGSL from "../shaders/structs.wgsl?raw";
import helpersWGSL from "../shaders/helpers.wgsl?raw";
import flowHelpersWGSL from "../shaders/flow_helpers.wgsl?raw";
import vertexWGSL from "../shaders/vertex.wgsl?raw";
import fragmentWGSL from "../shaders/fragment.wgsl?raw";
// import realtimeFragmentWGSL from "../shaders/realtime_frag.wgsl?raw";
import normalComputeWGSL from "../shaders/normal_compute.wgsl?raw";
import terrainRenderComputeWGSL from "../shaders/terrain_render_compute.wgsl?raw";
import shadowRenderComputeWGSL from "../shaders/shadow_render_compute.wgsl?raw";
import stepComputeWGSL from "../shaders/step_compute.wgsl?raw";
import cursorQueryWGSL from "../shaders/cursor_query.wgsl?raw";
import totalQueryWGSL from "../shaders/total_query.wgsl?raw";
import shaderOutlineWGSL from "../shaders/shader_outline.wgsl?raw";
import chunkHelpersWGSL from "../shaders/chunk_helpers.wgsl?raw";
import chunkDataCalcWGSL from "../shaders/chunk_data_calc.wgsl?raw";

export function getShaderText() {
  let shaderCode = shaderOutlineWGSL;
  shaderCode = shaderCode.replace("//{Structs}", structsWGSL);
  shaderCode = shaderCode.replace("//{Helpers}", helpersWGSL);
  shaderCode = shaderCode.replace("//{Flow Helpers}", flowHelpersWGSL);
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
  shaderCode = shaderCode.replace("//{total_query}", totalQueryWGSL);

  shaderCode = shaderCode.replace("//{chunk_data_calc}", chunkDataCalcWGSL);
  shaderCode = shaderCode.replace("//{Chunk Helpers}", chunkHelpersWGSL);

  return shaderCode;
}
