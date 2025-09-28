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

export default function App() {
  const [settings, setSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  const [input, setInput] = useState<Input>(DefaultInput);
  const [cursorQuery, setCursorQuery] =
    useState<CursorQuery>(DefaultCursorQuery);

  const [canvasSize, setCanvasSize] = useState({ width: 1920, height: 1080 });
  const [canvasPosition, setCanvasPosition] = useState({ x: 0, y: 0 });
  const [canvasScale, setCanvasScale] = useState(2);

  const getLimits = useCallback(() => {
    const vw = window.innerWidth,
      vh = window.innerHeight;
    const cw = canvasSize.width,
      ch = canvasSize.height;
    return {
      overflowX: Math.max(0, (cw - vw) / 2),
      overflowY: Math.max(0, (ch - vh) / 2),
    };
  }, [canvasSize.width, canvasSize.height]);

  // resize canvas effect
  useEffect(() => {
    const resize = () => {
      const aspectRatio = settings.width / settings.height;
      var canvasWidth = window.innerWidth;
      var canvasHeight = canvasWidth / aspectRatio;

      if (canvasHeight < window.innerHeight) {
        canvasHeight = window.innerHeight;
        canvasWidth = canvasHeight * aspectRatio;
      }

      // Update React state for CSS sizing
      setCanvasSize({
        width: canvasWidth * canvasScale,
        height: canvasHeight * canvasScale,
      });

      const { overflowX, overflowY } = getLimits();

      setCanvasPosition((p) => ({
        x: clamp(p.x, -overflowX, overflowX),
        y: clamp(p.y, -overflowY, overflowY),
      }));
    };

    window.addEventListener("resize", resize);
    resize(); // run once at mount

    return () => window.removeEventListener("resize", resize);
  }, []);

  // move canvas effect
  useEffect(() => {
    const pressed = new Set<string>();
    let rafId = 0;
    let last = performance.now();
    const SPEED = 400; // pixels per second

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
    };

    const onKeyUp = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      pressed.delete(k);
    };

    const tick = (t: number) => {
      const dt = (t - last) / 1000;
      last = t;

      let dx = 0,
        dy = 0;
      if (pressed.has("w") || pressed.has("arrowup")) dy -= 1;
      if (pressed.has("s") || pressed.has("arrowdown")) dy += 1;
      if (pressed.has("a") || pressed.has("arrowleft")) dx -= 1;
      if (pressed.has("d") || pressed.has("arrowright")) dx += 1;

      if (dx !== 0 || dy !== 0) {
        // Normalize diagonal movement
        const len = Math.hypot(dx, dy) || 1;
        dx /= len;
        dy /= len;

        const { overflowX, overflowY } = getLimits();

        setCanvasPosition((p) => ({
          // Note the sign here: moving “right” typically means the world shifts left
          x: clamp(p.x - dx * SPEED * dt, -overflowX, overflowX),
          y: clamp(p.y - dy * SPEED * dt, -overflowY * 2, 0),
        }));
      }

      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [canvasSize.width, canvasSize.height]);

  return (
    <>
      <div
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
        <WebGPUCanvas
          canvasSize={canvasSize}
          canvasPosition={canvasPosition}
          style={{
            position: "absolute",
            display: "block",
            transform: "translate(-50%, 0%)",
            // maxHeight: "80vh",
            // maxWidth: "100vw",
          }}
          noiseSettings={settings}
          input={input}
          setInput={setInput}
          setCursorQuery={setCursorQuery}
        ></WebGPUCanvas>

        <CanvasUI
          settings={settings}
          setSettings={setSettings}
          input={input}
          cursorQuery={cursorQuery}
        />
      </div>
    </>
  );
  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <h1>Web GPU Terrain</h1>
  //       </Col>
  //     </Row>
  //     <Row className="justify-content-center">
  //       <Col style={{ margin: "30px" }}>
  //         {/* Canvas fills width; drawing buffer is set inside init */}
  //         <WebGPUCanvas
  //           style={{
  //             width: "100%",
  //             display: "block",
  //             maxHeight: "80vh",
  //             maxWidth: "100vw",
  //           }}
  //           noiseSettings={settings}
  //           input={input}
  //           setInput={setInput}
  //           setCursorQuery={setCursorQuery}
  //         >
  //           <CanvasUI input={input} cursorQuery={cursorQuery} />
  //         </WebGPUCanvas>
  //         <div id="output" />
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <Card className="mb-4">
  //           <Card.Body>
  //             <Card.Title>Debug</Card.Title>
  //             <h6 className="text-muted mb-2">Input</h6>
  //             <Row className="g-3">
  //               <Col md={6} lg={4}>
  //                 <h6 className="mb-2">
  //                   {`Mouse Position: (${input.mousePosition.x}, ${input.mousePosition.y})`}
  //                 </h6>
  //               </Col>
  //               <Col md={6} lg={4}>
  //                 <h6 className="mb-2">
  //                   {`Mouse Radius: ${Math.floor(input.mouseRadius)}`}
  //                 </h6>
  //               </Col>
  //               <Col md={6} lg={4}>
  //                 <h6 className="mb-2">
  //                   {`Mouse Held: (${input.mouse0Held}, ${input.mouse1Held}, ${input.mouse2Held})`}
  //                 </h6>
  //               </Col>
  //             </Row>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <NoiseSettingsForm
  //           initial={settings}
  //           onChange={setSettings}
  //           onApply={(s) => {
  //             setSettings(s);
  //             console.log("Apply clicked:", s);
  //           }}
  //         />
  //       </Col>
  //     </Row>
  //   </Container>
  // );
}
