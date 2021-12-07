import React from 'react'
import './SubHead.css'
import serverImage2 from '../../../assets/images/server2.png'

function SubHead() {
 return (
  <section className='features-sub-head bg-light'>
   <div className='container grid'>
    <div>
     <h1 className='md'>The Loruki Platform</h1>
     <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate
      dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea
      consequatur, doloribus repellendus quasi, aut corporis nam alias culpa.
      Nostrum, inventore accusantium!
     </p>
    </div>
    <img src={serverImage2} alt='' />
   </div>
  </section>
 )
}

export default SubHead
