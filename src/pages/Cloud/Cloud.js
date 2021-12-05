import React from 'react'
import './Cloud.css'
import cloudImage from '../../assets/images/cloud.png'

function Cloud() {
 return (
  <section className='cloud bg-primary my-2 py-2'>
   <div className='container grid'>
    <div className='text-center'>
     <h2 className='lg'>Extreme Cloud Service</h2>
     <p className='lead my-1'>
      Cloud Hosting like you never seen before, my friend
     </p>
     <a href='/' className='btn btn-dark'>
      Read More
     </a>
    </div>
    <img src={cloudImage} alt='' />
   </div>
  </section>
 )
}

export default Cloud
