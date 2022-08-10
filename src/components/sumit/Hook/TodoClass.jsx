import React, { Component } from 'react'

export default class TodoClass extends Component {
    state = {
        todo: '',
        warning: null
    }
    handleChange = e => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js')
            ? 'You nee Javascript Skill to compleate the task.Do u have it'
            : null;

        this.setState({
            todo: inputValue,
            warning
        })
    }
    render() {
        const { todo, warning } = this.state
        return (
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.handleChange} cols="20" rows="1"></textarea>
                </p>
                <hr />
                <h2>{warning || 'Good Choice'}</h2>
            </div>
        )
    }
}
