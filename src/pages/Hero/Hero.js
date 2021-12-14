import React from 'react'
import CliPage from '../CliPage/CliPage'
import ShowCase from '../ShowCase/ShowCase'
import Stats from '../Stats/Stats'
import './Hero.css'



function Hero() {
 return (
  <div className='hero'>
   <div className='hero-container'>
    <ShowCase />
    <Stats />
    <CliPage />
   </div>
  </div>
 )
}

export default Hero
