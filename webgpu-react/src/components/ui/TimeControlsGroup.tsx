// TimeControlGroup.tsx
import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

export type Speed = 0.25 | 0.5 | 1 | 2 | 3 | 4;
const timeOptions = [0.25, 0.5, 1, 2, 3, 4];

type Props = {
  speed: Speed;
  paused: boolean;
  onChange: (next: { paused: boolean; speed: Speed }) => void;
  className?: string;
  size?: "sm" | "lg";
};

export default function TimeControlGroup({
  speed,
  paused,
  onChange,
  className,
  size,
}: Props) {
  const setSpeed = (v: Speed) => onChange({ paused: false, speed: v });
  const togglePause = () => onChange({ paused: !paused, speed });

  const buttonSize = 40;
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "rgba(99, 99, 99, 0.57)",
    // color: "white",
    border: "4px solid white",
    borderRadius: 0,
    fontSize: "20px",
    width: buttonSize,
    height: buttonSize,
    padding: "0px",
    // textAlign: "center",
    display: "grid",
    placeItems: "center",
    outline: "none",
    boxShadow: "none",
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "190px",
        right: "127px",
        pointerEvents: "auto",
      }}
    >
      <ButtonGroup
        className={`${className} rounded-0`}
        size={size}
        style={{ border: "none" }}
      >
        <Button
          type="button"
          variant={"primary"}
          onClick={togglePause}
          aria-pressed={paused}
          aria-label={paused ? "Resume" : "Pause"}
          title={paused ? "Resume" : "Pause"}
          style={buttonStyle}
        >
          {paused ? <PlayFill /> : <PauseFill />}
        </Button>

        {timeOptions.map((v) => (
          <Button
            key={v}
            type="button"
            variant={speed === v && !paused ? "primary" : "outline-secondary"}
            active={speed === v && !paused}
            onClick={() => setSpeed(v as Speed)}
            aria-pressed={speed === v && !paused}
            aria-label={v < 1 ? `1/${Math.round(1 / v)}x speed` : `${v}x speed`}
            title={v < 1 ? `1/${Math.round(1 / v)}x speed` : `${v}x speed`}
            style={{
              ...buttonStyle,
              color: speed === v && !paused ? "white" : "darkgray",
              marginLeft: "-4px",
              fontSize: v < 1 ? "15px" : "",
            }}
          >
            {v < 1 ? `1/${Math.round(1 / v)}x` : `${v}x`}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
