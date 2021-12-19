import React from 'react'
import './Button.css'

function Button(props) {
 const { children } = props
 return <button className='btn2'>{children}</button>
}

export default Button
