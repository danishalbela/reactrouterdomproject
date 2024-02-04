import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav>
        {/* <Link to = '/'>Home</Link>
        <Link to = '/contact'>Contact</Link> */}

        <NavLink to = '/'>Home</NavLink>
        <NavLink to = '/contact'>Contact</NavLink>
        <NavLink to= '/product'>Product</NavLink>
        <NavLink to = '/users'>User</NavLink>
        <NavLink to = '/users/admin'>Admin</NavLink>
    </nav>
    
  )
}

export default Navbar