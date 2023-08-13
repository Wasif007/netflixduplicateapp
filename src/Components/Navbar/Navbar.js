import React from 'react'
import "./navbar.scss"
import logoimg from "../../logo.png"; 
const Navbar = () => {
    
  return (
    <nav className='header'>
     <img src={logoimg} alt='logoimg'></img> 
    </nav>
  )
}

export default Navbar
