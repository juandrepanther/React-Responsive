import React, { useRef, useState } from 'react'
import useIntersection from '../hooks/useOnScreen'
import './RenderOneImage.css'

function RenderOneImage({ url, width, height }) {
 const imgRef = useRef()
 const [isInView, setIsInView] = useState(false)

 useIntersection(imgRef, () => {
  setIsInView(true)
 })
 return (
  <div ref={imgRef}>
   {
    <>
     <div
      className='image-placeholder'
      ref={imgRef}
      style={{
       paddingBottom: `${(height / width) * 100}%`,
       width: '100%',
      }}>
      {isInView && <img className='lazy-images' src={url} alt='' />}
     </div>
    </>
   }
  </div>
 )
}

export default RenderOneImage
