import './Nav.css'
import React from 'react'
import './Nav.css'
const Nav = () => { 
    return ( 
      
         <nav className="navbar">
         {/* <CustomLink href="/home"> Home </CustomLink> */}
            <ul>
                <li> 
                    <a href="/home"> Home </a>    
                </li> 
                <li> 
                    <a href="/about"> About </a>
                </li>
                <li> 
                    <a href="/contact"> Contact </a>
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