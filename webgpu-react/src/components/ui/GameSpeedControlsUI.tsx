// TimeControlGroup.tsx
import React, { useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { PauseFill, PlayFill } from "react-bootstrap-icons";

export type GameSpeed = 0.25 | 0.5 | 1 | 2 | 3 | 4 | 8;
const timeOptions = [0.25, 0.5, 1, 2, 3, 4, 8];

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
  className?: string;
  size?: "sm" | "lg";
};

export default function GameSpeedControlsUI({
  gameSpeed,
  paused,
  onChange,
  className,
  size,
}: Props) {
  const setGameSpeed = (v: GameSpeed) =>
    onChange({ paused: false, gameSpeed: v });
  const togglePause = () => onChange({ paused: !paused, gameSpeed });

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

  // useEffect(() => {
  //   const onKeyDown = (e: KeyboardEvent) => {
  //     const setNextSpeed = () => {
  //       setGameSpeed(nextSpeed(gameSpeed, false));
  //       e.preventDefault();
  //     };

  //     const setPreviousSpeed = () => {
  //       setGameSpeed(previousSpeed(gameSpeed, false));
  //       e.preventDefault();
  //     };

  //     if (e.code == "Space") {
  //       // Toggle Pause
  //       togglePause();
  //       e.preventDefault();
  //     } else if (e.code == "Tab") {
  //       if (paused) {
  //         // Toggle Pause
  //         togglePause();
  //         e.preventDefault();
  //       } else if (e.shiftKey) {
  //         setPreviousSpeed();
  //       } else {
  //         setNextSpeed();
  //       }
  //     }
  //   };

  //   window.addEventListener("keydown", onKeyDown);
  //   return () => {
  //     window.removeEventListener("keydown", onKeyDown);
  //   };
  // }, [gameSpeed, togglePause, setGameSpeed]);

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
            variant={
              gameSpeed === v && !paused ? "primary" : "outline-secondary"
            }
            active={gameSpeed === v && !paused}
            onClick={() => setGameSpeed(v as GameSpeed)}
            aria-pressed={gameSpeed === v && !paused}
            aria-label={
              v < 1 ? `1/${Math.round(1 / v)}x gameSpeed` : `${v}x gameSpeed`
            }
            title={
              v < 1 ? `1/${Math.round(1 / v)}x gameSpeed` : `${v}x gameSpeed`
            }
            style={{
              ...buttonStyle,
              color: gameSpeed === v && !paused ? "white" : "darkgray",
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
