import React, { Component } from 'react'
import { converter, toCelcious, toFerenheight } from './converter'
import TeamperatureInput from './TemperatureInput';
import BoillingVerdict from './BoillingVerdict'

export default class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c'
    }
    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        })
    }

    render() {
        const { temperature, scale } = this.state

        const celcious = scale === 'f' ? converter(temperature, toCelcious) : temperature;
        const fahrenheit = scale === 'c' ? converter(temperature, toFerenheight) : temperature

        return (
            <>
                <TeamperatureInput scale="c" handleChange={this.handleChange} temperature={celcious} />
                <TeamperatureInput scale="f" handleChange={this.handleChange} temperature={fahrenheit} />

                <BoillingVerdict temperature={parseFloat(temperature)} />
            </>
        )
    }
}
