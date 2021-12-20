import React from 'react'
import useOnScreen from '../hooks/useOnScreen'

function RenderOneImage({ url }) {
 const [setRef, visible] = useOnScreen({ rootMargin: '-30px' })

 console.log('Problem with starting 3x rendering. Where?', visible)
 return (
  <img
   ref={setRef}
   style={{ maxWidth: '100%', height: 'auto' }}
   src={url}
   alt='Loading'
  />
 )
}

export default RenderOneImage
