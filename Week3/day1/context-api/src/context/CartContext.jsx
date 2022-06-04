import React,{ creatContext, useState} from "react"

export const CartContext = creatContext();

export const CartProvider = (Children) => {
    const [count,setCount]=useState(0)
    return <CartContext.Provider value={100}>{Children}</CartContext.Provider>
}