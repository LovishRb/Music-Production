import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
function Navbar() {
  return (
    
    <div className='navbar'>
        <div className='logo'>
            <Link className='logo-link'>logo</Link>
            <Link className='logo-link'><h1>PindHoodRecords</h1></Link>
        </div>
        <div className='navbar-container'>
            
            <Link className='link-styling'>About</Link>
            
            <Link className='link-styling'>Services</Link>
            
            <Link className='link-styling'>DiscoGraphy</Link>
            
            <Link className='link-styling'>MusicDistribution</Link>
            
            <Link className='link-styling'>Blog</Link>
            
            <Link className='link-styling'>Contact</Link>
            
            <Link className='link-styling'><button className='get-started'>GetStarted</button></Link>
            
        </div>
      
    </div>
  )
}

export default Navbar
