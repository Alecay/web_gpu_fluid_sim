import { useEffect, useRef } from "react";
import { initWebGPU } from "../webgpu/initWebGPU";
import {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "../components/NoiseSettingsForm";

interface WebGPUCanvasProps {
  style?: React.CSSProperties;
  noiseSettings?: NoiseUISettings;
}

export default function WebGPUCanvas({
  style,
  noiseSettings = defaultNoiseUISettings,
}: WebGPUCanvasProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      cleanup = await initWebGPU(canvasRef.current, noiseSettings);
    })();

    return () => {
      cleanup?.();
    };
  }, [noiseSettings]);

  return <canvas ref={canvasRef} style={style} />;
}
