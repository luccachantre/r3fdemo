import { Canvas } from '@react-three/fiber'
import { PointerLockControls } from '@react-three/drei'
import { Physics } from '@react-three/cannon'


import Box from './components/Box'
import TrackingBox from './components/TrackingBox'
import D3Text from './components/3DText'
import CameraBox from './components/CameraBox'
import CurveCamera from './components/curveCamera'
import Scene from './components/Scene'
import HitBox from './components/HitBox'
import Floor from './components/Floor'
import BaseBox from './components/BaseBox'

function App() {

  return (
    <Canvas id='theCanvas' shadows camera={{fov: 50}}>
      <Physics gravity={[0, -9.8, 0]}>
        <Floor position={[0, 0, 0]} rotation={[0, 0, 0]}/>
        <BaseBox position={[0, 0, 0]} rotation={[0, 0, 0]}/>
      </Physics>
      
      <D3Text />
      <PointerLockControls/>
    </Canvas>
  )
}

export default App
