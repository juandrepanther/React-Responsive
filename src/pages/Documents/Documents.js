import React, { useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

import texture1 from '../../assets/textures/texture1.jpg'
import face2 from '../../assets/images/face2.png'
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
    <cylinderGeometry args={[3, 1, 5, 67]} />
    <meshStandardMaterial map={texture} />
   </mesh>
  )
 }
 return (
  <div className='canvas container'>
   Hello Three.Js
   {/* <Canvas>
    <OrbitControls />
    <ambientLight intensity={2} />
    <pointLight position={[10, -20, 10]} />
    <directionalLight color='red' position={[1, 7, 55]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.8, 2, 0]} />
   </Canvas> */}
   <div className='animation-block'>
    <img src={face2} alt='' className='logo' />
    <h1 className='header-text'>HELLO I AM HEADER</h1>
    <h3 className='main-text'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus ut
     provident fugiat. Voluptate exercitationem harum quibusdam recusandae porro
     corrupti nihil saepe dolorum aperiam odit? Omnis nam animi sint praesentium
     numquam libero ipsam earum impedit consectetur nobis unde asperiores
     accusantium, vero delectus illum est error! Animi, in, iste, a commodi
     itaque atque minus blanditiis fugit quos necessitatibus praesentium nihil
     sint totam similique quasi tenetur. Officiis quos harum sit sed
     repellendus!
    </h3>
   </div>
  </div>
 )
}

export default Documents
