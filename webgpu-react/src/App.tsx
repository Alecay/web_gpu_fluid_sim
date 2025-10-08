import { Anchor, Card, Col, Container, Row } from "react-bootstrap";
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
import { VisibleRect } from "./interfaces/VisibleRect";
import {
  nextGameSpeed,
  previousGameSpeed,
  GameSpeed,
} from "./components/ui/GameSpeedControlsUI";
import WebCanvasSprite from "./components/WebCanvasSptire";

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
) => {
  const halfExtraW = Math.max(0, (cw - vw) / 2);
  const halfExtraH = Math.max(0, (ch - vh) / 2);

  return {
    xMin: -halfExtraW,
    xMax: halfExtraW,
    yMin: -halfExtraH,
    yMax: halfExtraH,
  };
};

export default function App() {
  const [settings, setSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  const isDevBuid = import.meta.env.DEV;
  // Game State
  const [paused, setPaused] = React.useState(false);
  const [gameSpeed, setGameSpeed] = React.useState<GameSpeed>(1);
  const [simIndex, setSimIndex] = useState(0);
  const [showControlsUI, setShowControlsUI] = useState(!isDevBuid);
  const [showDebugUI, setShowDebugUI] = useState(false);

  const [input, setInput] = useState<Input>(DefaultInput);
  const inputRef = useRef(input);
  useEffect(() => {
    inputRef.current = input;
  }, [input]);

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
    (
      clientX?: number,
      clientY?: number,
      target?: EventTarget | null,
      markMoved = false
    ) => {
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

      const sx = canvas.width / settings.pixelScale / rect.width;
      const sy = canvas.height / settings.pixelScale / rect.height;

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
          cursorVisible: target == null || target == canvasRef.current,
        };
        // webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    },
    [settings.width, settings.height, settings.pixelScale]
  );

  const toCanvasPosition = useCallback(
    (clientX: number, clientY: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return { x: 0, y: 0 };

      const pos = { x: clientX, y: clientY };

      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return { x: 0, y: 0 };

      const sx = canvas.width / settings.pixelScale / rect.width;
      const sy = canvas.height / settings.pixelScale / rect.height;

      const mx = Math.floor((pos.x - rect.left) * sx);
      const my = Math.floor((pos.y - rect.top) * sy);

      const nx = clamp(mx, 0, settings.width - 1);
      const ny = clamp(my, 0, settings.height - 1);
      return { x: nx, y: ny };
    },
    [settings.width, settings.height, settings.pixelScale]
  );

  // move canvas effect
  useEffect(() => {
    const pressed = new Set<string>();
    let rafId = 0;
    let last = performance.now();
    const SPEED = 600; // pixels per second

    webHandleRef.current?.setShowDebug(showDebugUI);

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
        k === "arrowright"
      ) {
        pressed.add(k);
        e.preventDefault();
      }

      const togglePause = () => {
        setPaused((p) => {
          let np = !p;
          setInput((i) => ({
            ...i,
            simulationSubSteps: np ? 0 : Math.ceil(4 * gameSpeed),
          }));
          return np;
        });
        e.preventDefault();
      };

      const setNextSpeed = () => {
        setGameSpeed((s: GameSpeed) => {
          let ns = nextGameSpeed(s, false);
          setInput((i) => ({
            ...i,
            simulationSubSteps: paused ? 0 : Math.ceil(4 * ns),
          }));
          return ns;
        });
        e.preventDefault();
      };

      const setPreviousSpeed = () => {
        setGameSpeed((s: GameSpeed) => {
          let ns = previousGameSpeed(s, false);
          setInput((i) => ({
            ...i,
            simulationSubSteps: paused ? 0 : Math.ceil(4 * ns),
          }));
          return ns;
        });
        e.preventDefault();
      };

      if (e.code == "Space") {
        // Toggle Pause
        togglePause();
      } else if (e.code == "Tab") {
        if (paused) {
          // Toggle Pause
          togglePause();
        } else if (e.shiftKey) {
          setPreviousSpeed();
        } else {
          setNextSpeed();
        }

        e.preventDefault();
      }
      // Toggle Controls UI
      else if (e.code == "F9") {
        setShowControlsUI((p) => !p);
        e.preventDefault();
      }
      // Toggle Controls UI
      else if (e.code == "F8") {
        setShowDebugUI((p) => {
          webHandleRef.current?.setShowDebug(!p);
          return !p;
        });
        e.preventDefault();
      }
      // Toggle Controls UI
      else if (e.code == "KeyC") {
        webHandleRef.current?.resetMap();
        e.preventDefault();
      } else if (!e.ctrlKey && e.code == "KeyR") {
        webHandleRef.current?.randomizeMap();
        e.preventDefault();
      }
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      pressed.delete(k);
    };

    function getScaleBounds(
      vw: number,
      vh: number,
      baseW: number,
      baseH: number
    ) {
      // Minimum scale that fully covers the viewport in BOTH axes
      const minScale = Math.max(vw / baseW, vh / baseH);

      // Maximum scale so that neither axis exceeds 4× the viewport
      // (choose the tighter cap to keep a single uniform scale)
      const maxScale = Math.min((vw * 4) / baseW, (vh * 4) / baseH);

      return { minScale, maxScale };
    }

    function resize() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // base size at scale=1 with your aspect logic
      const aspect = settings.width / settings.height;
      let baseW = vw;
      let baseH = baseW / aspect;
      if (baseH < vh) {
        baseH = vh;
        baseW = baseH * aspect;
      }

      // clamp the *scale*, not width/height
      const { minScale, maxScale } = getScaleBounds(vw, vh, baseW, baseH);
      const s = Math.min(Math.max(canvasScale, minScale), maxScale);

      const newW = baseW * s;
      const newH = baseH * s;

      const { xMin, xMax, yMin, yMax } = computeLimitsCentered(
        vw,
        vh,
        newW,
        newH
      );

      setCanvasSize({ width: newW, height: newH });
      setCanvasPosition((p) => ({
        x: clamp(p.x, xMin, xMax),
        y: clamp(p.y, yMin, yMax),
      }));

      requestAnimationFrame(() => updateMouseFromClient());
      updateVisibleRect();
    }

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

        const { xMin, xMax, yMin, yMax } = computeLimitsCentered(
          vw,
          vh,
          cw,
          ch
        );

        setCanvasPosition((p) => ({
          // moving “right” makes the world shift left → keep the minus
          x: clamp(p.x - dx * SPEED * canvasScale * dt, xMin, xMax),
          y: clamp(p.y - dy * SPEED * canvasScale * dt, yMin, yMax),
        }));

        requestAnimationFrame(() => updateMouseFromClient());
        updateVisibleRect();
      }
    };

    function onMouseScroll(e: WheelEvent) {
      e.preventDefault(); // needs { passive: false } when adding the listener

      const sign = Math.sign(e.deltaY) * -1;

      if (e.shiftKey) {
        // adjust brush radius
        setInput((prev) => {
          const delta = 0.1 * prev.mouseRadius * sign;
          const nextRadius = Math.min(
            Math.max(5, prev.mouseRadius + delta),
            settings.width / 2
          );
          const next = { ...prev, mouseRadius: nextRadius };
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

        // Re-enable easing on the next frame so panning can ease again
        //requestAnimationFrame(() => setCanvasPositionEasing(true));
      }
    }

    function onMouseMove(e: MouseEvent) {
      lastClientPosRef.current = { x: e.clientX, y: e.clientY };
      updateMouseFromClient(e.clientX, e.clientY, e.target, true); // markMoved = true
    }

    const onMouseDown = (e: MouseEvent) => {
      // prevent text selection / context menu issues (esp. for right click)
      if (e.button === 2) e.preventDefault();

      setInput((prev) => {
        const next = { ...prev };
        if (e.button === 0) {
          next.mouse0Held = true;
          next.mouse0Pressed = true;
        }
        if (e.button === 1) {
          next.mouse1Held = true;
          next.mouse1Pressed = true;
        }
        if (e.button === 2) {
          next.mouse2Held = true;
          next.mouse2Pressed = true;
        }
        // webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    };

    const onMouseUp = (e: MouseEvent) => {
      setInput((prev) => {
        const next = { ...prev };
        if (e.button === 0) {
          next.mouse0Held = false;
          next.mouse0Pressed = false;
        }
        if (e.button === 1) {
          next.mouse1Held = false;
          next.mouse1Pressed = false;
        }
        if (e.button === 2) {
          next.mouse2Held = false;
          next.mouse2Pressed = false;
        }
        // webHandleRef.current?.updateInputBuffer?.(next);
        return next;
      });
    };

    function preventContext(e: MouseEvent) {
      e.preventDefault();
    }

    const tick = async (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      moveCanvas(dt);
      updateVisibleRect();
      rafId = requestAnimationFrame(tick);

      setInput((p) => ({
        ...p,
        mouse0Pressed: false,
        mouse1Pressed: false,
        mouse2Pressed: false,
        mouseMoved: false,
      }));
    };

    window.addEventListener("mousemove", onMouseMove);
    canvasRef.current?.addEventListener("mouseup", onMouseUp);
    window.addEventListener("contextmenu", preventContext);
    canvasRef.current?.addEventListener("mousedown", onMouseDown);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvasRef.current?.addEventListener("wheel", onMouseScroll, {
      passive: false,
    });
    window.addEventListener("resize", resize);
    resize(); // run once at mount

    rafId = requestAnimationFrame(tick);

    updateVisibleRect();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      canvasRef.current?.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("contextmenu", preventContext);
      canvasRef.current?.removeEventListener("mousedown", onMouseDown);

      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvasRef.current?.removeEventListener("wheel", onMouseScroll);
      window.removeEventListener("resize", resize);
    };
  }, [
    canvasSize.width,
    canvasSize.height,
    canvasScale,
    paused,
    setInput,
    setPaused,
    gameSpeed,
    setGameSpeed,
    setShowControlsUI,
  ]);

  const lastVisRef = useRef<VisibleRect | null>(null);

  /** Measure visible rect (in canvas coords) and push into input + GPU. */
  const updateVisibleRect = useCallback(
    (defer: boolean = true) => {
      const run = () => {
        const el = canvasRef.current;
        if (!el) return;

        //const vr = computeVisibleAreaInCanvas(el); // your function from earlier

        const topLeft = toCanvasPosition(0, 0);
        const bottomRight = toCanvasPosition(
          window.innerWidth,
          window.innerHeight
        );

        const vr: VisibleRect = {
          x0: topLeft.x,
          y0: topLeft.y,
          x1: bottomRight.x,
          y1: bottomRight.y,
          width: bottomRight.x - topLeft.x,
          height: bottomRight.y - topLeft.y,
        };

        if (!vr) return;

        // Skip if unchanged
        const same =
          lastVisRef.current &&
          vr.x0 === lastVisRef.current.x0 &&
          vr.y0 === lastVisRef.current.y0 &&
          vr.x1 === lastVisRef.current.x1 &&
          vr.y1 === lastVisRef.current.y1;

        if (same) return;
        lastVisRef.current = vr;
        setInput((prev) => {
          const next = { ...prev, visibleRect: vr, visibleRectChanged: true };
          // webHandleRef.current?.updateInputBuffer?.(next);
          return next;
        });
      };

      defer ? requestAnimationFrame(run) : run();
    },
    [setInput, toCanvasPosition, window.innerWidth, window.innerHeight]
  );

  // useEffect(() => webHandleRef.current?.updateInputBuffer?.(input), [input]);

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
          display: "grid",
          placeItems: "center",
          cursor: "none",
        }}
      >
        <div
          id="canvasHolder"
          style={{
            position: "absolute",
            backgroundColor: "black",
            width: canvasSize.width,
            height: canvasSize.height,
            zIndex: -5,
            display: "grid",
            placeItems: "center",
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
            inputRef={inputRef}
            setInput={setInput}
            setWebGPUHandle={setWebHandle}
            setCursorQuery={setCursorQuery}
            setSimIndex={setSimIndex}
          ></WebGPUCanvas>

          {/* <WebCanvasSprite
            canvasSize={canvasSize}
            noiseSettings={settings}
            src="public/sprites/tree001.png"
            canvasPos={{ x: 240, y: 135 }}
            scale={1/2}
            anchor={"bottom-left"}
          /> */}
        </div>

        <CanvasUI
          settings={settings}
          setSettings={setSettings}
          input={input}
          setInput={(i: Input) => {
            setInput(i);
            // webHandleRef.current?.updateInputBuffer?.(i);
          }}
          cursorQuery={cursorQuery}
          paused={paused}
          setPaused={setPaused}
          gameSpeed={gameSpeed}
          setGameSpeed={setGameSpeed}
          simIndex={simIndex}
          showControlsUI={showControlsUI}
          showDebugUI={showDebugUI}
        />
      </div>
    </>
  );
}
