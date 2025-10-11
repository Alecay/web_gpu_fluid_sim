import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { initWebGPULatestWins } from "../webgpu/initWebGPU";
import {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "../components/NoiseSettingsForm";
import { Input } from "@/interfaces/Input";
import { CursorQuery } from "@/interfaces/CursorQuery";
import { WebGPUHandle } from "@/webgpu/initWebGPU";
import { ProgressBar, Spinner } from "react-bootstrap";

interface WebGPUCanvasProps {
  style?: React.CSSProperties; // e.g., { width: '100%', height: '80vh' }
  noiseSettings?: NoiseUISettings;
  inputRef: React.RefObject<Input>;
  setInput: React.Dispatch<React.SetStateAction<Input>>;
  setWebGPUHandle: React.Dispatch<React.SetStateAction<WebGPUHandle | null>>;
  setCursorQuery: React.Dispatch<React.SetStateAction<CursorQuery>>;
  setSimIndex: React.Dispatch<React.SetStateAction<number>>;
  loadingState: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loadingProgress: number;
    setLoadingProgress: React.Dispatch<React.SetStateAction<number>>;
  };
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
      loadingState,
      children,
    },
    ref
  ) => {
    const localRef = useRef<HTMLCanvasElement | null>(null);

    // Expose the DOM node to the parent (as a RefObject-like .current)
    useImperativeHandle(ref, () => localRef.current!, []);

    // helpers (can live outside the component so they aren't re-created)
    const nextFrame = () =>
      new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    const idle = () =>
      new Promise<void>((resolve) =>
        (window as any).requestIdleCallback
          ? (window as any).requestIdleCallback(() => resolve())
          : setTimeout(resolve, 0)
      );
    const throwIfAborted = (signal: AbortSignal) => {
      if (signal?.aborted) throw new DOMException("Aborted", "AbortError");
    };

    // Initialize WebGPU once per noiseSettings
    useEffect(() => {
      if (!localRef.current) return;
      let handle: WebGPUHandle | null = null;

      console.log("Init effect");
      (
        localRef.current as HTMLCanvasElement & { __wgpuCleanup?: () => void }
      ).__wgpuCleanup?.();

      initWebGPULatestWins(
        localRef.current,
        noiseSettings,
        () => inputRef.current,
        setInput,
        setCursorQuery,
        setSimIndex,
        loadingState.setLoadingProgress
      )
        .then((h) => {
          if (!h) return;
          handle = h;
          setWebGPUHandle(h);
          // setLoading(false);
          const timer = setTimeout(() => loadingState.setLoading(false), 1000);
        })
        .catch((e) => {
          if (e?.name !== "AbortError") console.error(e);
        });

      // cleanup when deps change or unmount
      return () => {
        handle?.cleanup?.();
      };
      // keep deps minimal to avoid repeated inits
    }, [
      noiseSettings,
      setInput,
      setWebGPUHandle,
      setCursorQuery,
      setSimIndex,
      loadingState.setLoadingProgress,
    ]);

    // If you want click-through overlay, add pointerEvents: 'none' on the overlay.
    // Remove it if the overlay needs to be interactive.
    return (
      <>
        <canvas
          ref={localRef}
          style={{
            ...style,
            display: "block",
            width: "100%",
            height: "100%",
          }}
        >
          {children}
        </canvas>
      </>
    );
  }
);

// Only re-render when noiseSettings changes
export default React.memo(WebGPUCanvas, (prev, next) => {
  return (
    prev.noiseSettings === next.noiseSettings && prev.children === next.children
  );
});
