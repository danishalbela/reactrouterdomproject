import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Context'


function Home() {

  let navigate = useNavigate()

  let navOrder = ()=>{
        navigate('/orders', {state:'Napolean'})
  }


  let getData = useAuth()

  return (
    <div>
    
      <h1>Home Component</h1>
      <button onClick={navOrder}>Confirm Order</button>
      <span>UseContext says = {getData}</span>
    </div>
  )
}

export default Home