import React from 'react'

export default function BoillingVerdict({ temperature }) {
    if (temperature) {
        if (temperature >= 100) {
            return (
                <h2 style={{ color: 'gray' }}>In <span style={{ color: 'red' }}>{temperature}</span> degree water would boiled</h2>
            )
        } else {
            return (
                <h2 style={{ color: 'gray' }}>In <span style={{ color: 'green' }}> {temperature}</span> degree not boiled</h2>
            )
        }
    } else {
        return <h2 style={{ color: 'gray' }}>Plz input temperature</h2>
    }
}
