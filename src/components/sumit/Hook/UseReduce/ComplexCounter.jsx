import React, { useReducer } from 'react'

    const initialValue = {
        counter: 0
    };
    const reducer = (state,action) => {
        switch(action.type){
            case 'increment': 
                return {counter: state.counter+action.value};
            case 'decrement':
                return {counter: state.counter-action.value};
            default:
                return state;
        }
    }
export default function ComplexCounter() {
    const [count,dispatch] =useReducer(reducer,initialValue)
  return (
    <div>
        <h2> useReduce <hr></hr></h2>
        <div>counting {count.counter}</div>
        <button type='button' onClick={()=> dispatch({type:'increment',value:1})} >incrment 1</button>
        <button type='button' onClick={()=> dispatch({type:'increment',value:5})} >incrment 5</button>
        <br></br>
        <button type='button' onClick={()=> dispatch({type:'decrement',value:1})}>decrment 1</button>
        <button type='button' onClick={()=> dispatch({type:'decrement',value:5})}>decrment 5</button>
    </div>
  )
}
