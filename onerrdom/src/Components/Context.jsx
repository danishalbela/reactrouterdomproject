import { createContext, useContext } from "react";


let AuthUser = createContext()

export const AuthProvider = ( {children} )=>{
    let data = 'poem'
    return  <AuthUser.Provider value={data}>
        {children}
    </AuthUser.Provider>
}

// useContext api

export let useAuth = ()=>{
    return  useContext(AuthUser)
}