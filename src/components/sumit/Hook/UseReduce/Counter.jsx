import React, { useReducer } from 'react'

    const initialValue = 0;
    const reducer = (state,action) => {
        switch(action){
            case 'increment': 
                return state+1;
            case 'decrement':
                return state-1;
            default:
                return state;
        }
    }
export default function Counter() {
    const [count,dispatch] =useReducer(reducer,initialValue)
  return (
    <div>
        <h2> useReduce <hr></hr></h2>
        <div>counting {count}</div>
        <button type='button' onClick={()=> dispatch('increment')} >incrment</button>
        <button type='button' onClick={()=> dispatch('decrement')}>decrment</button>
    </div>
  )
}
