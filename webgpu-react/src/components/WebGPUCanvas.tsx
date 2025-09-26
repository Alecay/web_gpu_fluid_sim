import React, { useEffect, useMemo, useRef, useState } from "react";
import { initWebGPU } from "../webgpu/initWebGPU";
import {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "../components/NoiseSettingsForm";
import { Input } from "@/interfaces/Input";
import { CursorQuery } from "@/interfaces/CursorQuery";

interface WebGPUCanvasProps {
  style?: React.CSSProperties; // e.g., { width: '100%', height: '80vh' }
  noiseSettings?: NoiseUISettings;
  input: Input;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  setCursorQuery: React.Dispatch<React.SetStateAction<CursorQuery>>;
  children?: React.ReactNode;
}

// Only re-render when noiseSettings changes
export default React.memo(WebGPUCanvas, (prev, next) => {
  return (
    prev.noiseSettings === next.noiseSettings && prev.children === next.children
  );
});

function WebGPUCanvas({
  style,
  noiseSettings = defaultNoiseUISettings,
  input,
  setInput,
  setCursorQuery,
  children,
}: WebGPUCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  // Initialize WebGPU once per noiseSettings
  useEffect(() => {
    let cleanup = () => {};
    (async () => {
      cleanup = await initWebGPU(
        canvasRef.current,
        noiseSettings,
        input,
        setInput,
        setCursorQuery
      );
    })();
    return () => cleanup?.();
  }, [noiseSettings, setInput, setCursorQuery]);

  // Observe canvas size changes (CSS size) and mirror its height onto the container
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // contentRect reports CSS pixels (what we want for the overlay area)
        const h = Math.ceil(entry.contentRect.height);
        // (Optional) Also mirror width if your container isn't already width:100%
        setContainerHeight(h);
      }
    });

    ro.observe(canvas);
    // Set initial height immediately
    setContainerHeight(canvas.clientHeight);

    return () => ro.disconnect();
  }, []);

  // If you want click-through overlay, add pointerEvents: 'none' on the overlay.
  // Remove it if the overlay needs to be interactive.
  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: containerHeight || undefined, // mirrors canvas height
        // If your canvas style sets width (e.g., 100%), you usually don't need to mirror width.
        // width: canvasRef.current?.clientWidth ?? undefined,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          ...style, // e.g., { width:'100%', height:'80vh' }
          position: "absolute",
          inset: 0, // top:0,left:0,right:0,bottom:0
          zIndex: 0,
          display: "block", // avoid inline gaps
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
