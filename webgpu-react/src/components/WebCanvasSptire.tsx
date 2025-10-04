import { useEffect, useState } from "react";
import { NoiseUISettings } from "./NoiseSettingsForm";

export type Anchor =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

interface WebCanvasSpriteProps {
  canvasSize: {
    width: number;
    height: number;
  };
  noiseSettings: NoiseUISettings;
  src: string;
  canvasPos: { x: number; y: number };
  scale: number;
  anchor?: Anchor;
}

export default function WebCanvasSprite({
  canvasSize,
  noiseSettings,
  src,
  canvasPos,
  scale,
  anchor,
}: WebCanvasSpriteProps) {
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () =>
      setImgSize({ w: img.naturalWidth, h: img.naturalHeight });
  }, [src]);

  // Don’t render until image size is known
  if (!imgSize.w || !imgSize.h) return null;

  // Convert logical → canvas (world) units
  const sx = canvasSize.width / noiseSettings.width;
  const sy = canvasSize.height / noiseSettings.height;

  let tLeft = canvasPos.x * sx;
  let tTop = (canvasPos.y + 1) * sy;

  // Use actual sprite pixel dimensions scaled to canvas
  const tw = imgSize.w * sx * scale;
  const th = imgSize.h * sy * scale;

  switch (anchor) {
    case "top-center":
      tLeft -= tw / 2;
      break;
    case "top-right":
      tLeft -= tw;
      break;
    case "center-left":
      tTop -= th / 2;
      break;
    case "center":
      tLeft -= tw / 2;
      tTop -= th / 2;
      break;
    case "center-right":
      tLeft -= tw;
      tTop -= th / 2;
      break;
    case "bottom-left":
      tTop -= th;
      break;
    case "bottom-center":
      tLeft -= tw / 2;
      tTop -= th;
      break;
    case "bottom-right":
      tLeft -= tw;
      tTop -= th;
      break;
    // top-left is default (no adjustment)
  }

  return (
    <img
      alt="sprite"
      src={src}
      style={{
        position: "absolute",
        left: `${tLeft}px`,
        top: `${tTop}px`,
        width: `${tw}px`,
        height: `${th}px`,
        imageRendering: "pixelated",
        pointerEvents: "none",
      }}
    />
  );
}
