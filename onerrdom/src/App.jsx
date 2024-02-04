import React from 'react'
import { Outlet, Route , Routes} from 'react-router-dom'
import Home from './Components/Home'

// import Contact from './Components/Contact'
  const LazyContact = React.lazy(()=>import('./Components/Contact'))


import Navbar from './Components/Navbar'
import './App.css'
import Orders from './Components/orders'
import PageError from './Components/PageError'
import Product from './Components/Product'
import New from './Components/New'
import Featured from './Components/Featured'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import Admin from './Components/Admin'

function App() {
  return (
    <div>
      
      <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>

      {/* <Route path = '/contact' element = {<Contact/>}/> */}
       <Route path='/contact' element={<React.Suspense fallback='loading...'>
        <LazyContact/>
       </React.Suspense>}/>


      <Route path='/orders' element = {<Orders/>}/>
       
      <Route path='/product' element ={<Product/>}>
         <Route index element = {<New/>}/>
         <Route path = 'featured' element = { <Featured/>}/>
      </Route>

      <Route path = '/users' element = {<Users/>}>
      <Route path = ':userid' element = {<UserDetails/>}/>
      <Route path = 'admin' element = {<Admin/>}/>
      </Route>
     


      <Route path='*' element={<PageError/>}/>
    </Routes>
    
    </div>
  )
}

export default App