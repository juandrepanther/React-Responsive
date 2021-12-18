import React, { useState, useEffect, useRef } from 'react'

export default function TypeText(props) {
 const { letters } = props
 const textArr = letters.split('')
 const text = useRef('')
 let [letterIndex, setLetterIndex] = useState(0)

 useEffect(() => {
  const interval = setInterval(() => {
   if (letterIndex < letters.length) {
    text.current += textArr[letterIndex]
    setLetterIndex((prevState) => prevState + 1)
   } else {
    clearInterval(interval)
   }
  }, 100)
  return () => clearInterval(interval)
 }, [text, letterIndex, textArr, letters])

 return <h1 className='header-text'>{text.current}</h1>
}
