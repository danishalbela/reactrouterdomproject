import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
    <h1>Product</h1>

   <nav className='myProduct'>
   <NavLink to = ''>New</NavLink>
    <NavLink to = 'featured' >Featured</NavLink>  
   </nav>  
   <Outlet/>

    </div>
  )
}

export default Product