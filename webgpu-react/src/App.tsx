import { Col, Container, Row } from "react-bootstrap";
import WebGPUCanvas from "./components/WebGPUCanvas";
import NoiseSettingsForm, {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "./components/NoiseSettingsForm";
import { useState } from "react";

export default function App() {
  const [settings, setSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  const [appliedSettings, setAppliedSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  return (
    <Container>
      <Row>
        <Col>
          <h1>Web GPU Terrain</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col style={{ margin: "30px" }}>
          {/* Canvas fills width; drawing buffer is set inside init */}
          <WebGPUCanvas
            style={{
              width: "100%",
              display: "block",
              maxHeight: "80vh",
              maxWidth: "100vw",
            }}
            noiseSettings={settings}
          />
          <div id="output" />
        </Col>
      </Row>
      <Row>
        <Col>
          <NoiseSettingsForm
            initial={settings}
            onChange={setSettings}
            onApply={(s) => {
              setAppliedSettings(s);
              console.log("Apply clicked:", s);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
