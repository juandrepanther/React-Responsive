import { useState, useEffect } from 'react'

export default function useFetch(url) {
 const [data, setData] = useState(null)

 useEffect(() => {
  fetch(url)
   .then((res) => res.json())
   .then((data) => setData(data))
   .catch((error) => console.log(`Message: ${error}`))
 }, [url])

 return [data]
}
