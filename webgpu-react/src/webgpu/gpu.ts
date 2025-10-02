// gpu.ts
declare global {
  interface Window {
    __wgpuDevice?: GPUDevice;
    __wgpuAdapter?: GPUAdapter;
  }
}

export async function getDevice(): Promise<GPUDevice> {
  if (window.__wgpuDevice) return window.__wgpuDevice!;

  const adapter =
    window.__wgpuAdapter ??
    (await navigator.gpu?.requestAdapter({
      // powerPreference: "high-performance",
    }));
  if (!adapter) throw new Error("WebGPU adapter not available");

  // console.log(adapter.__brand);
  // console.log(adapter.features);
  // console.log(adapter.limits);

  window.__wgpuAdapter = adapter;

  const device = await adapter.requestDevice();
  // helpful id to debug “two devices” issues
  (device as any).__id = Math.random().toString(36).slice(2);
  window.__wgpuDevice = device;

  // If the device is lost, clear globals so the next call recreates them
  device.lost.then(() => {
    if (window.__wgpuDevice === device) {
      window.__wgpuDevice = undefined;
      window.__wgpuAdapter = undefined; // optional, force fresh adapter too
    }
  });

  return device;
}
