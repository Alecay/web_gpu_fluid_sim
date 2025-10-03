const shaderModules = import.meta.glob("../shaders/**/*.wgsl", {
  query: "?raw",
  eager: true,
  import: "default",
});

import shaderOutlineWGSL from "../shaders/main/shader_outline.wgsl?raw";

export function getShaderText() {
  let shaderCode = shaderOutlineWGSL;

  for (const [path, code] of Object.entries(shaderModules)) {
    // Get the filename without extension
    const fileName = path.split("/").pop().replace(".wgsl", "");
    shaderCode = shaderCode.replace(`//{${fileName}}`, code);
  }

  return shaderCode;
}
