class FPSMeter {
  private winMs = 1000;
  private times: number[] = [];
  private lastCpuStart = 0;

  fps = 0; // windowed FPS
  ema = 0; // smoothed FPS
  cpuMs = 0; // per-frame CPU time (your JS work)
  private alpha = 0.1;

  begin() {
    this.lastCpuStart = performance.now();
  }

  end(rafTimestampMs: number) {
    // CPU time for this frame’s JS work (includes awaits)
    this.cpuMs = performance.now() - this.lastCpuStart;

    // Sliding-window FPS using rAF timestamps (vsynced)
    this.times.push(rafTimestampMs);
    const cutoff = rafTimestampMs - this.winMs;
    while (this.times.length && this.times[0] < cutoff) this.times.shift();

    this.fps = (this.times.length * 1000) / this.winMs;
    this.ema = this.ema
      ? this.ema + this.alpha * (this.fps - this.ema)
      : this.fps;
  }
}

export const fps = new FPSMeter();
