import useFetch from '../hooks/useFetch'
import RenderOneImage from './RenderOneImage'
import useOnScreen from '../hooks/useOnScreen'

function RenderImages({ url }) {
 const [data] = useFetch(url)
 const [setRef, visible] = useOnScreen({ rootMargin: '-30px' })

 return (
  data &&
  data.data.memes.map((item) => (
   <div key={item.id}>
    <RenderOneImage url={item.url} />
   </div>
  ))
 )
}

export default RenderImages
