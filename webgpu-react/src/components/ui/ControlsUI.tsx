import { Card, Col, Container, Row } from "react-bootstrap";

const K: React.FC<React.PropsWithChildren> = ({ children }) => (
  <kbd
    style={{
      padding: "0.1rem 0.4rem",
      borderRadius: 4,
      background: "#1f2937",
      border: "1px solid #374151",
      fontSize: "0.85rem",
      marginRight: 6,
    }}
  >
    {children}
  </kbd>
);

export default function ControlsUI() {
  return (
    <div
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        pointerEvents: "none",
      }}
    >
      <Card
        className={`bg-dark text-light shadow `}
        style={{
          width: 380,
          pointerEvents: "none",
          borderRadius: 12,
          //   ...style,
        }}
      >
        <Card.Body style={{ padding: "0.9rem 1rem" }}>
          <Card.Title style={{ fontSize: 16, marginBottom: 8 }}>
            Controls
          </Card.Title>

          {/* Key help */}
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
            <div>
              <K>F11</K> — Toggle Fullscreen
            </div>
            <div>
              <K>F9</K> — Toggle Controls
            </div>
            <div>
              <K>F8</K> — Toggle Debug
            </div>
            <div>
              <K>W</K>
              <K>A</K>
              <K>S</K>
              <K>D</K> or <K>←</K>
              <K>→</K>
              <K>↑</K>
              <K>↓</K> — Pan Camera
            </div>
            <div>
              <K>ScrollWheel</K> — Zoom
            </div>
            <div>
              <K>Shift</K> + <K>ScrollWheel</K> — Change Brush Radius
            </div>
            <div>
              <K>LMB</K>/<K>RMB</K> — (Paint / Remove) Fluid
            </div>
            <div>
              <K>Spacebar</K> — Toggle Pause
            </div>
            <div>
              <K>Tab</K> / <K>Shift</K>+<K>Tab</K> — Increase / Decrease Speed
            </div>
            <div>
              <K>C</K> — Reset Map
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
