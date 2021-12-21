import useFetch from '../../hooks/useFetch'
import RenderOneImage from '../RenderOneImage/RenderOneImage'
import './RenderImages.css'

function RenderImages({ url }) {
 const [data] = useFetch(url)

 return (
  data && (
   <div className='images-wrapper'>
    {data.data.memes.map((item) => (
     <div key={item.id}>
      {
       <RenderOneImage url={item.url} width={item.width} height={item.height} />
      }
     </div>
    ))}
   </div>
  )
 )
}

export default RenderImages
