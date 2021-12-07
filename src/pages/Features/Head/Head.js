import React from 'react'
import './Head.css'
import serverImage from '../../../assets/images/server.png'

function Head() {
 return (
  <section className='features-head bg-primary'>
   <div className='containerHead'>
    <div>
     <h1 className='xl'>Features</h1>
     <p className='lead'>
      Check out the new features of my template that separate us from the
      competition
     </p>
    </div>
    <img src={serverImage} alt='' />
   </div>
  </section>
 )
}

export default Head
