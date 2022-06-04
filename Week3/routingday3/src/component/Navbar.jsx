import React, { useContext } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isAuth,logout}=useContext(AuthContext)
    const navigate = useNavigate();
    const handleLoginClick=()=>{
        if(isAuth){
         logout()
         navigate("/")
        }else{
            navigate("/login")
        }
    }
  return (

    <div style={{padding:"10px"}}>Navbar:
    <Link to="/">Home</Link>
    <Link to="/feeds">Feed</Link>
    <Link to="/posts">Posts</Link>
   <button onClick={handleLoginClick}>{isAuth ? "Logout":"Login"}</button>
    </div>
  )
}

export default Navbar