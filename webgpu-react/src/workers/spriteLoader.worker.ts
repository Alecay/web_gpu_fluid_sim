// No DOM here; runs in a Worker.
self.onmessage = async (e) => {
  const url = e.data as string; // "/sprites_built/sprites_u32.bin"
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = await res.arrayBuffer();
    // Transfer ownership (no clone/copy)
    (self as any).postMessage(buf, [buf as any]);
  } catch (err) {
    (self as any).postMessage({ error: String(err) });
  }
};
