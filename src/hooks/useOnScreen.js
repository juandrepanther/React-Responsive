import { useEffect, useState } from 'react'

export default function useOnScreen(options) {
 const [ref, setRef] = useState(null)
 const [visible, setVisible] = useState(false)

 useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
   setVisible(entry.isIntersecting)
  }, options)
  if (ref) {
   observer.observe(ref)
  }

  return () => {
   if (ref) {
    observer.unobserve(ref)
   }
  }
 }, [setRef, options, ref])

 return [setRef, visible]
}
