import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async()=>{
             let r=await fetch("http://localhost:8080/Teju")
             let d=await r.json();
             setProducts(d)
             console.log(d.name)
        }
        fetchProducts();
    },[])
  return (
    
    <div>Products:{" "}
    <div>{products.map=(()=>(<h1>{products.name}</h1>))}</div>
    </div>
  )
}

export default Products