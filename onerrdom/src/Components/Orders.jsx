import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function orders() {
    let getNavData = useLocation()

    let navigate = useNavigate()
    let navHome = ()=>{
        navigate('/')
    }
  return (
    <div>

      <h1>Orders</h1>
      <button onClick={navHome}>Back Home</button>
      <h1>Home brings me {getNavData.state}</h1>
    </div>
  )
}

export default orders