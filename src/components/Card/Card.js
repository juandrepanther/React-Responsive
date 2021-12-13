import React from 'react'
import './Card.css'

function Card(props) {
 const { img1, img2, name, description } = props
 return (
  <div className='demo-wrapper'>
   <div className='imgBox'>
    <img src={img2} alt='Cannot Load' />
    <img src={img1} alt='Cannot Load' />
   </div>
   <div className='details flex'>
    <div className='content flex'>
     <h2>
      {name}
      <span>
       <br></br>
       {description}
      </span>
     </h2>
     <div className='social-icons'>
      <a href='/'>
       <i className='fab fa-facebook'></i>
      </a>
      <a href='/'>
       <i className='fab fa-twitter'></i>
      </a>
      <a href='/'>
       <i className='fab fa-linkedin'></i>
      </a>
      <a href='/'>
       <i className='fab fa-instagram'></i>
      </a>
     </div>
    </div>
   </div>
  </div>
 )
}

export default Card
