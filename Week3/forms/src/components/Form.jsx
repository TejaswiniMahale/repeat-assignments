import React, { useEffect, useState } from 'react'
import axios from "axios"
const Form = () => {
    const [form,setForm]=useState([])


    const handleOnChange=(e)=>{
        let {name,value,checked,type,files}=e.target
        //console.log(name,value,checked,type,files)
        if(type==="checkbox"){
            setForm({
                ...form,
                [name]:checked,
            })
        }
       else if(type==="file"){
            setForm({
                ...form,
                [name]:files,
            })
        }
        else(
            setForm({
                ...form,
                [name]:value,
            })
        )
        
    }
    // useEffect(()=>{
    //     console.log(form)
    // },[form])
    useEffect(()=>{
    
        axios.get(`http://localhost:8080/posts`).then((r)=>{
        setForm(r.data)
        console.log(r.data)
      })
    },[])
    const handleOnSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
        fetch(`http://localhost:8080/posts`,{
            method:"POST",
            headers:{
              "content-type":"application/json",
            },
            body:JSON.stringify(form),
            
          }).then((r)=>r.json())
          .then((d)=>{
            setForm([...form,d])
            
          })
          .then(()=>{
              console.log("is Completed")
          })
          
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}><h1>Form</h1>
            <div>
                <label>Name: </label>
                <input type="text"
             name="username"
             value={form.name}
              onChange={handleOnChange}  
              placeholder='Enter Name'/>
            </div>
        <div>
            <label>Age</label>
            <input type="number"
            name="age"
            onChange={handleOnChange}
                placeholder='Enter age'/>
        </div>
        <div>
            <label>Address</label>
            <input type="text"
             name="address"
              onChange={handleOnChange}  
              placeholder='Enter Name'/>
        </div>
        <div>
            <select name="department"value={form.department} onChange={handleOnChange}>Department
            <option value="sd">Software engineer</option>
            <option value="fsd">Full Stack developer</option>
            <option value="bd"> backend developer</option>
            </select>
        </div>
        <div>
        <label>Salary</label>
            <input type="number"
            name="salary"
            onChange={handleOnChange}
            placeholder='Enter salary'/>
        </div>
        <div>
            Marital Status: 
            <label>Married</label>
            <input type="radio" 
                name="marrital Status"
                value="married"
                onChange={handleOnChange}
            />
            <label>Single</label>
            <input type="radio" 
                name="marrital Status"
                value="single"
                onChange={handleOnChange}
            />
        </div>
        <div>
        <label>User Resume:</label>
        <input type="file" 
            name="photo"
            accept='image/png ,image/jpeg ,pdf'
            files={form.name}
            onChange={handleOnChange}
        />
        </div>
        <button type='submit'>Submit</button>
        </form>
        {/* {
            form.map((e)=><div key={e.id}>{e.name}</div>)
        } */}
    </div>
  )
}

export default Form