// device-singleton.js
let _sharedDevice = null;

export async function getSharedDevice() {
  if (_sharedDevice) return _sharedDevice;

  const adapter = await navigator.gpu?.requestAdapter();
  if (!adapter) throw new Error("WebGPU adapter not available");

  _sharedDevice = await adapter.requestDevice();
  // Optional: log device loss
  _sharedDevice.lost.then((info) => {
    console.warn("WebGPU device lost:", info);
  });
  return _sharedDevice;
}
