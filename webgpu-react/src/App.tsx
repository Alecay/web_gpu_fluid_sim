import { Card, Col, Container, Row } from "react-bootstrap";
import WebGPUCanvas from "./components/WebGPUCanvas";
import NoiseSettingsForm, {
  NoiseUISettings,
  defaultNoiseUISettings,
} from "./components/NoiseSettingsForm";
import React, { useRef, useState } from "react";
import { DefaultInput, Input } from "./interfaces/Input";
import { CursorQuery, DefaultCursorQuery } from "./interfaces/CursorQuery";
import TerrainQuery from "./components/TerrainQuery";

export default function App() {
  const [settings, setSettings] = useState<NoiseUISettings>(
    defaultNoiseUISettings
  );

  const [input, setInput] = useState<Input>(DefaultInput);
  const [cursorQuery, setCursorQuery] =
    useState<CursorQuery>(DefaultCursorQuery);

  // const webCanvas = React.memo(() => {
  //   return (
  //     <WebGPUCanvas
  //       style={{
  //         width: "100%",
  //         display: "block",
  //         maxHeight: "80vh",
  //         maxWidth: "100vw",
  //       }}
  //       noiseSettings={settings}
  //       input={input}
  //       setInput={setInput}
  //     />
  //   );
  // }, [settings]);

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
            input={input}
            setInput={setInput}
            setCursorQuery={setCursorQuery}
          >
            <TerrainQuery input={input} cursorQuery={cursorQuery} />
          </WebGPUCanvas>
          <div id="output" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Debug</Card.Title>
              <h6 className="text-muted mb-2">Input</h6>
              <Row className="g-3">
                <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Mouse Position: (${input.mousePosition.x}, ${input.mousePosition.y})`}
                  </h6>
                </Col>
                <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Mouse Radius: ${Math.floor(input.mouseRadius)}`}
                  </h6>
                </Col>
                <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Mouse Held: (${input.mouse0Held}, ${input.mouse1Held}, ${input.mouse2Held})`}
                  </h6>
                </Col>
                {/* <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Terrain Height : ${Math.ceil(cursorQuery.height)}`}
                  </h6>
                </Col>
                <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Fluid Amount : ${Math.ceil(cursorQuery.fAmount)}`}
                  </h6>
                </Col>
                <Col md={6} lg={4}>
                  <h6 className="mb-2">
                    {`Combined Amount : ${Math.ceil(
                      cursorQuery.fAmount + cursorQuery.height
                    )}`}
                  </h6>
                </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <NoiseSettingsForm
            initial={settings}
            onChange={setSettings}
            onApply={(s) => {
              setSettings(s);
              console.log("Apply clicked:", s);
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
