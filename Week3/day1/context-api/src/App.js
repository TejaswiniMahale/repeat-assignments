
import './App.css';
// import React, { useReducer } from 'react'

// const reducer = (state,{type,payload})=>{
// switch(type){
//   case "INCREAMENT":{
//     return state+payload;
//   }
//   case "DECREAMENT":{
//     return state-payload;
//   }
//   default:{
//     console.log("type incorrect",type)
//     return state
//   }
// }
// }
// //need a state variable with initial value=0
// // need a single place where this state changes can be monitored


// const App = () => {
//   const [counter,dispatch]=useReducer(reducer,0)
//   return (
//     <div>
//       counter:{counter}
//       <div>
//       <button onClick={()=>dispatch({type:"DECREAMENT",payload:1})}>-</button>
//       <button onClick={()=>dispatch({type:"INCREAMENT",payload:100})}>+</button>
//       </div>
//     </div>
//   )
// }

// export default App
import Navbar from "./Components/Navbar"
import React from 'react'
import Body from './Components/Body';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <div>
    <CartProvider>
    <Navbar/>
    <Body/>
    </CartProvider>
    </div>
  )
}

export default App