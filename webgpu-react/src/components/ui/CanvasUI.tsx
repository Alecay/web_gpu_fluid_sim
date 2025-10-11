import { CursorQuery } from "@/interfaces/CursorQuery";
import { Input } from "@/interfaces/Input";
import { Tabs, Tab, Card, ProgressBar } from "react-bootstrap";
import HeightDisplay from "./HeightDisplay";
import MapCoordDisplay from "./MapCoordDisplay";
import HotkeyModal from "./HotkeyModal";
import NoiseSettingsForm, { NoiseUISettings } from "../NoiseSettingsForm";
import ControlsUI, { ControlKey } from "./ControlsUI";
import GameSpeedControlsUI, { GameSpeed } from "./GameSpeedControlsUI";
import React, { useEffect, useRef, useState } from "react";
import { fps } from "../../interfaces/FPSMeter";
import DebugStatsUI from "./DebugStatsUI";
import HotbarUI from "./HotbarUI";
import BuildMenuPanel from "./BuildMenuPanel";
import CustomCursor, { CursorKind } from "./CustomCursor";

interface CanvasUIProps {
  containerRef: React.RefObject<HTMLElement | null>;
  settings: NoiseUISettings;
  setSettings: React.Dispatch<React.SetStateAction<NoiseUISettings>>;
  input: Input;
  setInput: (input: Input) => void;
  cursorQuery: CursorQuery;
  paused: boolean;
  setPaused: (value: React.SetStateAction<boolean>) => void;
  gameSpeed: GameSpeed;
  setGameSpeed: (value: React.SetStateAction<GameSpeed>) => void;
  simIndex: number;
  showControlsUI: boolean;
  showDebugUI: boolean;
  cursorVisible: boolean;
  cursorMode: CursorKind;
  setCursorMode: (value: React.SetStateAction<CursorKind>) => void;
  setCursorOverUI: (value: React.SetStateAction<boolean>) => void;
  loadingState: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    loadingProgress: number;
    setLoadingProgress: React.Dispatch<React.SetStateAction<number>>;
  };
}

export default function CanvasUI({
  containerRef,
  settings,
  setSettings,
  input,
  setInput,
  cursorQuery,
  paused,
  setPaused,
  gameSpeed,
  setGameSpeed,
  simIndex,
  showControlsUI,
  showDebugUI,
  cursorVisible,
  cursorMode,
  setCursorMode,
  setCursorOverUI,
  loadingState,
}: CanvasUIProps) {
  const cursorImages = {
    default: {
      src: "./cursors/pointer.png",
      width: 24,
      height: 24,
      hotspotX: 2,
      hotspotY: 2,
    },
    link: {
      src: "./cursors/link.png",
      width: 24,
      height: 24,
      hotspotX: 2,
      hotspotY: 2,
    },
    grab: {
      src: "./cursors/grab_hover.png",
      width: 24,
      height: 24,
      hotspotX: 12,
      hotspotY: 12,
    },
    grabbing: {
      src: "./cursors/grab.png",
      width: 24,
      height: 24,
      hotspotX: 12,
      hotspotY: 12,
    },
  } as const;

  useEffect(() => {
    if (loadingState.loading) {
      setCursorOverUI(true);
      setCursorMode("default");
      console.log("hover");
    } else {
      setCursorOverUI(false);
      setCursorMode("default");
    }
  }, [loadingState.loading]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        left: 0,
        top: 0,
        color: "white",
        fontSize: "20px",
        // fontFamily: '"Pixelify Sans", sans-serif',
        // fontFamily: '"Jersey 10", sans-serif',
        pointerEvents: "none",
        fontFamily: '"Tiny 5", sans-serif',
        fontWeight: 400,
      }}
    >
      <div id="output" />

      {loadingState.loading && (
        <>
          <div
            style={{
              position: "absolute", // relative to parent (like #canvasHolder)
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "black",
              zIndex: 9000,
              opacity: 1,
              transition: "opacity 0.4s ease-out",
            }}
          />
          <div
            className="position-fixed top-50 start-50 translate-middle text-center"
            style={{
              zIndex: 9001,
              width: "clamp(220px, 60vw, 520px)",
              pointerEvents: "none",
              fontFamily: '"Tiny 5", sans-serif',
              fontWeight: 400,
            }}
          >
            <div
              className="text-white mb-2 fw-medium"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,.6)" }}
            >
              Loading… {Math.ceil(loadingState.loadingProgress)}%
            </div>

            <ProgressBar
              now={loadingState.loadingProgress}
              animated
              // remove Bootstrap's rounded corners
              style={{
                height: "1rem",
                borderRadius: 0,
                backgroundColor: "#2a2a2a", // background (the empty track)
              }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${loadingState.loadingProgress}%`,
                  backgroundColor: "#ffffffff", // filled color
                  borderRadius: 0,
                  transition: "width 0.3s ease-out",
                }}
              />
            </ProgressBar>
          </div>
        </>
      )}

      {showControlsUI && <ControlsUI />}

      <div
        style={{
          position: "absolute",
          top: "5px",
          left: "5px",
        }}
      >
        <DebugStatsUI
          cursorQuery={cursorQuery}
          gameSpeed={gameSpeed}
          simIndex={simIndex}
          mode={showDebugUI ? "full" : "simple"}
        />
      </div>

      <BuildMenuPanel
        setCursorOverUI={setCursorOverUI}
        setCursorMode={setCursorMode}
      >
        <MapCoordDisplay input={input} />
        <GameSpeedControlsUI
          gameSpeed={gameSpeed}
          paused={paused}
          onChange={({ paused, gameSpeed }) => {
            setPaused(paused);
            setGameSpeed(gameSpeed);
            setInput({
              ...input,
              simulationSubSteps: paused ? 0 : gameSpeed,
            });
          }}
          setCursorOverUI={setCursorOverUI}
          setCursorMode={setCursorMode}
        />
        <HeightDisplay cursorQuery={cursorQuery} />
      </BuildMenuPanel>
      {/* Opens on Escape by default; press Esc again to close (Modal's keyboard close) */}
      {/* <HotkeyModal title="Debug Menu" size="xl">
        <NoiseSettingsForm
          initial={settings}
          onChange={setSettings}
          onApply={(s) => {
            setSettings(s);
            console.log("Apply clicked:", s);
          }}
        />
      </HotkeyModal> */}

      {/* custom cursor overlays inside container */}
      <CustomCursor
        mode={cursorMode}
        images={cursorImages}
        containerRef={containerRef} // or omit to cover the whole window
        pixelated // great for your pixel-art aesthetic
        zIndex={999999}
        visible={cursorVisible}
      />
    </div>
  );
}
