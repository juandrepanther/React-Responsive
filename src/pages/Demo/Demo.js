import React from 'react'
import './Demo.css'

function Demo() {
 return (
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
 )
}

export default Demo
