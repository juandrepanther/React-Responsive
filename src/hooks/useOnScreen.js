import { useEffect, useState } from 'react'

let listenerCallbacks = new WeakMap()

let observer

function handleIntersections(entries) {
 entries.forEach((entry) => {
  if (listenerCallbacks.has(entry.target)) {
   let cb = listenerCallbacks.get(entry.target)

   if (entry.isIntersecting || entry.intersectionRatio > 0) {
    observer.unobserve(entry.target)
    listenerCallbacks.delete(entry.target)
    cb()
   }
  }
 })
}

function getIntersectionObserver() {
 if (observer === undefined) {
  observer = new IntersectionObserver(handleIntersections, {
   rootMargin: '100px',
   threshold: '0.15',
  })
 }
 return observer
}

export default function useIntersection(elem, callback) {
 useEffect(() => {
  let target = elem.current
  let observer = getIntersectionObserver()
  listenerCallbacks.set(target, callback)
  observer.observe(target)

  return () => {
   listenerCallbacks.delete(target)
   observer.unobserve(target)
  }
 }, [callback, elem])
}

//MY CUSTOM SIMPLE HOOK

export function useOnScreen(options) {
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
