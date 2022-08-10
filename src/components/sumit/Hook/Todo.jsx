
import React, { useState } from 'react'

export default function Todo() {
   
    const [todo,setTodo] = useState('');
    const [warning,setWarning]= useState(null)

    const handleChange = (e)=> {
        const inputValues = e.target.value;
        const updateWarning = inputValues.includes('.js') ?'wow you have done great':null

        setTodo(inputValues)
        setWarning(updateWarning)
    }

    return (
        <div>
            <p>{todo}</p>

            <textarea name="todo" value={todo} onChange={handleChange} cols="20" rows="1"></textarea>
            <h2>{warning || 'Good choice'}</h2>
        </div>
    )
}
