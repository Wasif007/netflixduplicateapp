import React from 'react'
import "./navbar.scss"
import logoimg from "../../logo.png"; 
import { Link } from 'react-router-dom';
import {GoSearch} from 'react-icons/go';
const Navbar = () => {
    
  return (
    <nav className='header'>
     <img src={logoimg} alt='logoimg'></img>
    <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylist">My List</Link>
    </div> 
    <GoSearch/>
    </nav>
  )
}

export default Navbar
