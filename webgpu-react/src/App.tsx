import { Card, Col, Container, Row } from "react-bootstrap";
import WebGPUCanvas from "./components/WebGPUCanvas";
import NoiseSettingsForm, {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "./components/NoiseSettingsForm";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { DefaultInput, Input } from "./interfaces/Input";
import { CursorQuery, DefaultCursorQuery } from "./interfaces/CursorQuery";
import CanvasUI from "./components/ui/CanvasUI";
import { WebGPUHandle } from "./webgpu/initWebGPU";
import {
  computeVisibleAreaInCanvas,
  VisibleRect,
} from "./interfaces/VisibleRect";

const isEditableTarget = (t: EventTarget | null) => {
  const el = t as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName?.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    el.isContentEditable ||
    tag === "select"
  );
};

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const computeLimitsCentered = (
  vw: number,
  vh: number,
  cw: number,
  ch: number
) => ({
  xMin: -Math.max(0, (cw - vw) / 2),
  xMax: Math.max(0, (cw - vw) / 2),
  yMin: -Math.max(0, (ch - vh) / 2),
  yMax: Math.max(0, (ch - vh) / 2),
});

const computeLimitsTopLeft = (
  vw: number,
  vh: number,
  cw: number,
  ch: number
) => ({
  xMin: -Math.max(0, cw - vw),
  xMax: 0,
  yMin: -Math.max(0, ch - vh),
  yMax: 0,
});

