// // // device-singleton.js
// // let _sharedDevice = null;

// // export async function getSharedDevice() {
// //   if (_sharedDevice) return _sharedDevice;

// //   const adapter = await navigator.gpu?.requestAdapter();
// //   if (!adapter) throw new Error("WebGPU adapter not available");

// //   _sharedDevice = await adapter.requestDevice();
// //   // Optional: log device loss
// //   _sharedDevice.lost.then((info) => {
// //     console.warn("WebGPU device lost:", info);
// //   });
// //   return _sharedDevice;
// // }

// // device-singleton.js
// let _sharedDevice = null;

// export async function getSharedDevice({ profile = false } = {}) {
//   console.log("Got shared device");
//   if (_sharedDevice) return _sharedDevice;

//   const adapter = await navigator.gpu?.requestAdapter({
//     powerPreference: "high-performance",
//   });
//   if (!adapter) throw new Error("WebGPU adapter not available");

//   // Ask for profiling-related features only if available
//   const requiredFeatures = [];
//   if (adapter.features.has("timestamp-query"))
//     requiredFeatures.push("timestamp-query");
//   if (profile && adapter.features.has("pipeline-statistics-query"))
//     requiredFeatures.push("pipeline-statistics-query");
//   // Only needed if you plan to call writeTimestamp *inside* a pass encoder:
//   if (profile && adapter.features.has("timestamp-query-inside-passes"))
//     requiredFeatures.push("timestamp-query-inside-passes");

//   _sharedDevice = await adapter.requestDevice({ requiredFeatures });

//   // Optional: quick visibility
//   console.log("Adapter features:", [...adapter.features]);
//   console.log("Device features:", [..._sharedDevice.features]);

//   _sharedDevice.lost.then((info) => {
//     console.warn("WebGPU device lost:", info);
//   });

//   return _sharedDevice;
// }
