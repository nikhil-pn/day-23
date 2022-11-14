import React from 'react'
import {useState, useEffect} from "react"
 

function Lists() {
    const getItems = ()=>{
        return Array(10).fill(0)
    }
    const [count, setCount] = useState(getItems)
    
  return (
    <div>
        <button onClick={()=>(setCount([...count, 0]))} >Click</button>
        <h1>helo</h1>
           {count.map((count, index)=>
            <li key={index}>{index +1}</li>
           )}

    </div>
  )
}

export default Lists