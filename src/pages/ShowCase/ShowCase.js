import React, { useRef } from 'react'
import './ShowCase.css'

function ShowCase() {
 const name = useRef()

 const nameHandler = (e) => (name.current = e.target.value)

 const submitHandler = (e) => {
  e.preventDefault()
  alert(name.current)
  e.target.reset()
 }

 const keyPressHandler = (e) => {
  e.key === 'Enter' && submitHandler()
 }

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
     <div className='background-clip-text'>BACKGROUND-CLIP</div>
    </div>
    <span className='clip-path-shadow-wrapper'>
     <div className='showcase-form card polygon'>
      <h2>Request a Demo</h2>
      <form action='' onSubmit={submitHandler}>
       <div className='form-control'>
        <input
         type='text'
         name='name'
         placeholder='Name'
         required
         onChange={nameHandler}
        />
       </div>
       <div className='form-control'>
        <input type='text' name='company' placeholder='Company Name' required />
       </div>
       <div className='form-control'>
        <input type='email' name='email' placeholder='Email' required />
       </div>
       <input
        type='submit'
        value='Send'
        className='btn btn-primary'
        onKeyPress={keyPressHandler}
       />
      </form>
     </div>
    </span>
   </div>
  </section>
 )
}

export default ShowCase
