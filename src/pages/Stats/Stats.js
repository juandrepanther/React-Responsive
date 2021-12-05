import React from 'react'
import './Stats.css'

function Stats() {
 return (
  <section className='stats grid'>
   <div className='container'>
    <h3 className='stats-heading text-center my-1'>
     This is my sand-box web page template for future developments. I used React
     JS library and simple css with variables and utility classes for faster
     creation! This boiler plate includes clip-path properties (polygon) to
     create waves and other shapes. Also exist animations and other cool
     features!
    </h3>
    <div className='grid grid-3 text-center my-4'>
     <div>
      <i className='fas fa-server fa-3x'></i>
      <h3>10.356</h3>
      <p className='text-secondary'>Deployments</p>
     </div>
     <div>
      <i className='fas fa-upload fa-3x'></i>
      <h3>15</h3>
      <p className='text-secondary'>Published</p>
     </div>
     <div>
      <i className='fas fa-project-diagram fa-3x'></i>
      <h3>2.568.456</h3>
      <p className='text-secondary'>Projects</p>
     </div>
    </div>
   </div>
  </section>
 )
}

export default Stats
