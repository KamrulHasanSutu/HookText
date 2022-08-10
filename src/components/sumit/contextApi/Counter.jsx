import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count:0
    }
    incrementCounter = ()=> {
        this.setState((prevState)=> ({
            count: prevState.count+1
        }))
    }

  render() {
    // const {render} = this.props;
    const {children} = this.props;
    const {count} = this.state

    // return( render(count, this.incrementCounter, this.name)) 
    return children(count, this.incrementCounter)
  }
}
