import React,{useState,useEffect} from 'react'

const Form = () => {
    const [form,setForm]=useState({
     username:"",
     email:"",
     password:"",
     age:0,
     isIndian:true,
     gender:false,
     resume:""
    })
    //mapping input with unique identifire
    //onchange im getting unique identifire and the latest value
    // updating form where key = unique identifire and value = new value
    const handleOnChange=(e)=>{
        let {name,value,type,checked,file}=e.target
        console.log(type,name,value,checked,file)
        if(type==="checkbox"){
            setForm({
                ...form,
                [name]:checked,
            })
        }
       else  if(type==="file"){
            setForm({
                ...form,
                [name]:file,
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
  return (
    <>
        <div>Form</div>
        <form>
        <div>
            <label>Name</label>
            <input type="text"
             name="username"
              value={form.name} 
              onChange={handleOnChange}  
              placeholder='Enter Name'/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" 
            name="email"
            value={form.name}
            onChange={handleOnChange}
            placeholder='Enter email'/>
        </div>
        <div>
            <label>Password</label>
            <input type="password" 
            name="password"
            value={form.name}
            onChange={handleOnChange}
            placeholder='Enter Password'/>
        </div>
        <div>
            <label>Age</label>
            <input type="number"
            name="age"
            value={form.name}
            onChange={handleOnChange}
                placeholder='Enter age'/>
        </div>
        <div>
            <input 
                type="checkbox"
                name="isIndian"
                check={form.name}
                onChange={handleOnChange}
            />
            <label>:Is Indian</label>
        </div>
        <div>
            <label>Female</label>
            <input type="radio" 
                name="gender"
                value={form.name}
                onchange={handleOnChange}
            />
        </div>
        <div>
            <label>Male</label>
            <input type="radio" 
                name="gender"
                value={form.name}
                onchange={handleOnChange}
            />
        </div>
        <div>
        <label>User Resume:</label>
        <input type="file" 
            name="resume"
            value={form.name}
            onchange={handleOnChange}
        />
        </div>
        </form>
    </>
  )
}

export default Form