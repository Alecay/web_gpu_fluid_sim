export function getBindings(device, module, format, buffers) {
  const bufferSettings = {
    uView: {
      binding: 0,
      type: "uniform",
      buffer: buffers.viewUniformBuffer,
    },
    uInput: {
      binding: 1,
      type: "uniform",
      buffer: buffers.inputUniformBuffer,
    },
    uTerrain: {
      binding: 2,
      type: "uniform",
      buffer: buffers.terrainBuffer,
    },
    currentCells: {
      binding: 3,
      type: "storage",
      buffer: buffers.prevCellsBuffer,
    },
    nextCells: {
      binding: 4,
      type: "storage",
      buffer: buffers.nextCellsBuffer,
    },
    terrainColors: {
      binding: 5,
      type: "read-only-storage",
      buffer: buffers.terrainColorsBuffer,
    },
    outputTex: {
      binding: 6,
      type: "storage",
      buffer: buffers.outputTextureBuffer,
    },
    cursorQuery: {
      binding: 7,
      type: "storage",
      buffer: buffers.cursorQueryBuffer,
    },
    chunkData: {
      binding: 8,
      type: "storage",
      buffer: buffers.chunkDataBuffer,
    },
    // sprites: {
    //   binding: 11,
    //   type: "read-only-storage",
    //   buffer: buffers.spriteDataBuffer,
    // },
    // spriteColors: {
    //   binding: 12,
    //   type: "read-only-storage",
    //   buffer: buffers.spriteColorsBuffer,
    // },
  };

  const unifiedComputeBGL = device.createBindGroupLayout({
    label: "Unified Compute BGL",
    entries: Object.keys(bufferSettings)
      .filter((k) => !["sprite", "spriteColors"].includes(k))
      .map((key) => ({
        binding: bufferSettings[key].binding,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: bufferSettings[key].type },
      })),
  });

  const unifiedComputeBG_A = device.createBindGroup({
    label: "Unified Compute BG A",
    layout: unifiedComputeBGL,
    entries: Object.keys(bufferSettings)
      .filter((k) => !["sprites", "spriteColors"].includes(k))
      .map((key) => {
        if (key === "currentCells") {
          return {
            binding: bufferSettings.currentCells.binding,
            resource: { buffer: buffers.prevCellsBuffer },
          };
        }

        if (key === "nextCells") {
          return {
            binding: bufferSettings.nextCells.binding,
            resource: { buffer: buffers.nextCellsBuffer },
          };
        }

        return {
          binding: bufferSettings[key].binding,
          resource: { buffer: bufferSettings[key].buffer },
        };
      }),
  });

  const unifiedComputeBG_B = device.createBindGroup({
    label: "Unified Compute BG show B",
    layout: unifiedComputeBGL,
    entries: Object.keys(bufferSettings)
      .filter((k) => !["sprites", "spriteColors"].includes(k))
      .map((key) => {
        if (key === "currentCells") {
          return {
            binding: bufferSettings.currentCells.binding,
            resource: { buffer: buffers.nextCellsBuffer },
          };
        }

        if (key === "nextCells") {
          return {
            binding: bufferSettings.nextCells.binding,
            resource: { buffer: buffers.prevCellsBuffer },
          };
        }

        return {
          binding: bufferSettings[key].binding,
          resource: { buffer: bufferSettings[key].buffer },
        };
      }),
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
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Normal Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "calc_normals" },
  });

  const cursorQueryPipeline = device.createComputePipeline({
    label: "Cursor Query Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Cursor Query Pipeline Layout",
    }),
    compute: { module, entryPoint: "cursor_query" },
  });

  const totalQueryPipeline = device.createComputePipeline({
    label: "Total Query Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Total Query Pipeline Layout",
    }),
    compute: { module, entryPoint: "total_query" },
  });

  const chunkDataPipeline = device.createComputePipeline({
    label: "Chunk Data Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Chunk Data Pipeline Layout",
    }),
    compute: { module, entryPoint: "chunk_data_calc" },
  });

  const terrainTextureComputePipeline = device.createComputePipeline({
    label: "Terrain Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Terrain Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "terrain_render" },
  });

  const shadowTextureComputePipeline = device.createComputePipeline({
    label: "Shadow Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Shadow Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "shadow_render" },
  });

  const fluidTextureComputePipeline = device.createComputePipeline({
    label: "Fluid Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Fluid Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "fluid_render" },
  });

  const debugTextureComputePipeline = device.createComputePipeline({
    label: "Debug Texture Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Debug Texture Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "debug_render" },
  });

  const spriteRenderComputePipeline = device.createComputePipeline({
    label: "Sprite Render Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Sprite Render Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "sprite_render" },
  });

  const stepComputePipeline = device.createComputePipeline({
    label: "Step Compute Pipeline",
    layout: device.createPipelineLayout({
      bindGroupLayouts: [unifiedComputeBGL],
      label: "Step Compute Pipeline Layout",
    }),
    compute: { module, entryPoint: "step" },
  });

  // ----- Bind groups (prebuild both directions) -----

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
      totalQueryPipeline,
      chunkDataPipeline,
      terrainTextureComputePipeline,
      shadowTextureComputePipeline,
      fluidTextureComputePipeline,
      debugTextureComputePipeline,
      spriteRenderComputePipeline,
      stepComputePipeline,
    },
    bindGroups: {
      unifiedComputeBG_A,
      unifiedComputeBG_B,
      // spriteComputeBG,
      renderBG,
    },
  };
}
