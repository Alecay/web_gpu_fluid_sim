class FPSMeter {
  private winMs = 1000;
  private times: number[] = [];
  private lastCpuStart = 0;

  fps = 0; // windowed FPS
  ema = 0; // smoothed FPS
  cpuMs = 0; // per-frame CPU time (raw)
  cpuEma = 0; // smoothed CPU time
  frameCount = 0;
  private alpha = 0.1;

  begin() {
    this.lastCpuStart = performance.now();
  }

  end(rafTimestampMs: number) {
    // raw CPU time for this frame
    this.cpuMs = performance.now() - this.lastCpuStart;

    // smoothed CPU time (EMA)
    this.cpuEma = this.cpuEma
      ? this.cpuEma + this.alpha * (this.cpuMs - this.cpuEma)
      : this.cpuMs;

    // FPS sliding window
    this.times.push(rafTimestampMs);
    const cutoff = rafTimestampMs - this.winMs;
    while (this.times.length && this.times[0] < cutoff) this.times.shift();

    this.fps = (this.times.length * 1000) / this.winMs;

    // FPS EMA
    this.ema = this.ema
      ? this.ema + this.alpha * (this.fps - this.ema)
      : this.fps;

    this.frameCount++;
  }
}

export const fps = new FPSMeter();
