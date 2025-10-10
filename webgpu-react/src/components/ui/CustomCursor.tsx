import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type CursorKind = "default" | "link" | "grab" | "grabbing"; // e.g., "default" | "pointer" | "grab" | etc.

type CursorImage = {
  src: string; // image URL
  width?: number; // CSS px (optional; image's natural size if omitted)
  height?: number; // CSS px
  hotspotX?: number; // px from left where the click point is
  hotspotY?: number; // px from top where the click point is
};

type Props = {
  mode: CursorKind;
  images: Record<CursorKind, CursorImage>;
  /** If provided, cursor is confined to this element; otherwise the window */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Raise above your UI as needed */
  zIndex?: number;
  /** Crisp pixel-art look */
  pixelated?: boolean;
  /** Hide the cursor (native) inside the container; defaults true */
  hideNativeCursor?: boolean;
  // hidden
  visible?: boolean;
  /** Optional: disable entirely (restores native cursor) */
  disabled?: boolean;
};

const CustomCursor: React.FC<Props> = ({
  mode,
  images,
  containerRef,
  zIndex = 10_000,
  pixelated = false,
  hideNativeCursor = true,
  visible = true,
  disabled = false,
}) => {
  if (!containerRef) return;

  const cursorRef = useRef<HTMLImageElement | null>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 }); // start off-screen
  const latest = useRef({ x: -9999, y: -9999 });
  const raf = useRef<number | null>(null);

  const current = images[mode] ?? images["default"];

  // Preload all images once
  useEffect(() => {
    Object.values(images).forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // mouse tracking (requestAnimationFrame to batch style writes)
  useEffect(() => {
    if (disabled) return;

    const rootEl = containerRef?.current ?? window.document.documentElement;

    const onMove = (e: MouseEvent) => {
      // If using a container, use pageX/pageY, then clamp to container bounds.
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        latest.current = { x, y };
      } else {
        latest.current = { x: e.clientX, y: e.clientY };
      }
      if (raf.current == null) {
        raf.current = requestAnimationFrame(() => {
          setPos(latest.current);
          raf.current = null;
        });
      }
    };

    const onLeave = () => {
      setPos({ x: -9999, y: -9999 }); // hide when leaving
    };

    const target = containerRef?.current ?? window;
    target.addEventListener("mousemove", onMove as EventListener);
    target.addEventListener("mouseleave", onLeave);

    return () => {
      target.removeEventListener("mousemove", onMove as EventListener);
      target.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [containerRef, disabled]);

  // Hide native cursor within the container (or whole document if none)
  useLayoutEffect(() => {
    if (!hideNativeCursor) return;
    const el = containerRef?.current ?? document.body;
    const prev = el.style.cursor;
    el.style.cursor = disabled ? "" : "none";
    return () => {
      el.style.cursor = prev;
    };
  }, [containerRef, hideNativeCursor, disabled]);

  const style = useMemo<React.CSSProperties>(() => {
    const w = current?.width;
    const h = current?.height;
    const hx = current?.hotspotX ?? 0;
    const hy = current?.hotspotY ?? 0;

    return {
      position: containerRef?.current ? "absolute" : "fixed",
      left: 0,
      top: 0,
      transform: `translate(${pos.x - hx}px, ${pos.y - hy}px)`,
      width: w,
      height: h,
      pointerEvents: "none",
      zIndex,
      imageRendering: pixelated ? ("pixelated" as any) : undefined,
      willChange: "transform",
    };
  }, [pos, current, zIndex, pixelated, containerRef]);

  if (disabled || !current || !visible) return null;
  return (
    <img
      ref={cursorRef}
      src={current.src}
      alt=""
      style={style}
      draggable={false}
    />
  );
};

export default CustomCursor;
