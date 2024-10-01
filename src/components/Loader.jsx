import { Html, useProgress } from '@react-three/drei'
import { hourglass } from 'ldrs'


const Loader = () => {
  const { progress } = useProgress()
  hourglass.register()

  return (
    <Html>
      {/* Loader style */}
      <span className="canvas-load"></span>

      {/* Loader */}
      <l-hourglass
        size="50"
        stroke="5"
        stroke-length="0.15"
        bg-opacity="0.1"
        speed="1.4" 
        color="white" 
      ></l-hourglass>
      
      {/* Progress */}
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40
        }}
      >{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader