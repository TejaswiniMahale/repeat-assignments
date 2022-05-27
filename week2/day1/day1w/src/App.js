
// import react,{useEffect, useState} from "react"
// function App() {
//   const [todos,setTodos]=useState([])
//   const [newTodo,setNewTodo]=useState("")
//   useEffect(()=>{
//     fetch("http://localhost:3000/teju")  
//     .then((r)=>r.json())
//     .then((d)=>{
//       console.log(d)
//       setTodos(d)
//     })
//   },[])
//   const saveInfo=()=>{
//     fetch("http://localhost:3000/teju",{
//       method:"POST",
//       headers:{
//         "content-type":"application/json",
//       },
//       body:JSON.stringify({
//         name:newTodo,
//       isCompleted:false,
//       }),
    
//     })
//     .then((r)=>r.json())
//     .then((d)=>{
//       setTodos([...todos,d])
//       newTodo("")
//     })
//   }
//     return(
//       <>
//         <div>Todo</div>
//         <div>
//         <input value={newTodo}
//           onChange={({target})=>setNewTodo(target.value)}
//         />
//         <button onClick={saveInfo}>+</button>
//         </div>
//         {todos.map((todo)=>(
//           <div key={todo.id}>{todo.name}</div>
//         ))}
//       </>
//     )
// }

// export default App;


import React, { useEffect, useState } from 'react'
 import axios from "axios"
const App = () => {
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    
    axios.get("http://localhost:3000/teju").then((r)=>{
    setTodos(r.data)
    console.log(r.data)
  });
  },[])   
   
  return (
    <div>
        {
          todos.map((todo)=><div key={todo.id}>{todo.name}</div>)
        }
    </div>
  )
}

export default App
