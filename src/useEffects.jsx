import React, { useEffect, useState } from 'react'

function MouseCursor() {
    console.log("first render");
    const [cursorPostion, setCursorPostion]= useState({x : 0, y: 0})
    
    useEffect(()=>{
        const handleMove = (e)=>{
            setCursorPostion({x: e.clientX, y:e.clientY})
            console.log("pointer move event");

        }
        window.addEventListener("pointermove", handleMove)

        // return window.removeEventListener("pointermove", handleMove)
    }, [])

  return (
    console.log("return render"),
    <div>
        x: {cursorPostion.x} y: {cursorPostion.y}
      
    </div>
  )
}

export default MouseCursor