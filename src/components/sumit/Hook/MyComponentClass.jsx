import React from "react";


class MyComponent extends React.Component {

    state = {
        count: 0,
        date: new Date()
    }
    componentDidMount() {
        const { count } = this.state;
        document.title = `CLicked ${count} times`
        setInterval(this.tick, 1000)
    }
    componentDidUpdate() {
        const { count } = this.state;
        document.title = `CLicked ${count} times`
    }
    addClick = () => {
        this.setState(({ prev }) => ({
            count: prev + 1
        }))
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={this.addClick}>Click</button>
                </p>
            </div>
        )
    }
}

export default MyComponent