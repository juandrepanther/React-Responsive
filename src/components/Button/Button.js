import React from 'react'
import './Button.css'
import useOnScreen from '../../hooks/useOnScreen'

function Button(props) {
 const { children } = props
 const [setRef, visible] = useOnScreen({ rootMargin: '-30px' })
 console.log(visible ? true : false)
 return (
  <button
   ref={setRef}
   className={`btn2 ${visible ? 'on-viewport' : 'hidden'}`}
   onClick={() => console.log('re-rendered')}>
   {children}
  </button>
 )
}

export default Button
