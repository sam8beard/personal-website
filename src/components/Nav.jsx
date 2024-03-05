import './Nav.css'
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import About from './../pages/About'

const Nav = () => { 
    return ( 
      
         <nav className="navbar">
         {/* <CustomLink href="/home"> Home </CustomLink> */}
            <ul>
                <li> 
                    {/* <a href="/home"> Home </a>     */}
                    <Link to='/'> Home </Link>
                </li> 
                <li> 
                    {/* <a href="/about"> About </a> */}
                    <Link to='/about'> About </Link>
                </li>
                <li> 
                    {/* <a href="/contact"> Contact </a> */}
                    <Link to='/contact'> Contact </Link>
                </li>
            </ul>
         </nav>
        
    )
}

// pass a link, but also any other props such as a class, etc. 
function CustomLink({href, children, ...props}) { 
    const path = window.location.pathname
    
    return ( 
        <li> 
            <a href={href} {...props}> {children} </a>
        </li>
    )
}
export default Nav 