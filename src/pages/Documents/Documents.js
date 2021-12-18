import React, { useState, useEffect } from 'react'
import face2 from '../../assets/images/face2.png'
import './Documents.css'
//import Geometry from '../../threeJS/Geometry/Geometry'
import TypeText from '../../utils/TypeText'

//const GeometryComponent = React.memo(() => <Geometry />)

function Documents() {
 const [isVisible, setVisible] = useState('hidden')

 useEffect(() => {
  const interval = setInterval(() => {
   if (isVisible === 'hidden') {
    setVisible('visible')
   } else {
    setVisible('hidden')
    clearInterval(interval)
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [isVisible])

 return (
  <div className='canvas container'>
   Hello Three.Js
   {/* <GeometryComponent /> */}
   <div className='animation-block'>
    <img src={face2} alt='' className='logo' />
    <div className='header-wrapper'>
     <h1 className='header-text'>
      <TypeText letters='Mrs. Jasson Harley' seconds={100} />
     </h1>
     <h1 className={isVisible}>|</h1>
    </div>

    <h3 className='main-text'>
     <TypeText
      letters='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus ut
     provident fugiat. Voluptate exercitationem harum quibusdam recusandae porro
     corrupti nihil saepe dolorum aperiam odit? Omnis nam animi sint praesentium
     numquam libero ipsam earum impedit consectetur nobis unde asperiores
     accusantium, vero!'
      seconds={5}
     />
    </h3>
   </div>
  </div>
 )
}

export default Documents
