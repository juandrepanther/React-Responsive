import React from 'react'
import './ShowCase.css'

function ShowCase() {
 return (
  <section className='showcase'>
   <div className='container grid'>
    <div className='showcase-text'>
     <h1>Comfortable Deploy Services</h1>
     <p>
      You gonna enjoy this and never forged. Awesome products will make your
      deployment much easier than before! Fill the form and get our feedback
      within never!
     </p>
    </div>
    <div className='showcase-form card'>
     <h2>Request a Demo</h2>
     <form action=''>
      <div className='form-control'>
       <input type='text' name='name' placeholder='Name' required />
      </div>
      <div className='form-control'>
       <input type='text' name='company' placeholder='Company Name' required />
      </div>
      <div className='form-control'>
       <input type='email' name='email' placeholder='Email' required />
      </div>
      <input type='submit' value='Send' className='btn btn-primary' />
     </form>
    </div>
   </div>
  </section>
 )
}

export default ShowCase
