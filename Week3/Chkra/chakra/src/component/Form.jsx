import React, { useState } from 'react'
import axios from "axios"

import { Button, Input } from '@chakra-ui/react'
const Form = () => {
    //const [name,setname]=useState([])
    
    const [data,setData]=useState({
        name:"",
        number:"",
        date:""
    })
    const handle=(e)=>{
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }
    const submit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8080/Teju`,{
            name:data.name,
            number:parseInt(data.number),
            date:parseInt(data.date)
        })
        .then(res=>{
            console.log(res.data,"hello")
        })
    }
  return (
     
    <div>
       <form onSubmit={(e)=>submit(e)}>
           <Input style={{width:"200px"}} onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"/>
           <Input style={{width:"200px"}} onChange={(e)=>handle(e)} id="number" value={data.number} placeholder="number" type="number"/>
           <Input style={{width:"200px"}} onChange={(e)=>handle(e)} id="date" value={data.date} placeholder="date" type="date"/>
           <Button type='submit'>Submit</Button>
       </form>
    </div>
  )
}

export default Form