import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRout = ({children,user}) => {
  
    if(!user){
        return <Navigate to='/' /> // redirect to home page
    }
    return children // go to dashboard page
}
export default ProtectedRout;