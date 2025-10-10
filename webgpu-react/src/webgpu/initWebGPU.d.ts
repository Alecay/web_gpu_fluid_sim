// src/webgpu/initWebGPU.d.ts
import type { NoiseUISettings } from "../components/NoiseSettingsForm";
import type { Input } from "@/interfaces/Input";
import type { CursorQuery } from "@/interfaces/CursorQuery";
import type { Dispatch, SetStateAction } from "react";

export interface WebGPUHandle {
  cleanup: () => void;
  resetMap: () => void;
  randomizeMap: () => void;
  toggleShowDebug: () => void;
  setShowDebug: (s: boolean) => void;
  spriteMap: Map<string, number>;
  // add more methods as your JS returns them
}

// If your JS exports a *named* function
export function initWebGPU(
  canvas: HTMLCanvasElement | null,
  noiseSettings: NoiseUISettings,
  getInput: () => Input,
  setInput: Dispatch<SetStateAction<Input>>,
  setCursorQuery: Dispatch<SetStateAction<CursorQuery>>,
  setSimIndex: Dispatch<SetStateAction<number>>
): Promise<WebGPUHandle>;
