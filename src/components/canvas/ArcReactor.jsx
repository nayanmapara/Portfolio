import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const ArcReactor = () => {
  const arc = useGLTF("./arc_reactor/scene.gltf");

  return (
    <primitive object={arc.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const ArcReactorCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >

      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={5} castShadow />
      <pointLight intensity={10} position={[0, 10, 0]} />

      <pointLight intensity={5} position={[0, 0, 0]} color="cyan" />

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ArcReactor />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ArcReactorCanvas;