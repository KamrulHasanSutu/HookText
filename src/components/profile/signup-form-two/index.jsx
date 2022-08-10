import React from "react";
import Classes from './index.module.css'
import Form from "./form";




// Main
class SignupForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    formChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    formSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        e.target.reset();
        this.setState({ name: '', email: '', password: '' })
    }

    render() {
        return (
            <>
            <div className={Classes.divStyle}>
                    <h2 >Calling from [index.jsx]</h2>
                </div>
                <Form
                    values={this.state} 
                    formChange={this.formChange}
                    formSubmit={this.formSubmit}
                />
            </>
        )
    }
}

export default SignupForm;