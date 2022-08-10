import React, { useEffect, useRef } from 'react'

export default function UseRef() {
    const inputRef = useRef(null)
    

    useEffect(()=> {
        inputRef.current.focus();
    },[])

  return (
    <div>
        <h2>UseRef</h2>
        <input type="text" ref={inputRef} placeholder='enter something'/>
    </div>
    
  )
}
