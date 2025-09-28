import { CursorQuery } from "@/interfaces/CursorQuery";
import { Input } from "@/interfaces/Input";
import { Tabs, Tab } from "react-bootstrap";
import HeightDisplay from "./HeightDisplay";
import MapCoordDisplay from "./MapCoordDisplay";
import HotkeyModal from "./HotkeyModal";
import NoiseSettingsForm, { NoiseUISettings } from "../NoiseSettingsForm";

interface CanvasUIProps {
  settings: NoiseUISettings;
  setSettings: React.Dispatch<React.SetStateAction<NoiseUISettings>>;
  input: Input;
  cursorQuery: CursorQuery;
}

export default function CanvasUI({
  settings,
  setSettings,
  input,
  cursorQuery,
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
        fontFamily: '"Tiny 5", sans-serif',
        fontWeight: 400,
      }}
    >
      <div id="output" />
      <MapCoordDisplay input={input} />
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
