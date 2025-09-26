import FastNoiseLite from "fastnoise-lite";

export function generateNoiseMap(
  seed = 42,
  width = 1920,
  height = 1080,
  noiseType = FastNoiseLite.NoiseType.Perlin,
  octaves = 6,
  lacunarity = 1.7,
  gain = 0.5,
  fractalType = FastNoiseLite.FractalType.FBm,
  frequency = 0.003
) {
  const noise = new FastNoiseLite();

  // Set noise type, seed, etc.
  noise.SetNoiseType(noiseType);
  noise.SetSeed(seed);
  noise.SetFractalOctaves(octaves);
  noise.SetFractalLacunarity(lacunarity);
  noise.SetFractalGain(gain);
  noise.SetFractalType(fractalType);
  noise.SetFrequency(frequency);

  const out = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const value = noise.GetNoise(x, y); // 2D noise
      const normalizedValue = (value + 1.0) / 2.0;
      out.push(normalizedValue);
    }
  }

  // calcualte the min and max values
  var min = 0,
    max = 0;
  for (let i = 0; i < out.length; i++) {
    if (out[i] < min || i == 0) min = out[i];
    if (out[i] > max || i == 0) max = out[i];
  }

  // normalize the values into this range
  for (let i = 0; i < out.length; i++) {
    out[i] = (out[i] - min) / (max - min);
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
