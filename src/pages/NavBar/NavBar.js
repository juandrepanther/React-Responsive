import React from 'react'
import './NavBar.css'

function NavBar() {
 return (
  <div className='navbar'>
   <div className='container flex'>
    <h1 className='logo'>Responsive Design</h1>
    <nav>
     <ul>
      <li>
       <a href='/'>Home</a>
      </li>
      <li>
       <a href='/'>Features</a>
      </li>
      <li>
       <a href='/'>Documents</a>
      </li>
     </ul>
    </nav>
   </div>
  </div>
 )
}

export default NavBar
