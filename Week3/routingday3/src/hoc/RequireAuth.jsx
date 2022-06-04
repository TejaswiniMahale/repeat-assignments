import React,{ createContext, useContext, useState} from 'react'
import { useNavigate,Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';



const RequireAuth = ({Children}) => {
    const {isAuth}=useContext(AuthContext);
    if(isAuth){
        return Children
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default RequireAuth