import React from "react";
import Form from "./form";
class Input extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }
    handleSubmit = (e)=> {
        e.preventDefault();
        console.log(this.state); // optinal ..from submit
        e.target.reset();
        this.setState({name:'',email:'',password:''})
    }
    render(){
        return(
            <div>
                <h1>Working with form in React from [index]</h1>
                    <Form 
                        values={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    /> 
            </div>
        )
    }
}
export default Input;