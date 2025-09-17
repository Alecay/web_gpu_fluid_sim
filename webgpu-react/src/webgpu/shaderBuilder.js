import structsWGSL from "../shaders/structs.wgsl?raw";
import helpersWGSL from "../shaders/helpers.wgsl?raw";
import vertexWGSL from "../shaders/vertex.wgsl?raw";
import fragmentWGSL from "../shaders/fragment.wgsl?raw";
import stepComputeWGSL from "../shaders/step_compute.wgsl?raw";
import shaderOutlineWGSL from "../shaders/shader_outline.wgsl?raw";

export function getShaderText() {
  let shaderCode = shaderOutlineWGSL;
  shaderCode = shaderCode.replace("//{Structs}", structsWGSL);
  shaderCode = shaderCode.replace("//{Helpers}", helpersWGSL);
  shaderCode = shaderCode.replace("//{Vertex}", vertexWGSL);
  shaderCode = shaderCode.replace("//{Fragment}", fragmentWGSL);
  shaderCode = shaderCode.replace("//{step_compute}", stepComputeWGSL);

  return shaderCode;
}
