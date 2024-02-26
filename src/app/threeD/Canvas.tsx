"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const CanvasWrapper = () => {
  return (
    <div className="canvas-3d-wrapper">
      <Canvas
        className="canvas-3d"
        shadows
        gl={{
          alpha: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 1],
        }}
        // style={{ pointerEvents: "none" }}
      >
        <Experience />
      </Canvas>
    </div>
  );
};

export default CanvasWrapper;
