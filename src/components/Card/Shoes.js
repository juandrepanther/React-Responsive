import React from 'react'
import './Shoes.css'

function Shoes(props) {
 const { image } = props

 return (
  <div className='container-shoes flex'>
   <div className='card-shoes'>
    <div className='imgBx flex'>
     <img src={image} alt='' />
    </div>
   </div>
   <h1 className='shoes-text1'>BUY</h1>
   <h1 className='shoes-text2'>NIKE X-ZIBITH</h1>
   <h1 className='shoes-text2'>PERFECT START TO RUN</h1>
  </div>
 )
}

export default Shoes
