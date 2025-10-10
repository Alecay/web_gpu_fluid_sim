// TimeControlGroup.tsx
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { CursorKind } from "./CustomCursor";

export type GameSpeed = 0.5 | 1 | 2 | 3;
const timeOptions = [0.5, 1, 2, 3];

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

export function nextGameSpeed(s: GameSpeed, loop: boolean = true): GameSpeed {
  if (loop) {
    var index = (timeOptions.indexOf(s) + 1) % timeOptions.length;
    return timeOptions[index] as GameSpeed;
  } else {
    var index = clamp(timeOptions.indexOf(s) + 1, 0, timeOptions.length - 1);
    return timeOptions[index] as GameSpeed;
  }
}

export function previousGameSpeed(
  s: GameSpeed,
  loop: boolean = true
): GameSpeed {
  if (loop) {
    var index =
      (timeOptions.indexOf(s) - 1 + timeOptions.length) % timeOptions.length;
    return timeOptions[index] as GameSpeed;
  } else {
    var index = clamp(timeOptions.indexOf(s) - 1, 0, timeOptions.length - 1);
    return timeOptions[index] as GameSpeed;
  }
}

type Props = {
  gameSpeed: GameSpeed;
  paused: boolean;
  onChange: (next: { paused: boolean; gameSpeed: GameSpeed }) => void;
  setCursorOverUI: (value: React.SetStateAction<boolean>) => void;
  setCursorMode: (value: React.SetStateAction<CursorKind>) => void;
  className?: string;
  size?: "sm" | "lg";
};

export default function GameSpeedControlsUI({
  gameSpeed,
  paused,
  onChange,
  setCursorOverUI,
  setCursorMode,
  className,
  size,
}: Props) {
  const setGameSpeed = (v: GameSpeed) =>
    onChange({ paused: false, gameSpeed: v });
  const togglePause = () => onChange({ paused: !paused, gameSpeed });
  const [hoverKey, setHoverKey] = useState<GameSpeed | null | 0>(null);

  const buttonSize = 40;
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "rgba(99, 99, 99, 0.57)",
    color: "white",
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
    cursor: "none",
  };

  return (
    <div
      style={{
        position: "absolute",
        bottom: "5px",
        right: "75px",
        pointerEvents: "auto",
      }}
    >
      <ButtonGroup
        className={`${className} rounded-0`}
        size={size}
        style={{ border: "none" }}
        onMouseEnter={() => {
          setCursorOverUI(true);
          setCursorMode("link");
        }}
        onMouseLeave={() => {
          setCursorOverUI(false);
          setCursorMode("default");
        }}
      >
        <Button
          type="button"
          variant={"primary"}
          onClick={togglePause}
          onMouseEnter={() => setHoverKey(0)}
          onMouseLeave={() => setHoverKey(null)}
          aria-pressed={paused}
          aria-label={paused ? "Resume" : "Pause"}
          // title={paused ? "Resume" : "Pause"}
          style={{
            ...buttonStyle,
            color: hoverKey !== 0 ? "white" : "red",
          }}
        >
          {paused ? <PlayFill /> : <PauseFill />}
        </Button>

        {timeOptions.map((v) => (
          <Button
            key={v}
            type="button"
            variant={
              gameSpeed === v && !paused ? "primary" : "outline-secondary"
            }
            active={gameSpeed === v && !paused}
            onClick={() => setGameSpeed(v as GameSpeed)}
            onMouseEnter={() => setHoverKey(v as GameSpeed)}
            onMouseLeave={() => setHoverKey(null)}
            aria-pressed={gameSpeed === v && !paused}
            aria-label={
              v < 1 ? `1/${Math.round(1 / v)}x gameSpeed` : `${v}x gameSpeed`
            }
            // title={
            //   v < 1 ? `1/${Math.round(1 / v)}x gameSpeed` : `${v}x gameSpeed`
            // }
            style={{
              ...buttonStyle,
              color:
                (gameSpeed === v && !paused) || hoverKey === v
                  ? "white"
                  : "gray",
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
