import React from "react";
import { useEffect, useMemo, useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

/** String unions to represent FNL enums cleanly in TS */
export type NoiseType =
  | "OpenSimplex2"
  | "OpenSimplex2S"
  | "Cellular"
  | "Perlin"
  | "ValueCubic"
  | "Value";
export type FractalType =
  | "None"
  | "FBm"
  | "Ridged"
  | "PingPong"
  | "DomainWarpProgressive"
  | "DomainWarpIndependent";

/** All settings together for convenience */
export interface NoiseUISettings {
  noiseType: NoiseType;
  seed: number;
  fractalOctaves: number;
  fractalLacunarity: number;
  fractalGain: number;
  fractalType: FractalType;
  frequency: number;

  pixelScale: number;
  width: number;
  height: number;
  maxCellValue: number; // e.g., 100
  terrainHeightMultiplier: number; // 0..1 typical
  colorSteps: number;
  numberOfTerrainColors: number;

  colors: string[]; // hex color strings like "#ff00aa"
}

/** Reasonable defaults */
export const defaultNoiseUISettings: NoiseUISettings = {
  noiseType: "OpenSimplex2S",
  seed: 42,
  fractalOctaves: 6,
  fractalLacunarity: 1.7,
  fractalGain: 0.5,
  fractalType: "FBm",
  frequency: 0.003,

  pixelScale: 4,
  // width: 1920, // 960,
  // height: 1080, // 540,
  width: 960,
  height: 540,
  // width: 1000,
  // height: 1000,
  maxCellValue: 100.0,
  terrainHeightMultiplier: 0.85,
  colorSteps: 20,
  numberOfTerrainColors: 7,

  colors: [
    "#4D4949",
    "#827C74",
    "#BE935A",
    "#AD6E1B",
    "#3D6841",
    "#1B461F",
    "#FFFFFF",
  ],
};

interface Props {
  initial?: Partial<NoiseUISettings>;
  /** Fires on *any* change with the full settings object */
  onChange?: (settings: NoiseUISettings) => void;
  /** Click “Apply” — handy if you want to recompute or re-render */
  onApply?: (settings: NoiseUISettings) => void;
  /** Show a compact heading? */
  title?: string;
}

export default React.memo(NoiseSettingsForm, (prev, next) => {
  return prev.initial === next.initial && prev.title === next.title; // intentionally ignore `input`
});

function NoiseSettingsForm({
  initial,
  onChange,
  onApply,
  title = "Noise & Render Settings",
}: Props) {
  const mergedInitial = useMemo<NoiseUISettings>(() => {
    return { ...defaultNoiseUISettings, ...initial };
  }, [initial]);

  const [settings, setSettings] = useState<NoiseUISettings>(mergedInitial);

  // Keep colors array length in sync with numberOfTerrainColors
  useEffect(() => {
    setSettings((prev) => {
      const n = Math.max(1, Math.min(32, prev.numberOfTerrainColors)); // clamp 1..32
      let colors = prev.colors.slice(0, n);
      if (colors.length < n) {
        const toAdd = n - colors.length;
        const last = colors[colors.length - 1] ?? "#888888";
        colors = colors.concat(Array.from({ length: toAdd }, () => last));
      }
      return { ...prev, numberOfTerrainColors: n, colors };
    });
  }, [settings.numberOfTerrainColors]); // NOTE: intentionally depends on settings.numberOfTerrainColors

  // Handy setter helper
  const set = <K extends keyof NoiseUISettings>(
    key: K,
    value: NoiseUISettings[K]
  ) => setSettings((prev) => ({ ...prev, [key]: value }));

  const noiseTypeOptions: NoiseType[] = [
    "Perlin",
    "OpenSimplex2",
    "OpenSimplex2S",
    "Cellular",
    "ValueCubic",
    "Value",
  ];
  const fractalTypeOptions: FractalType[] = [
    "FBm",
    "Ridged",
    "PingPong",
    "None",
    "DomainWarpProgressive",
    "DomainWarpIndependent",
  ];

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-3">{title}</Card.Title>

        {/* Noise section */}
        <h6 className="text-muted mb-2">Canvas</h6>
        <Row className="g-3">
          <Col md={6} lg={4}>
            <Form.Group controlId="width">
              <Form.Label>Width</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={settings.width}
                onChange={(e) =>
                  set(
                    "width",
                    Math.max(1, parseInt(e.currentTarget.value || "1", 10))
                  )
                }
              />
              <Form.Text muted>Width in pixels of the map.</Form.Text>
            </Form.Group>
          </Col>
          <Col md={6} lg={4}>
            <Form.Group controlId="height">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={settings.height}
                onChange={(e) =>
                  set(
                    "height",
                    Math.max(1, parseInt(e.currentTarget.value || "1", 10))
                  )
                }
              />
              <Form.Text muted>Height in pixels of the map.</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <hr className="my-4" />

        <h6 className="text-muted mb-2">Noise</h6>
        <Row className="g-3">
          <Col md={6} lg={4}>
            <Form.Group controlId="noiseType">
              <Form.Label>Noise Type</Form.Label>
              <Form.Select
                value={settings.noiseType}
                onChange={(e) =>
                  set("noiseType", e.currentTarget.value as NoiseType)
                }
              >
                {noiseTypeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="seed">
              <Form.Label>Seed</Form.Label>
              <Form.Control
                type="number"
                value={settings.seed}
                onChange={(e) =>
                  set("seed", parseInt(e.currentTarget.value || "0", 10))
                }
              />
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="octaves">
              <Form.Label>Fractal Octaves</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={16}
                value={settings.fractalOctaves}
                onChange={(e) =>
                  set(
                    "fractalOctaves",
                    Math.max(
                      1,
                      Math.min(16, parseInt(e.currentTarget.value || "1", 10))
                    )
                  )
                }
              />
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="lacunarity">
              <Form.Label>Fractal Lacunarity</Form.Label>
              <InputGroup>
                <Form.Control
                  type="number"
                  step="0.1"
                  value={settings.fractalLacunarity}
                  onChange={(e) =>
                    set(
                      "fractalLacunarity",
                      parseFloat(e.currentTarget.value || "0")
                    )
                  }
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="gain">
              <Form.Label>Fractal Gain</Form.Label>
              <Form.Control
                type="number"
                step="0.05"
                value={settings.fractalGain}
                onChange={(e) =>
                  set("fractalGain", parseFloat(e.currentTarget.value || "0"))
                }
              />
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="fractalType">
              <Form.Label>Fractal Type</Form.Label>
              <Form.Select
                value={settings.fractalType}
                onChange={(e) =>
                  set("fractalType", e.currentTarget.value as FractalType)
                }
              >
                {fractalTypeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="frequency">
              <Form.Label>Frequency</Form.Label>
              <Form.Control
                type="number"
                step="0.0005"
                value={settings.frequency}
                onChange={(e) =>
                  set("frequency", parseFloat(e.currentTarget.value || "0"))
                }
              />
              <Form.Text muted>Typical small value (e.g. 0.003)</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <hr className="my-4" />

        {/* Render / terrain section */}
        <h6 className="text-muted mb-2">Render / Terrain</h6>
        <Row className="g-3">
          <Col md={6} lg={4}>
            <Form.Group controlId="maxCellValue">
              <Form.Label>Max Terrain Height</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                value={settings.maxCellValue}
                onChange={(e) =>
                  set("maxCellValue", parseFloat(e.currentTarget.value || "0"))
                }
              />
            </Form.Group>
            <Form.Text muted>
              The maximum terrain height of any cell in the map.
            </Form.Text>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="thm">
              <Form.Label>Terrain Height Multiplier</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={settings.terrainHeightMultiplier}
                onChange={(e) =>
                  set(
                    "terrainHeightMultiplier",
                    parseFloat(e.currentTarget.value || "0")
                  )
                }
              />
            </Form.Group>
            <Form.Text muted>
              A multiplier used to scale the overall terrain height.
            </Form.Text>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="colorSteps">
              <Form.Label>Terrain Steps</Form.Label>
              <Form.Control
                type="number"
                min={1}
                value={settings.colorSteps}
                onChange={(e) =>
                  set(
                    "colorSteps",
                    Math.max(1, parseInt(e.currentTarget.value || "1", 10))
                  )
                }
              />
            </Form.Group>
            <Form.Text muted>
              How many steps or terraces should the terrain have.
            </Form.Text>
          </Col>

          <Col md={6} lg={4}>
            <Form.Group controlId="numColors">
              <Form.Label>Number of Terrain Colors</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={32}
                value={settings.numberOfTerrainColors}
                onChange={(e) =>
                  set(
                    "numberOfTerrainColors",
                    Math.max(
                      1,
                      Math.min(32, parseInt(e.currentTarget.value || "1", 10))
                    )
                  )
                }
              />
              <Form.Text muted>
                Gradient editor below will match this count.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        {/* Colors */}
        <div className="mt-4">
          <h6 className="text-muted mb-2">Terrain Gradient</h6>
          <Row className="g-3">
            {settings.colors.map((c, i) => (
              <Col key={i} xs={3} sm={2} md={1} lg={1}>
                <Form.Group controlId={`color-${i}`}>
                  {/* <Form.Label>Color {i + 1}</Form.Label> */}
                  <Form.Control
                    type="color"
                    value={c}
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    onChange={(e) => {
                      const hex = e.currentTarget.value;
                      set(
                        "colors",
                        settings.colors.map((cc, idx) => (idx === i ? hex : cc))
                      );
                    }}
                    title={`Pick color ${i + 1}`}
                  />
                </Form.Group>
              </Col>
            ))}
          </Row>
        </div>

        <div className="d-flex gap-2 mt-4">
          <Button variant="primary" onClick={() => onApply?.(settings)}>
            Apply
          </Button>
          <Button
            variant="outline-secondary"
            onClick={() => setSettings(mergedInitial)}
          >
            Reset to Defaults
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
