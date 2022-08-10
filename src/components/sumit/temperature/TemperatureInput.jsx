import React from 'react'
const scaleNames = {
    c: 'celcious',
    f: 'farhenehight'
}

export default function TeamperatureInput({ temperature, scale, handleChange }) {
    return (
        <fieldset>
            <legend>Enter temperatue in {scaleNames[scale]}</legend>
            <input type="text" value={temperature} onChange={(e) => handleChange(e, scale)} />
        </fieldset>
    )
}

