import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Workshop = () => {
  const { scene } = useGLTF("./vendels_workshop/scene.gltf");
  const ref = useRef();

  // Rotate the model on its local Y axis
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Adjust rotation speed as needed
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={5}
      position-y={-1}
      rotation-y={9}
      position-x={6}
    />
  );
};

const WorkshopCanvas = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 15],
      }}
    >
      <directionalLight position={[-55, -55, 55]} intensity={0.25} castShadow />
      <pointLight intensity={5} position={[5, 0, 0]} color="cyan" />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Workshop />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default WorkshopCanvas;
