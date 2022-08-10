import React from "react";
import Form2 from "./form";


const initValues = {
    name: '',
    email: '',
    password: '',
    birthday: '',
    gender: '',

}
class SignupForm extends React.Component {
    state = {
        values: initValues,
        agreement: false
    }
    handleChange = e => {
        this.setState({
            values: {
                ...this.state.values, [e.target.name]: e.target.value
            }
        })
    }
    handleAgreement = (e) => {
        this.setState({
            agreement: e.target.checked
        })
    }
    handleSubmit = e => {
        e.preventDefault();

        console.log('1.state',this.state);
        console.log('2.values',this.state.values);
        console.log('3.agreement',this.state.agreement);
        this.props.createUser(this.state.values);
        e.target.reset();
        this.setState({ values: initValues, agreement: false })
    }

    render() {
        return (
            <div>
                <h2>SIgn up from Four</h2>
                <Form2
                    values={this.state.values}
                    agreement={this.state.agreement}
                    handleChange={this.handleChange}
                    formSubmit={this.handleSubmit}
                    hangleAgreement={this.handleAgreement}
                />
            </div>
        )
    }
}

export default SignupForm;