import { Card } from "react-bootstrap";
import { ControlKey } from "./ControlsUI";
import { fps } from "../../interfaces/FPSMeter";
import { useState, useEffect } from "react";
import { CursorQuery } from "../../interfaces/CursorQuery";
import { GameSpeed } from "./GameSpeedControlsUI";

interface DebugStatsUIProps {
  cursorQuery: CursorQuery;
  gameSpeed: GameSpeed;
  mode: "simple" | "full";
  simIndex: number;
}

export default function DebugStatsUI({
  cursorQuery,
  gameSpeed,
  mode = "full",
  simIndex,
}: DebugStatsUIProps) {
  const [fpsValue, setFpsValue] = useState(0);
  const [cpuMs, setCPUMs] = useState(0);
  const [frameCount, setFrameCount] = useState(0);

  // update this every 250ms or so
  useEffect(() => {
    const id = setInterval(() => {
      setFpsValue(fps.fps); // or fps.ema if you prefer the smoothed number
      setCPUMs(fps.cpuMs);
      setFrameCount(fps.frameCount);
    }, 250);
    return () => clearInterval(id);
  }, []);

  const fmt = new Intl.NumberFormat("en", {
    notation: "compact",
    compactDisplay: "short", // "long" gives e.g. "4 thousand"
  });

  const frameDurStr = `${cpuMs.toFixed(2)}`.padStart(5, "0");

  const cellUpdatesPerTick = cursorQuery.chunkUpdates * 16 * 16 * gameSpeed * 4;

  if (mode == "simple") {
    return <div>{`FPS: ${fpsValue}`}</div>;
  }

  return (
    <Card
      className={`bg-dark text-light shadow `}
      style={{
        width: 450,
        pointerEvents: "none",
        borderRadius: 12,
        fontSize: 18,
        //   ...style,
      }}
    >
      <Card.Body style={{ padding: "0.9rem 1rem" }}>
        <Card.Title style={{ fontSize: 16, marginBottom: 8 }}>
          Debug Stats - Press <ControlKey>F8</ControlKey> to close
        </Card.Title>
        <div>
          {`FPS: ${fpsValue} (Frame Duration: ${frameDurStr} ms) (Frames: ${fmt.format(
            frameCount
          )})`}
        </div>
        <div>{`Simulation Steps: ${fmt.format(simIndex)}`}</div>
        <div>{`Chunk Updates: ${fmt.format(cursorQuery.chunkUpdates)}`}</div>
        <div>{`Cell Updates per frame: ${fmt.format(cellUpdatesPerTick)}`}</div>
        <div>
          {`Total Fluid: ${fmt.format(Math.ceil(cursorQuery.fluidTotal))}`}
        </div>
        <div>
          {`Total Anti Fluid: ${fmt.format(
            Math.ceil(cursorQuery.antiFluidTotal)
          )}`}
        </div>
        <div>
          {`Total Combined Fluid: ${fmt.format(
            Math.ceil(cursorQuery.fluidTotal - cursorQuery.antiFluidTotal)
          )}`}
        </div>
      </Card.Body>
    </Card>
  );
}
