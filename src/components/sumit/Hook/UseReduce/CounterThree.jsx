import React, { useReducer } from 'react'

	const initialValue1 = 0;
	const initialValue2 = 10;

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
	export default function CounterThree() {
		const [count,dispatch] =useReducer(reducer,initialValue1)
		const [count2,dispatch2] =useReducer(reducer,initialValue2)
	  return (
		<div>
			<h2> useReduce <hr></hr></h2>
			<div>counting {count}</div>
			<button type='button' onClick={()=> dispatch('increment')} >incrment</button>
			<button type='button' onClick={()=> dispatch('decrement')}>decrment</button>
            <br/>
            <div>counting {count2}</div>
			<button type='button' onClick={()=> dispatch2('increment')} >incrment</button>
			<button type='button' onClick={()=> dispatch2('decrement')}>decrment</button>
		</div>
	  )
	}