export default function App() {
  const [settings, setSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  const [input, setInput] = useState<Input>(DefaultInput);
  const [cursorQuery, setCursorQuery] =
    useState<CursorQuery>(DefaultCursorQuery);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 1920, height: 1080 });
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [canvasPositionEasing, setCanvasPositionEasing] = useState(false);

  const [canvasScale, setCanvasScale] = useState(2);
  const [webHandle, setWebHandle] = useState<WebGPUHandle | null>(null);
  const webHandleRef = useRef<WebGPUHandle | null>(null);
  useEffect(() => {
    webHandleRef.current = webHandle;
  }, [webHandle]);

  // keep the last known mouse position in viewport coords
  const lastClientPosRef = useRef<{ x: number; y: number } | null>(null);

  const updateMouseFromClient = useCallback(
    (clientX?: number, clientY?: number, markMoved = false) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      // pick explicit coords if provided, else use the last known
      const pos =
        clientX !== undefined && clientY !== undefined
          ? { x: clientX, y: clientY }
          : lastClientPosRef.current;

      if (!pos) return;

      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const sx = canvas.width / rect.width;
      const sy = canvas.height / rect.height;

      const mx = Math.floor((pos.x - rect.left) * sx);
      const my = Math.floor((pos.y - rect.top) * sy);

      setInput((prev) => {
        const nx = clamp(mx, 0, settings.width - 1);
        const ny = clamp(my, 0, settings.height - 1);

        // avoid useless updates
        if (
          !markMoved &&
          prev.mousePosition.x === nx &&
          prev.mousePosition.y === ny
        ) {
          return prev;
        }

        const next = {
          ...prev,
          mousePosition: { x: nx, y: ny },
          mouseMoved: markMoved,
        };
        webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    },
    [settings.width, settings.height]
  );

  // move canvas effect
  useEffect(() => {
    const pressed = new Set<string>();
    let rafId = 0;
    let last = performance.now();
    const SPEED = 600; // pixels per second

    const getBaseSize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const aspect = settings.width / settings.height;

      let baseW = vw;
      let baseH = baseW / aspect;
      if (baseH < vh) {
        baseH = vh;
        baseW = baseH * aspect;
      }
      return { vw, vh, baseW, baseH };
    };

    const getMinScaleToFitWidth = () => {
      const { vw, baseW } = getBaseSize();
      return vw / baseW; // <= 1
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditableTarget(e.target)) return;
      const k = e.key.toLowerCase();
      if (
        k === "w" ||
        k === "a" ||
        k === "s" ||
        k === "d" ||
        k === "arrowup" ||
        k === "arrowleft" ||
        k === "arrowdown" ||
        k === "arrowright" ||
        k === "ShiftLeft"
      ) {
        pressed.add(k);
        e.preventDefault();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      pressed.delete(k);
    };

    const resize = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      const aspect = settings.width / settings.height;
      let baseW = vw;
      let baseH = baseW / aspect;
      if (baseH < vh) {
        baseH = vh;
        baseW = baseH * aspect;
      }

      // Size after scale (use your own min/max if you want)
      const newW = clamp(baseW * canvasScale, vw, vw * 4);
      const newH = clamp(baseH * canvasScale, vh, vh * 4);

      // compute limits from the fresh size, not state
      const { xMin, xMax, yMin, yMax } = computeLimitsTopLeft(
        vw,
        vh,
        newW,
        newH
      );

      // Update state
      setCanvasSize({ width: newW, height: newH });
      setCanvasPosition((p) => ({
        x: clamp(p.x, xMin, xMax),
        y: clamp(p.y, yMin, yMax),
      }));

      requestAnimationFrame(() => updateMouseFromClient());
    };

    const moveCanvas = (dt: number) => {
      let dx = 0,
        dy = 0;
      if (pressed.has("w") || pressed.has("arrowup")) dy -= 1;
      if (pressed.has("s") || pressed.has("arrowdown")) dy += 1;
      if (pressed.has("a") || pressed.has("arrowleft")) dx -= 1;
      if (pressed.has("d") || pressed.has("arrowright")) dx += 1;

      if (dx !== 0 || dy !== 0) {
        const len = Math.hypot(dx, dy) || 1;
        dx /= len;
        dy /= len;

        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const cw = canvasSize.width;
        const ch = canvasSize.height;

        const { xMin, xMax, yMin, yMax } = computeLimitsTopLeft(vw, vh, cw, ch);

        setCanvasPosition((p) => ({
          // moving “right” makes the world shift left → keep the minus
          x: clamp(p.x - dx * SPEED * canvasScale * dt, xMin, xMax),
          y: clamp(p.y - dy * SPEED * canvasScale * dt, yMin, yMax),
        }));

        requestAnimationFrame(() => updateMouseFromClient());
      }
    };

    function onMouseScroll(e: WheelEvent) {
      e.preventDefault(); // needs { passive: false } when adding the listener

      const sign = Math.sign(e.deltaY) * -1;

      if (e.shiftKey) {
        // adjust brush radius
        setInput((prev) => {
          const delta = 0.1 * prev.mouseRadius * sign;
          const nextRadius = Math.max(5, prev.mouseRadius + delta);
          const next = { ...prev, mouseRadius: nextRadius };
          webHandleRef.current?.updateInputBuffer?.(next);
          return next;
        });
      } else {
        // Force snapping
        //setCanvasPositionEasing(false);

        // zoom canvas
        const minScale = getMinScaleToFitWidth();
        const maxScale = 4; // choose your max
        setCanvasScale((prev) => {
          const next = clamp(prev + 0.1 * prev * sign, minScale, maxScale); // pick sensible min/max
          return next;
        });
        resize(); // if resize is cheap; otherwise requestAnimationFrame(resize)

        // Re-enable easing on the next frame so panning can ease again
        //requestAnimationFrame(() => setCanvasPositionEasing(true));
      }
    }

    function onMouseMove(e: MouseEvent) {
      lastClientPosRef.current = { x: e.clientX, y: e.clientY };
      updateMouseFromClient(e.clientX, e.clientY, true); // markMoved = true
    }

    const onMouseDown = (e: MouseEvent) => {
      // prevent text selection / context menu issues (esp. for right click)
      if (e.button === 2) e.preventDefault();

      setInput((prev) => {
        const next = { ...prev };
        if (e.button === 0) next.mouse0Held = true;
        if (e.button === 2) next.mouse1Held = true;
        webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    };

    const onMouseUp = (e: MouseEvent) => {
      setInput((prev) => {
        const next = { ...prev };
        if (e.button === 0) next.mouse0Held = false;
        if (e.button === 2) next.mouse1Held = false;
        webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    };

    function preventContext(e: MouseEvent) {
      e.preventDefault();
    }

    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      moveCanvas(dt);

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("contextmenu", preventContext);
    window.addEventListener("mousedown", onMouseDown);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("wheel", onMouseScroll, { passive: false });
    window.addEventListener("resize", resize);
    resize(); // run once at mount

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("contextmenu", preventContext);
      window.removeEventListener("mousedown", onMouseDown);

      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("wheel", onMouseScroll);
      window.removeEventListener("resize", resize);
    };
  }, [canvasSize.width, canvasSize.height, canvasScale]);

  const visibleRect = useMemo(() => {
    const el = canvasRef.current;
    return el ? computeVisibleAreaInCanvas(el) : null;
  }, [canvasPosition.x, canvasPosition.y, canvasSize.width, canvasSize.height]);

  // side-effects or logging when it changes
  useEffect(() => {
    if (!visibleRect) return;
    // webHandleRef.current?.updateVisibleArea?.(visibleRect);
    const newInput: Input = { ...input, visibleRect };
    setInput(newInput);
    webHandleRef.current?.updateInputBuffer?.(newInput);
  }, [visibleRect]);

  return (
    <>
      <div
        id="windowDiv"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(1, 1, 1, 1)",
          overflow: "hidden",
          pointerEvents: "none",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          id="canvasHolder"
          style={{
            position: "absolute",
            backgroundColor: "black",
            width: canvasSize.width,
            height: canvasSize.height,
            inset: 0, // top:0,left:0,right:0,bottom:0
            zIndex: -5,
            display: "grid",
            placeItems: "center",
            // left: `${canvasPosition.x}px`,
            // top: `${canvasPosition.y}px`,
            transform: `translate3d(${canvasPosition.x}px, ${canvasPosition.y}px, 0)`,
            transition: canvasPositionEasing
              ? "transform 360ms ease-out"
              : "none",
            willChange: "transform",
          }}
        >
          <WebGPUCanvas
            ref={canvasRef} // forward it down
            noiseSettings={settings}
            input={input}
            setInput={setInput}
            setWebGPUHandle={setWebHandle}
            setCursorQuery={setCursorQuery}
          />
        </div>

        <CanvasUI
          settings={settings}
          setSettings={setSettings}
          input={input}
          cursorQuery={cursorQuery}
        />
      </div>
    </>
  );
}
