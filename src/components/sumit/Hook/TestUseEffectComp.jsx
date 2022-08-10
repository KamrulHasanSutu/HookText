import React, {useEffect, useState } from 'react'

export default function TestUseEffectComp() {
    const [count,setCount]= useState(0)
    const [date, setDate] = useState(new Date())

    // when first time load it will come & every re-render also
    //[those only which we want to cng] // fn will be called when count cng
    // when black array only first time called or re-render // componentdidmount
    // if we dont give anything always will be called
    // updating title
    useEffect(()=> {
      document.title = `clicke ${count} times`;
    },[count])

    useEffect(()=> {
      const interval = setInterval(tick,1000)
      // clearing clock
      return ()=> {
        clearInterval(interval)
      }
    },[])
    // increse value
    const addCLick = ()=> {
      setCount((prev)=> prev+1)
    }
    // set date
    const tick = ()=> {
      setDate(new Date())
    }
 
  return (
    <div>
      <h2>Time: {date.toLocaleTimeString()}</h2>
        <h2>{count}</h2>
      <button type='button' value={date} onClick={addCLick}>Click</button>

    </div>
  )
}
