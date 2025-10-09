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
  setSimIndex: React.Dispatch<React.SetStateAction<number>>;
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
      setSimIndex,
      children,
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
      let abort = false;

      const nextFrame = () =>
        new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      const idle = () =>
        new Promise<void>((resolve) =>
          // fall back to rAF if requestIdleCallback is unavailable
          (window as any).requestIdleCallback
            ? (window as any).requestIdleCallback(() => resolve())
            : requestAnimationFrame(() => resolve())
        );

      (async () => {
        // 1) Let the canvas render before heavy work
        await nextFrame();
        if (abort) return;

        // 2) Give the main thread a breather (network, styles, etc.)
        await idle();
        if (abort) return;

        // 3) Now do your existing initialization
        const handle = await initWebGPU(
          localRef.current!,
          noiseSettings,
          () => inputRef.current,
          setInput,
          setCursorQuery,
          setSimIndex
        );
        if (abort) {
          handle.cleanup?.();
          return;
        }
        cleanup = handle.cleanup;
        setWebGPUHandle(handle);
      })();

      return () => {
        abort = true;
        cleanup?.();
      };
      // keep deps minimal to avoid repeated inits
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
      >
        {children}
      </canvas>
    );
  }
);

// Only re-render when noiseSettings changes
export default React.memo(WebGPUCanvas, (prev, next) => {
  return (
    prev.noiseSettings === next.noiseSettings && prev.children === next.children
  );
});
