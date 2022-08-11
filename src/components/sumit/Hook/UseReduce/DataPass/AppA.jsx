import React, {  useReducer } from 'react'
import AppB from './AppB';
export const counterContext = React.createContext()

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
export default function AppA() {
    const [count,dispatch] =useReducer(reducer,initialValue)
  return (
    <div>
        <h2> useReduce <hr></hr></h2>
        <div>counting {count}</div>
        <counterContext.Provider value={{dispatchFn:dispatch}} >
            <AppB />
        </counterContext.Provider>
    </div>
  )
}
