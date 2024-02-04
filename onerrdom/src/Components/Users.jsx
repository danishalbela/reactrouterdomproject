import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {

    let [searchParam , setSearchParam] = useSearchParams()

    let activeHandler = ()=>{
        setSearchParam({filter:'active'})
    }
    
    let resetActive = ()=>{
        setSearchParam({})
    }

    let activeUser = searchParam.get('filter') === 'active'

    

  return (
    <div>
        <h1>Users</h1>
        <Outlet/>

        <div>
            <button onClick={activeHandler}>Active Users</button>
            <button onClick={resetActive}>Reset</button>

            {
                activeUser ? <h2>User is Online </h2> : ''
            }
        </div>
    </div>
    
  )
}

export default Users