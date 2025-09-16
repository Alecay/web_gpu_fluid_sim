import FastNoiseLite from "fastnoise-lite";

export function generateNoiseMap(width, height) {
  const noise = new FastNoiseLite();

  // Set noise type, seed, etc.
  noise.SetNoiseType(FastNoiseLite.NoiseType.Perlin);
  noise.SetSeed(42);
  noise.SetFractalOctaves(5);
  noise.SetFractalGain(0.5);
  noise.SetFrequency(0.005);

  const out = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const value = noise.GetNoise(x, y); // 2D noise
      const normalizedValue = (value + 1.0) / 2.0;
      out.push(normalizedValue);
    }
  }
  return out;
}

// // In React component
// function NoiseCanvas() {
//   const canvasRef = React.useRef(null);

//   React.useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     const width = canvas.width;
//     const height = canvas.height;
//     const noiseData = generateNoiseMap(width, height, { /* ... */ });

//     const imageData = ctx.createImageData(width, height);
//     for (let y = 0; y < height; y++) {
//       for (let x = 0; x < width; x++) {
//         const v = noiseData[y][x]; // likely between -1 and +1
//         const c = Math.floor((v + 1) * 0.5 * 255);
//         const idx = (y * width + x) * 4;
//         imageData.data[idx] = c;
//         imageData.data[idx+1] = c;
//         imageData.data[idx+2] = c;
//         imageData.data[idx+3] = 255;
//       }
//     }
//     ctx.putImageData(imageData, 0, 0);
//   }, []);

//   return <canvas ref={canvasRef} width={300} height={300} />;
// }
