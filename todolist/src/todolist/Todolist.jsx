import React, { useState } from 'react'
import './Todolist.css'
const Todolist = () => {
  const [query,setTodo] = React.useState("")
  const [tasks,setTasks] = React.useState([])
  const handleChange=(e)=>{
    const {value}=e.target
    setTodo(value)
  }
  const handleAdd=()=>{
    const payload = {
      title:query,
      stauts:false
    }
    let newTastks = [...tasks,payload]
    setTasks(newTastks)
  }
  return (
    <>
      <div className='mainDiv'>
      <div >
      <h1 style={{color:"tomato"}}>ToDo list</h1>
      <input className='inputField' value={query} onChange={handleChange} placeholder='write something'/>
      <button  className='buttonfield' onClick={handleAdd}>Add</button>
    </div>
    <div className='mapItems'>
      {tasks.map((item)=>{
        return <li >{item.title}</li>
      })}
    </div>
      </div>
    </>
  )
}

export default Todolist