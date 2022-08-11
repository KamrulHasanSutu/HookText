import React, { useReducer } from 'react'
// when we sue multistate
const initialValue = {
    counter: 0,
    counter2: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, counter: state.counter + action.value };
        case 'decrement': return { ...state, counter: state.counter - action.value };
        case 'increment2': return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2': return { ...state, counter2: state.counter2 - action.value };
        default: return state;
    }
}
export default function ComplexCounter() {
    const [count, dispatch] = useReducer(reducer, initialValue)
    return (
        <div>
            <h2> useReduce <hr></hr></h2>
            <div>counting {count.counter}</div>
            <button type='button' onClick={() => dispatch({ type: 'increment', value: 1 })} >incrment 1</button>
            <button type='button' onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrment 1</button>
            <br></br>
            <div>counting {count.counter2}</div>
            <button type='button' onClick={() => dispatch({ type: 'increment2', value: 1 })} >incrment 1</button>
            <button type='button' onClick={() => dispatch({ type: 'decrement2', value: 1 })}>decrment 1</button>

        </div>
    )
}
