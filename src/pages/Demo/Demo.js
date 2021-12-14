import { Suspense, lazy } from 'react'
import './Demo.css'
import faceImage from '../../assets/images/face1.jpg'
import faceImage2 from '../../assets/images/face2.jpg'
// import Card from '../../components/Card/Card'
import Shoes from '../../components/Card/Shoes'
import shoesImg from '../../assets/images/shoes1.png'

const Card = lazy(() => import('../../components/Card/Card'))

function Demo() {
 return (
  <>
   <section className='Demo-container container'>
    <div className='items item1'>1</div>
    <div className='items item2'>2</div>
    <div className='items item3'>3</div>
    <div className='items item4'>4</div>
    <div className='items item5'>5</div>
    <div className='items item6'>6</div>
    <div className='items item7'>7</div>
    <div className='items item8'>8</div>
    <div className='items item9'>9</div>
    <div className='items item10'>10</div>
    <div className='items item11'>11 TEXT TEXT</div>
    <div className='items item12'>12</div>
    <div id='parent' className='items item13'>
     <div className='items child'>13</div>
    </div>
    <div className='last-wrap'>
     <div className='items item14'>14</div>
     <div className='items item15'>15</div>
    </div>
   </section>
   <section className='grid-demo-container container'>
    <div className='grid-demo-item1 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam
     velit quod nulla itaque eveniet enim harum dolorem alias explicabo veniam
     eum, quis exercitationem architecto facere voluptatem. Quisquam, placeat
     quae?
    </div>
    <div className='grid-demo-item2 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque soluta
     cum ab in. Laborum quia molestiae deserunt iure mollitia voluptates
     cupiditate unde voluptatibus tempora odio numquam, facere libero. Id eum
     odit labore distinctio neque deserunt necessitatibus voluptates tempora
     obcaecati maxime ea minus accusantium consectetur perspiciatis, natus
     reiciendis temporibus doloremque.
    </div>
    <div className='grid-demo-item3 grid-items'>
     Lorem ipsum dolor sit amet.
    </div>
    <div className='grid-demo-item4 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum, totam
     facilis ipsa molestiae perferendis temporibus magni itaque labore nemo
     consequatur omnis sunt inventore architecto iure, nesciunt voluptatibus,
     eius libero! Debitis nulla, modi excepturi pariatur, non dolore obcaecati
     ad a voluptatem laudantium sed ratione! Libero perferendis pariatur esse
     veniam molestias tempore totam fugiat deleniti eveniet nesciunt obcaecati,
     id assumenda tempora!
    </div>
    <div className='grid-demo-item5 grid-items'>Lorem, ipsum dolor.</div>
    <div className='grid-demo-item6 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati
     fugiat modi ipsam sint eveniet quidem quisquam illum nihil? Nam aperiam
     nobis animi nulla dolores, assumenda, ea odio officiis dolore explicabo qui
     quo, culpa iste dolorem? Odit, sit! Corrupti, molestiae!
    </div>
    <div className='grid-demo-item7 grid-items'>
     Lorem ipsum dolor sit amet consectetur.
    </div>
    <div className='grid-demo-item8 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing.
    </div>
    <div className='grid-demo-item9 grid-items'>Lorem.</div>
    <div className='grid-demo-item10 grid-items'>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum
     quos dolor unde, numquam quibusdam recusandae excepturi? Quasi fugiat nisi
     rem soluta, corporis, iusto accusamus iste dolorum, ad libero magni quos
     nihil deserunt! Distinctio doloribus expedita nobis suscipit ipsum
     consequatur est sunt iure earum aperiam placeat sequi veniam quaerat
     asperiores repellendus architecto numquam illum ducimus maiores reiciendis,
     voluptatibus dolor quia laudantium nesciunt! Enim cupiditate corrupti ipsa
     beatae sunt obcaecati ipsum?
    </div>
   </section>
   <section className='Demo-container2 container'>
    <Suspense fallback={<div>Loading...</div>}>
     <Card
      img1={faceImage}
      img2={faceImage2}
      name={'Mr. Johnson'}
      description={'Creative Designer'}
     />
     <Card
      img1={faceImage2}
      img2={faceImage}
      name={'Mr. Stivensen'}
      description={'Architect'}
     />
    </Suspense>
   </section>
   <section className='container flex'>
    <Shoes image={shoesImg} />
   </section>
  </>
 )
}

export default Demo
