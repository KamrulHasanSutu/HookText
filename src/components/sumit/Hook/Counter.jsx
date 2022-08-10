import React, { useState } from 'react'
export default function Counter() {

    const [count, setCount] = useState(0)

    let i = 0;
    const addFive = () => {
        while (i < 5) {
            setCount((prev) => prev + 1)  
            i += 1;
        }
    }
    const mulFIve = () => {
        while (i < 5) {
            setCount((prev) => prev -1)  
            i += 1;
        }
    }
    return (
        <div>

            <h2>{count}</h2>
            {/* <button type='button' value={count} onClick={()=> setCount(count+1)}>Click </button> */}
            {/* // when we want to use previous state use  */}
            <button type='button' value={count} onClick={() => setCount((prevState) => count + 1)}>Click </button>
            <p>
                <button type='button' onClick={addFive}>add five</button>
                <button type='button' onClick={mulFIve}>del five</button>
            </p>
        </div>
    )
}
