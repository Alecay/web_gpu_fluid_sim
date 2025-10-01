import { CursorQuery } from "@/interfaces/CursorQuery";
import { Input } from "@/interfaces/Input";
import { Tabs, Tab } from "react-bootstrap";
import HeightDisplay from "./HeightDisplay";
import MapCoordDisplay from "./MapCoordDisplay";
import HotkeyModal from "./HotkeyModal";
import NoiseSettingsForm, { NoiseUISettings } from "../NoiseSettingsForm";
import ControlsUI from "./ControlsUI";
import TimeControlGroup, { Speed } from "./TimeControlsGroup";
import React, { useEffect, useState } from "react";
import { fps } from "../../interfaces/FPSMeter";

interface CanvasUIProps {
  settings: NoiseUISettings;
  setSettings: React.Dispatch<React.SetStateAction<NoiseUISettings>>;
  input: Input;
  setInput: (input: Input) => void;
  cursorQuery: CursorQuery;
  paused: boolean;
  setPaused: (value: React.SetStateAction<boolean>) => void;
  speed: Speed;
  setSpeed: (value: React.SetStateAction<Speed>) => void;
}

export default function CanvasUI({
  settings,
  setSettings,
  input,
  setInput,
  cursorQuery,
  paused,
  setPaused,
  speed,
  setSpeed,
}: CanvasUIProps) {
  const [fpsValue, setFpsValue] = useState(0);
  const [cpuMs, setCPUMs] = useState(0);

  // update this every 250ms or so
  useEffect(() => {
    const id = setInterval(() => {
      setFpsValue(fps.fps); // or fps.ema if you prefer the smoothed number
      setCPUMs(fps.cpuMs);
    }, 250);
    return () => clearInterval(id);
  }, []);

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
      <ControlsUI />
      <TimeControlGroup
        speed={speed}
        paused={paused}
        onChange={({ paused, speed }) => {
          setPaused(paused);
          setSpeed(speed);
          setInput({
            ...input,
            simulationSubSteps: paused ? 0 : Math.ceil(4 * speed),
          });
          console.log("Set simulation sub steps to: ", Math.ceil(4 * speed));
        }}
      />
      <div style={{ position: "absolute", top: "5px", left: "5px" }}>
        {`${fpsValue} (${cpuMs.toFixed(2)} ms)`}
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
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          style={{ color: "black" }}
        >
          <Tab
            eventKey="home"
            title="Home"
            style={{
              backgroundColor: "slategray",
              padding: "10px",
              color: "black",
              minHeight: "100px",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            Tab content for Home
          </Tab>
          <Tab eventKey="profile" title="Profile">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div> */}
      <HeightDisplay cursorQuery={cursorQuery} />
      {/* Opens on Escape by default; press Esc again to close (Modal's keyboard close) */}
      <HotkeyModal title="Debug Menu" size="xl">
        <NoiseSettingsForm
          initial={settings}
          onChange={setSettings}
          onApply={(s) => {
            setSettings(s);
            console.log("Apply clicked:", s);
          }}
        />
      </HotkeyModal>
    </div>
  );
}
