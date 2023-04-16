import React from 'react'
import '../component/Search.js'
import '../component/Navbar.css'
import Search from '../component/Search.js'
const Navbar = () => {
  return (
    <div className='common_navbar'>
      <a className="main_navbar" id="nav-1" href="/">Material UI</a>
      <a className="main_navbar" href="/">Docs</a>
      <a className="main_navbar" href="/">Material UI-X</a>
      <a className="main_navbar" href="/">Pricing</a>
      <a className="main_navbar" href='/'>Templates</a>
      <a className="main_navbar" href='/'>About Us</a>
      <Search className="main_navbar"></Search>
    </div>
  )
}

export default Navbar