export function getBindings(device, module, format, buffers) {
  const bufferSettings = {
    uView: {
      binding: 0,
      type: "uniform",
    },
    uInput: {
      binding: 1,
      type: "uniform",
    },
    uTerrain: {
      binding: 2,
      type: "uniform",
    },
    currentCells: {
      binding: 3,
      type: "storage",
    },
    terrainColors: {
      binding: 4,
      type: "read-only-storage",
    },
    outputTex: {
      binding: 5,
      type: "storage",
    },
    nextCells: {
      binding: 6,
      type: "storage",
    },
    randomDirections: {
      binding: 7,
      type: "read-only-storage",
    },
    cursorQuery: {
      binding: 8,
      type: "storage",
    },
  };

  const stepComputeBGL = device.createBindGroupLayout({
    label: "Step Compute BGL",
    entries: [
      {
        binding: bufferSettings.uView.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uView.type },
      },
      {
        binding: bufferSettings.uInput.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uInput.type },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uTerrain.type },
      },
      {
        binding: bufferSettings.currentCells.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.currentCells.type },
      },
      {
        binding: bufferSettings.nextCells.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.nextCells.type },
      },
      {
        binding: bufferSettings.randomDirections.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.randomDirections.type },
      },
    ],
  });

  const normalComputeBGL = device.createBindGroupLayout({
    label: "Normal Compute BGL",
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 1,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "uniform" },
      },
      {
        binding: 3,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: "storage" },
      },
    ],
  });

  const outputTextureComputeBGL = device.createBindGroupLayout({
    label: "Output Texture Compute BGL",
    entries: [
      {
        binding: bufferSettings.uView.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uView.type },
      },
      {
        binding: bufferSettings.uInput.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uInput.type },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uTerrain.type },
      },
      {
        binding: bufferSettings.currentCells.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.currentCells.type },
      },
      {
        binding: bufferSettings.terrainColors.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.terrainColors.type },
      },
      {
        binding: bufferSettings.outputTex.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.outputTex.type },
      },
    ],
  });

  const cursorQueryBGL = device.createBindGroupLayout({
    label: "Cursor Query BGL",
    entries: [
      {
        binding: bufferSettings.uView.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uView.type },
      },
      {
        binding: bufferSettings.uInput.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uInput.type },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.uTerrain.type },
      },
      {
        binding: bufferSettings.currentCells.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.currentCells.type },
      },
      {
        binding: bufferSettings.terrainColors.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.terrainColors.type },
      },
      {
        binding: bufferSettings.outputTex.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.outputTex.type },
      },
      {
        binding: bufferSettings.cursorQuery.binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings.cursorQuery.type },
      },
    ],
  });

  // Render: 0=uniform, 1=current(read) for fragment
  const renderBGL = device.createBindGroupLayout({
    label: "Render BGL",
    entries: [
      {
        binding: bufferSettings.uView.binding,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: bufferSettings.uView.type },
      },
      {
        binding: bufferSettings.uInput.binding,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
        buffer: { type: bufferSettings.uInput.type },
      },
      {
        binding: bufferSettings.outputTex.binding,
        visibility: GPUShaderStage.FRAGMENT,
        buffer: { type: bufferSettings.outputTex.type },
      },
    ],
  });

  // ----- Pipelines -----
  const renderPipeline = device.createRenderPipeline({
    label: "Render Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [renderBGL],
      label: "Render Pipeline Layout",
    }),
    vertex: { module, entryPoint: "vs" },
    fragment: { module, entryPoint: "fs", targets: [{ format }] },
    primitive: { topology: "triangle-list" },
  });

  const normalComputePipeline = device.createComputePipeline({
    label: "Normal Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [normalComputeBGL],
      label: "Normal Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "calc_normals" },
  });

  const cursorQueryPipeline = device.createComputePipeline({
    label: "Cursor Query Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [cursorQueryBGL],
      label: "Cursor Query Pipeline Layout",
    }),
    compute: { module, entryPoint: "cursor_query" },
  });

  const terrainTextureComputePipeline = device.createComputePipeline({
    label: "Terrain Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [outputTextureComputeBGL],
      label: "Terrain Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "terrain_render" },
  });

  const shadowTextureComputePipeline = device.createComputePipeline({
    label: "Shadow Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [outputTextureComputeBGL],
      label: "Shadow Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "shadow_render" },
  });

  const stepComputePipeline = device.createComputePipeline({
    label: "Step Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [stepComputeBGL],
      label: "Step Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "step" },
  });

  // ----- Bind groups (prebuild both directions) -----
  const computeBG_AtoB = device.createBindGroup({
    label: "Step Compute BG A→B",
    layout: stepComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.prevCellsBuffer },
      }, // read
      {
        binding: bufferSettings.nextCells.binding,
        resource: { buffer: buffers.nextCellsBuffer },
      }, // write
      {
        binding: bufferSettings.randomDirections.binding,
        resource: { buffer: buffers.randomFlowDirectionsBuffer },
      },
    ],
  });

  const computeBG_BtoA = device.createBindGroup({
    label: "Step Compute BG B→A",
    layout: stepComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.nextCellsBuffer },
      }, // read
      {
        binding: bufferSettings.nextCells.binding,
        resource: { buffer: buffers.prevCellsBuffer },
      }, // write
      {
        binding: bufferSettings.randomDirections.binding,
        resource: { buffer: buffers.randomFlowDirectionsBuffer },
      },
    ],
  });

  const normalComputeBG_A = device.createBindGroup({
    label: "Normal Compute A",
    layout: normalComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.prevCellsBuffer },
      }, // read
    ],
  });

  const normalComputeBG_B = device.createBindGroup({
    label: "Normal Compute B",
    layout: normalComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.nextCellsBuffer },
      }, // read
    ],
  });

  const cursorQueryBG_A = device.createBindGroup({
    label: "Cursor Query A",
    layout: cursorQueryBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.prevCellsBuffer },
      }, // read
      {
        binding: bufferSettings.terrainColors.binding,
        resource: { buffer: buffers.terrainColorsBuffer },
      },
      {
        binding: bufferSettings.outputTex.binding,
        resource: { buffer: buffers.outputTextureBuffer },
      },
      {
        binding: bufferSettings.cursorQuery.binding,
        resource: { buffer: buffers.cursorQueryBuffer },
      },
    ],
  });

  const cursorQueryBG_B = device.createBindGroup({
    label: "Cursor Query B",
    layout: cursorQueryBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.nextCellsBuffer },
      }, // read
      {
        binding: bufferSettings.terrainColors.binding,
        resource: { buffer: buffers.terrainColorsBuffer },
      },
      {
        binding: bufferSettings.outputTex.binding,
        resource: { buffer: buffers.outputTextureBuffer },
      },
      {
        binding: bufferSettings.cursorQuery.binding,
        resource: { buffer: buffers.cursorQueryBuffer },
      },
    ],
  });

  const outputTextureBG_showA = device.createBindGroup({
    label: "Output Texture BG show A",
    layout: outputTextureComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.prevCellsBuffer },
      }, // read
      {
        binding: bufferSettings.terrainColors.binding,
        resource: { buffer: buffers.terrainColorsBuffer },
      },
      {
        binding: bufferSettings.outputTex.binding,
        resource: { buffer: buffers.outputTextureBuffer },
      },
    ],
  });

  const outputTextureBG_showB = device.createBindGroup({
    label: "Output Texture BG show B",
    layout: outputTextureComputeBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.uTerrain.binding,
        resource: { buffer: buffers.terrainBuffer },
      },
      {
        binding: bufferSettings.currentCells.binding,
        resource: { buffer: buffers.nextCellsBuffer },
      }, // read
      {
        binding: bufferSettings.terrainColors.binding,
        resource: { buffer: buffers.terrainColorsBuffer },
      },
      {
        binding: bufferSettings.outputTex.binding,
        resource: { buffer: buffers.outputTextureBuffer },
      },
    ],
  });

  const renderBG = device.createBindGroup({
    label: "Render BG",
    layout: renderBGL,
    entries: [
      {
        binding: bufferSettings.uView.binding,
        resource: { buffer: buffers.viewUniformBuffer },
      },
      {
        binding: bufferSettings.uInput.binding,
        resource: { buffer: buffers.inputUniformBuffer },
      },
      {
        binding: bufferSettings.outputTex.binding,
        resource: { buffer: buffers.outputTextureBuffer },
      },
    ],
  });

  return {
    piplines: {
      renderPipeline,
      normalComputePipeline,
      cursorQueryPipeline,
      terrainTextureComputePipeline,
      shadowTextureComputePipeline,
      stepComputePipeline,
    },
    bindGroups: {
      computeBG_AtoB,
      computeBG_BtoA,
      normalComputeBG_A,
      normalComputeBG_B,
      cursorQueryBG_A,
      cursorQueryBG_B,
      outputTextureBG_showA,
      outputTextureBG_showB,
      renderBG,
    },
  };
}
