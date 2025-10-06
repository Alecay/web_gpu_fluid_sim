import { CursorQuery } from "@/interfaces/CursorQuery";
import { Input } from "@/interfaces/Input";
import { Tabs, Tab, Card } from "react-bootstrap";
import HeightDisplay from "./HeightDisplay";
import MapCoordDisplay from "./MapCoordDisplay";
import HotkeyModal from "./HotkeyModal";
import NoiseSettingsForm, { NoiseUISettings } from "../NoiseSettingsForm";
import ControlsUI, { ControlKey } from "./ControlsUI";
import GameSpeedControlsUI, { GameSpeed } from "./GameSpeedControlsUI";
import React, { useEffect, useState } from "react";
import { fps } from "../../interfaces/FPSMeter";
import DebugStatsUI from "./DebugStatsUI";
import HotbarUI from "./HotbarUI";
import BuildMenuPanel from "./BuildMenuPanel";

interface CanvasUIProps {
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
}

export default function CanvasUI({
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
}: CanvasUIProps) {
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
      <MapCoordDisplay input={input} />
      {showControlsUI && <ControlsUI />}
      <GameSpeedControlsUI
        gameSpeed={gameSpeed}
        paused={paused}
        onChange={({ paused, gameSpeed }) => {
          setPaused(paused);
          setGameSpeed(gameSpeed);
          setInput({
            ...input,
            simulationSubSteps: paused ? 0 : Math.ceil(4 * gameSpeed),
          });
        }}
      />
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

      {/* <div
        style={{
          position: "absolute",
          bottom: "1px",
          left: "50%",
          transform: "translate(-50%, 0%)",
          pointerEvents: "all",
        }}
      >
        <HotbarUI />
      </div> */}
      <HeightDisplay cursorQuery={cursorQuery} />
      <BuildMenuPanel />
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
    </div>
  );
}
