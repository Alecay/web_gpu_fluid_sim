import WebGPUCanvas from "./components/WebGPUCanvas.jsx";

export default function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      {/* Canvas fills width; drawing buffer is set inside init */}
      <WebGPUCanvas style={{ width: "100%", display: "block" }} />
      <div id="output" />
    </div>
  );
}
