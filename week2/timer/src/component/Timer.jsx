import React ,{useEffect, useState} from "react"

const Timer = () => {
    const [timer,setTimer]=useState(0)

    useEffect(()=>{
       let id=setInterval(()=>{
         if(timer>100){
    
         }
         else{
           setTimer(timer+1);
         }
       },1000)
       return ()=>{
         clearInterval(id)
       };
    },[timer])
      return (
        <div className="App">
          <h1>Timer</h1>
          <div>count up:{timer}</div>
        </div>
      );
}

export default Timer