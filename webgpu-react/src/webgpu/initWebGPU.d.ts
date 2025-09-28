// src/webgpu/initWebGPU.d.ts
import type { NoiseUISettings } from "../components/NoiseSettingsForm";
import type { Input } from "@/interfaces/Input";
import type { CursorQuery } from "@/interfaces/CursorQuery";
import type { Dispatch, SetStateAction } from "react";

export interface WebGPUHandle {
  cleanup: () => void;
  updateInputBuffer: (newInput: Input) => void;
  frame: () => void;
  // add more methods as your JS returns them
}

// If your JS exports a *named* function
export function initWebGPU(
  canvas: HTMLCanvasElement,
  noiseSettings: NoiseUISettings,
  input: Input,
  setInput: Dispatch<SetStateAction<Input>>,
  setCursorQuery: Dispatch<SetStateAction<CursorQuery>>
): Promise<WebGPUHandle>;
