import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { initWebGPU } from "../webgpu/initWebGPU";
import {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "../components/NoiseSettingsForm";
import { Input } from "@/interfaces/Input";
import { CursorQuery } from "@/interfaces/CursorQuery";
import { WebGPUHandle } from "@/webgpu/initWebGPU";

interface WebGPUCanvasProps {
  style?: React.CSSProperties; // e.g., { width: '100%', height: '80vh' }
  noiseSettings?: NoiseUISettings;
  inputRef: React.RefObject<Input>;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  setWebGPUHandle: React.Dispatch<React.SetStateAction<WebGPUHandle | null>>;
  setCursorQuery: React.Dispatch<React.SetStateAction<CursorQuery>>;
  children?: React.ReactNode;
}

const WebGPUCanvas = forwardRef<HTMLCanvasElement, WebGPUCanvasProps>(
  (
    {
      noiseSettings = defaultNoiseUISettings,
      inputRef,
      setInput,
      setWebGPUHandle,
      setCursorQuery,
      style,
    },
    ref
  ) => {
    const localRef = useRef<HTMLCanvasElement | null>(null);

    // Expose the DOM node to the parent (as a RefObject-like .current)
    useImperativeHandle(ref, () => localRef.current!, []);

    // Initialize WebGPU once per noiseSettings
    useEffect(() => {
      if (!localRef.current) return;

      let cleanup = () => {};
      (async () => {
        const handle = await initWebGPU(
          localRef.current,
          noiseSettings,
          () => inputRef.current,
          setInput,
          setCursorQuery
        );
        cleanup = handle.cleanup;
        setWebGPUHandle(handle);
      })();
      return () => cleanup?.();
    }, [noiseSettings, setInput, setWebGPUHandle, setCursorQuery]);

    // If you want click-through overlay, add pointerEvents: 'none' on the overlay.
    // Remove it if the overlay needs to be interactive.
    return (
      <canvas
        ref={localRef}
        style={{
          ...style, // e.g., { width:'100%', height:'80vh' }
          display: "block",
          width: "100%",
          height: "100%",
          // transform: "translate(-25%, 0%)",ssd
        }}
      />
    );
  }
);

// Only re-render when noiseSettings changes
export default React.memo(WebGPUCanvas, (prev, next) => {
  return (
    prev.noiseSettings === next.noiseSettings && prev.children === next.children
  );
});
