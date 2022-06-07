import React, { useState } from 'react'
import { Button, Container, Input } from '@chakra-ui/react'
const Cardform = () => {
    const [name,setname]=useState()
    const [fullname, setFullname]=useState()
    const [number,setNumber]=useState()
    const [num,setNum]=useState()
    const [date,setdate]=useState()
    const [newdate,setnewDate]=useState()
const handleOnClick=()=>{
    setFullname(name)
    setNum(number)
    setnewDate(date)
    console.log(name)
}
  return (
    <div style={{display:"flex",margin:"auto"}}>
        
          <div className='card'>
              <div className='visa'>Visa</div>
              <h2>{num}</h2>
              <div className='name'>
                  <div>
                  <h2>Card Holder Name</h2>
                  <h2>{fullname}</h2>
                  </div>
              <div>
                  <h2>Expire</h2>
                  <h2>{newdate}</h2>
              </div>
              </div>
          </div>
        
        <div style={{marginTop:"90px"}}>
      <Container style={{border:"1px solid black",borderRadius:"15px",padding:"20px"}}>
      <Input placeholder='Basic usage'
         value={name} style={{width:"450px",marginBottom:"30px"}}
         onChange={(e)=>setname(e.target.value)} />
         <Input type="number" 
         value={number} style={{width:"450px",marginBottom:"30px"}}
          onChange={(e)=>setNumber(e.target.value)}/>
          <Input type="date"
          value={date} style={{width:"450px",marginBottom:"30px"}}
          onChange={(e)=>setdate(e.target.value)}
          />
          <br></br>
        <Button onClick={handleOnClick}>Submit</Button>
      </Container>
        
        </div>
    </div>
  )
}

export default Cardform