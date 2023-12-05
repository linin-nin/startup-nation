import "./styles.css";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

interface Marker {
  location: [number, number];
  size: number;
}

export default function App(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let globe: any = null; // You can use 'any' if the type is not known

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ] as Marker[],
        onRender: (state: any) => {
          // 'state' type is unknown, so using 'any'
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      if (globe) {
        globe.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <h1>COBE</h1>
      <p>
        A lightweight (5kB) WebGL globe lib:{" "}
        <a
          href="https://github.com/shuding/cobe"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      />
    </div>
  );
}
