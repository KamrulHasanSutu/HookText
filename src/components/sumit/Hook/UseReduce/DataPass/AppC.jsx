import React, { useContext } from 'react'
import { counterContext } from './AppA'

export default function AppC() {
    const countContext = useContext(counterContext)
  return (
    <div><h2>AppC</h2>

    <button type='button' onClick={()=> countContext.dispatchFn('increment')} >incrment</button>
        <button type='button' onClick={()=> countContext.dispatchFn('decrement')}>decrment</button>
    </div>
  )
}
