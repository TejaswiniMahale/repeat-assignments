
import React,{useEffect, useState} from "react"
import axios from "axios"
 function App() {
  const [page,setPage]=useState(1)
  const [todos,setTodos]=useState([])
  const [newTodo,setNewTodo]=useState("")
  // useEffect(()=>{
  //   fetch("http://localhost:3000/teju")  
  //   .then((r)=>r.json())
  //   .then((d)=>{
  //     console.log(d)
  //     setTodos(d)
  //   })
  // },[])
  useEffect(()=>{
    
    axios.get(`http://localhost:3000/teju?_page=${page}&_limit=5`).then((r)=>{
    setTodos(r.data)
    console.log(r.data)
  })
  },[page]) 
  const saveInfo=()=>{
    fetch("http://localhost:3000/teju",{
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body:JSON.stringify({
        name:newTodo,
      isCompleted:false,
      }),
    
    })
    .then((r)=>r.json())
    .then((d)=>{
      setTodos([...todos,d])
      setNewTodo("")
    })
  }
    return(
      <>
        <div>Todo</div>
        <div>
        <input value={newTodo}
          onChange={({target})=>setNewTodo(target.value)}
        />
        <button onClick={saveInfo}>+</button>
        </div>
         <div>
        {
          todos.map((todo)=><div key={todo.id}>{todo.name}</div>)
        }
        <button 
          disabled={page<=1}
          onClick={()=>{
          if(page>1){
            setPage(page-1)
          }
        }}>{`<`}</button>
        <button onClick={()=>setPage(page+1)}>{`>`}</button>
        </div>
      </>
    )
}
export default App