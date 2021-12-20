import React from 'react'
import face2 from '../../assets/images/face2.png'
import './Documents.css'
//import Geometry from '../../threeJS/Geometry/Geometry'
import TypeText from '../../components/TypeText'
import Button from '../../components/Button/Button'
import useFetch from '../../hooks/useFetch'
import ShowHideText from '../../components/ShowHideText'

//MEMOIZATION OF COMPONENTS & FUNCTIONS
//const GeometryComponent = React.memo(() => <Geometry />)
const ButtonComponent = React.memo(() => <Button>Click Me</Button>)
const ShowHideFunction = React.memo(() => ShowHideText('|', 'h1'))

function Documents() {
 const url = 'https://api.imgflip.com/get_memes'
 const [data] = useFetch(url)
 console.log(data)

 return (
  <div className='canvas container'>
   {/* <GeometryComponent /> */}
   <div className='animation-block'>
    <img src={face2} alt='' className='logo' />
    <div className='header-wrapper'>
     <h1 className='header-text'>
      <TypeText letters='Mrs. Jasson Harley' seconds={100} />
     </h1>
     <ShowHideFunction />
    </div>

    <h3 className='main-text'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque delectus ut
     provident fugiat. Voluptate exercitationem harum quibusdam recusandae porro
     corrupti nihil saepe dolorum aperiam odit? Omnis nam animi sint praesentium
     numquam libero ipsam earum impedit consectetur nobis unde asperiores
     accusantium, vero!
    </h3>
    <ButtonComponent />
   </div>
  </div>
 )
}

export default Documents
