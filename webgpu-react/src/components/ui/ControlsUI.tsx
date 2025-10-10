import { Card, Col, Container, Row } from "react-bootstrap";

export const ControlKey: React.FC<React.PropsWithChildren> = ({ children }) => (
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
            Controls - Press <ControlKey>F9</ControlKey> to close
          </Card.Title>

          {/* Key help */}
          <div style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 8 }}>
            <div>
              <ControlKey>F11</ControlKey> — Toggle Fullscreen
            </div>
            <div>
              <ControlKey>F8</ControlKey> — Toggle Debug Stats
            </div>
            <div>
              <ControlKey>W</ControlKey>
              <ControlKey>A</ControlKey>
              <ControlKey>S</ControlKey>
              <ControlKey>D</ControlKey> or <ControlKey>←</ControlKey>
              <ControlKey>→</ControlKey>
              <ControlKey>↑</ControlKey>
              <ControlKey>↓</ControlKey> — Pan Camera
            </div>
            <div>
              <ControlKey>ScrollWheel</ControlKey> — Zoom
            </div>
            <div>
              <ControlKey>Shift</ControlKey> +{" "}
              <ControlKey>ScrollWheel</ControlKey> — Change Brush Radius
            </div>
            <div>
              <ControlKey>LMB</ControlKey>/<ControlKey>RMB</ControlKey> — (Paint
              / Remove) Fluid
            </div>
            <div>
              <ControlKey>Spacebar</ControlKey> — Toggle Pause
            </div>
            <div>
              <ControlKey>Tab</ControlKey> / <ControlKey>Shift</ControlKey>+
              <ControlKey>Tab</ControlKey> — Increase / Decrease Speed
            </div>
            <div>
              <ControlKey>C</ControlKey> — Clear Map <ControlKey>R</ControlKey>{" "}
              — Randmoize Map
            </div>
            <div>
              <ControlKey>1</ControlKey> - <ControlKey>5</ControlKey> — Open
              Build Tabs <ControlKey>B</ControlKey> — Toggle Build Menu
            </div>
            <div>
              <ControlKey>Esc</ControlKey> — Exit Menus
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
