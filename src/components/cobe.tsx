'use client'
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';


const Earth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [1, 0.5, 1], // Customize marker color here
      glowColor: [0.9, 0.9, 0.9],
      opacity:0.5,
      offset: [0,0],
      markers: [
        // longitude latitude
      ],
      onRender: (state: Record<string, any>) => {
        state.phi = phi;
        phi += 0.005;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center z-[1]">
      <canvas
        className='w-[600px] h-[600px] max-w-full'
        ref={canvasRef}
      />
    </div>
  );
};

export default Earth
