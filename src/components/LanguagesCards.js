import React from 'react'

function LanguagesCards(props) {
 const LanguagesImages = props.languages
 return Object.entries(LanguagesImages).map((language, index) => {
  return (
   <div className='card' key={index}>
    <h4>{language[0]}</h4>
    <img src={language[1]} alt='' />
   </div>
  )
 })
}

export default LanguagesCards
