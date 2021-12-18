import React, { useState, useEffect, useRef } from 'react'

export default function TypeText(props) {
 const { letters, seconds } = props
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
  }, seconds)
  return () => clearInterval(interval)
 }, [text, letterIndex, textArr, letters, seconds])

 return <>{text.current}</>
}
