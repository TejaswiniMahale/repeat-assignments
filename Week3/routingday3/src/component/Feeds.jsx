import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Feeds = () => {
    const navigate=useNavigate()
    const {isAuth}=useContext(AuthContext)

    if(isAuth){
        return<div>Feeds</div>
    }
    else{
       return <Navigate to="/login"/>
    }
  
}

export default Feeds