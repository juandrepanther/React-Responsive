import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar() {
 return (
  <div className='navbar'>
   <div className='container flex'>
    <h1 className='logo'>Responsive</h1>
    <nav>
     <ul>
      <li>
       <Link to='/'>
        <a href='/'>Home</a>
       </Link>
      </li>
      <li>
       <Link to='/features'>
        <a href='/'>Features</a>
       </Link>
      </li>
      <li>
       <Link to='/documents'>
        <a href='/'>Documents</a>
       </Link>
      </li>
     </ul>
    </nav>
   </div>
  </div>
 )
}

export default NavBar
