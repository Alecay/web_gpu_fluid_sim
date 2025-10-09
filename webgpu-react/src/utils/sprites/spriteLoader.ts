// Kick off fetch immediately, in parallel with WebGPU init:
const worker = new Worker(
  new URL("../workers/spriteLoader.worker.ts", import.meta.url),
  { type: "module" }
);

function loadSpritesAsync(url: string): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    worker.onmessage = (ev) => {
      const data = ev.data;
      if (data?.error) reject(new Error(data.error));
      else resolve(data as ArrayBuffer);
      worker.terminate();
    };
    worker.postMessage(url);
  });
}
