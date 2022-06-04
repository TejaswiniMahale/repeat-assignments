import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
    const navigate=useNavigate()
    const [loginCreds,setLogiinCreds]=useState({})
    const {login}=useContext(AuthContext)
    const handleChange=(e)=>{
        
        const {name,value}=e.target;
        setLogiinCreds({
            ...loginCreds,
            [name]:value
        })
        console.log(e.target)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        login()
        navigate("/login")
    };
  return (
    <div>Login
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} 
        name="email" type="text"
         placeholder="email"></input>
        <input onChange={handleChange} 
        name="password" type="password"
         placeholder="enter password"></input>
        <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default Login