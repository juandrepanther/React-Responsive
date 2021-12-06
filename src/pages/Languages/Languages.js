import React from 'react'
import './Languages.css'

//IMAGES

import NodeImg from '../../assets/logos/node.png'
import PythonImg from '../../assets/logos/python.png'
import CsharpImg from '../../assets/logos/csharp.png'
import RubyImg from '../../assets/logos/ruby.png'
import PHPImg from '../../assets/logos/php.png'
import ScalaImg from '../../assets/logos/scala.png'
import ClojureImg from '../../assets/logos/clojure.png'

function Languages() {
 const LanguagesImages = {
  'Node.js': NodeImg,
  Python: PythonImg,
  'C#': CsharpImg,
  Ruby: RubyImg,
  PHP: PHPImg,
  Scala: ScalaImg,
  Clojure: ClojureImg,
 }

 const renderLanguages = () => {
  return Object.entries(LanguagesImages).map((language, index) => {
   return (
    <div className='card' key={index}>
     <h4>{language[0]}</h4>
     <img src={language[1]} alt='' />
    </div>
   )
  })
 }

 return (
  <section className='languages'>
   <h2 className='md text-center my-2'>Supported Languages</h2>
   <div className='container flex'>{renderLanguages()}</div>
  </section>
 )
}

export default Languages
