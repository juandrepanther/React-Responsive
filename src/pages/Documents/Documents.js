import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import texture1 from '../../assets/textures/texture1.jpg'
import './Documents.css'

function Documents() {
 const texture = useLoader(TextureLoader, texture1)
 function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
   !active
    ? (mesh.current.rotation.x += 0.01)
    : (mesh.current.rotation.x -= 0.01)
  )
  // Return view, these are regular three.js elements expressed in JSX
  return (
   <mesh
    {...props}
    ref={mesh}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial map={texture} />
    <sphereGeometry args={[1, 33]} />
   </mesh>
  )
 }
 return (
  <div className='canvas container'>
   Hello Three.Js
   <Canvas>
    <OrbitControls />
    <ambientLight />
    <pointLight position={[10, -20, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.8, 2, -0]} />
   </Canvas>
  </div>
 )
}

export default Documents
