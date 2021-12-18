import React, { useState, useEffect } from 'react'
import face2 from '../../assets/images/face2.png'
import './Documents.css'
//import Geometry from '../../threeJS/Geometry/Geometry'
import TypeText from '../../utils/TypeText'

//const GeometryComponent = React.memo(() => <Geometry />)

function Documents() {
 const [pointer, setPointer] = useState('')

 useEffect(() => {
  const interval = setInterval(() => {
   if (pointer === '') {
    setPointer('|')
   } else {
    setPointer('')
    clearInterval(interval)
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [pointer])

 return (
  <div className='canvas container'>
   Hello Three.Js
   {/* <GeometryComponent /> */}
   <div className='animation-block'>
    <img src={face2} alt='' className='logo' />
    <div className='header-wrapper'>
     <TypeText letters='Mrs. Jasson Harley' />
     <h1>{`${pointer}`}</h1>
    </div>

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
