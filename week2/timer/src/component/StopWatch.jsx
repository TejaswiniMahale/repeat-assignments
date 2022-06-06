import React, { useState } from 'react'

const StopWatch = () => {
    const [timerId,setTimerId]=useState();
    const [watch,setWatch]=useState(0)
    const start=()=>{
        let id=setInterval(()=>{
            setWatch((prev)=>prev+1)
        },1000);
        setTimerId(id)
    };
    const pause=()=>{
        clearInterval(timerId)
    };
    const reset=()=>{
        clearInterval(timerId)
        setWatch(0)
    };
  return (
    <>
        <h1>StopWatch</h1>
        <h1>{watch}</h1>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    </>
  )
}

export default StopWatch