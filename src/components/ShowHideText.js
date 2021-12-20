import { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'

function ShowHideText(text, tag) {
 const [isVisible, setVisible] = useState('hidden')

 useEffect(() => {
  const interval = setInterval(() => {
   if (isVisible === 'hidden') {
    setVisible('visible')
   } else {
    setVisible('hidden')
    clearInterval(interval)
   }
  }, 1000)
  return () => clearInterval(interval)
 }, [isVisible])
 const composedData = `<${tag} style="visibility: ${isVisible};">${text}</${tag}>`
 return ReactHtmlParser(composedData)
}

export default ShowHideText
