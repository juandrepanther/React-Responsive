import React from 'react'
import './Shoes.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

function Shoes(props) {
 const { image } = props

 return (
  <div className='container-shoes flex' data-aos='fade-right'>
   <div className='card-shoes'>
    <div className='imgBx flex'>
     <img src={image} alt='' loading='lazy' />
    </div>
   </div>
   <h1 className='shoes-text1'>BUY</h1>
   <h1 className='shoes-text2'>NIKE X-ZIBITH</h1>
   <h1 id='text-blur' className='shoes-text2'>
    PERFECT START TO RUN
   </h1>
  </div>
 )
}

export default Shoes
