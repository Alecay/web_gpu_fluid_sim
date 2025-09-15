import { useEffect, useRef } from "react";
import { initWebGPU } from "../webgpu/initWebGPU";

interface WebGPUCanvasProps {
  style: React.CSSProperties;
}

export default function WebGPUCanvas({ style }: WebGPUCanvasProps) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      cleanup = await initWebGPU(canvasRef.current);
    })();

    return () => {
      cleanup?.();
    };
  }, []);

  return <canvas ref={canvasRef} style={style} />;
}
