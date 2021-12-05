import React from 'react'
import './CliPage.css'
import cliImage from '../../assets/images/cli.png'

function CliPage() {
 return (
  <section className='cli'>
   <div className='container grid'>
    <img src={cliImage} alt='' />
    <div className='card shadow'>
     <h3>Easy to use, cross card platform CLI</h3>
    </div>
    <div className='card shadow'>
     <h3>Deploy just in seconds</h3>
    </div>
   </div>
  </section>
 )
}

export default CliPage
