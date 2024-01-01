import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { useWindowScroll } from 'react-use';

import CanvasLoader from '../Loader';

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  // Get the scroll position using the hook
  const { y } = useWindowScroll();

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >

      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        // autoRotate 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        {/* Pass the scroll position as a prop to the Computers component */}
        <Computers isMobile={isMobile} scrollY={y}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

// In the Computers component, use the scroll position to rotate the primitive object
const Computers = ({ isMobile, scrollY }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  // Define a variable to control the rotation speed and direction
  // You can adjust this value as you like
  const rotationFactor = 0.01;

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        />
      {/* Use the scroll position to rotate the primitive object around the y-axis */}
      <primitive object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3, -1.5]}
        rotation={[-0.01, -0.2 + scrollY * rotationFactor, -0.1]}
      />
    </mesh>
  )
}

export default ComputersCanvas;