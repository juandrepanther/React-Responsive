import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture1 from '../../assets/textures/texture1.jpg'

function Geometry() {
 const texture = useLoader(TextureLoader, texture1)

 function Box(props) {
  const mesh = useRef()

  const [active, setActive] = useState(false)
  useFrame((state, delta) =>
   !active
    ? (mesh.current.rotation.x += 0.01)
    : (mesh.current.rotation.x -= 0.01)
  )
  return (
   <mesh
    {...props}
    ref={mesh}
    scale={active ? 1.5 : 1}
    onClick={(event) => setActive(!active)}>
    <cylinderGeometry args={[3, 1, 5, 67]} />
    <meshStandardMaterial map={texture} />
   </mesh>
  )
 }
 return (
  <>
   <Canvas>
    <OrbitControls />
    <ambientLight intensity={2} />
    <pointLight position={[10, -20, 10]} />
    <directionalLight color='red' position={[1, 7, 55]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.8, 2, 0]} />
   </Canvas>
  </>
 )
}

export default Geometry
