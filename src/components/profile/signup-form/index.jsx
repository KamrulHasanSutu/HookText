import React from "react";
import Form from "./form";
import PropTypes from "prop-types";

const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class SignupForm extends React.Component {
    state = {
        values: initValues,
        agreement: false,
        errors: {}

    }

    handleChange = (e) => {
        this.setState({
            values: {
                ...this.state.values,
                [e.target.name]: e.target.value
            }
        })
    }
    handleAgreement = (e) => {
        this.setState({
            agreement: e.target.checked,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errors } = this.validate();

        if (isValid) {
            this.props.createUser(this.state.values);
            e.target.reset();
            // console.log(this.state);
            this.setState({ values: initValues, agreement: false, errors: {} })
        } else {
            this.setState({ errors })
        }
    }

    validate = () => {
        const errors = {};
        const { values: { name, email, password, gender, birthDate } } = this.state;

        if (!name) { errors.name = "plax provide your name"; };
        if (!email) { errors.email = "plz provide your email"; }
        if (!password) { errors.password = "plz provide your passowrd"; }
        if (!gender) { errors.gender = "plz provide your gender"; }
        if (!birthDate) { errors.birthDate = "plz provide your birthDay"; }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }

    }

    render() {

        return (
            <div>
                <h2>Signup Form</h2>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    errors={this.state.errors}
                    handleChange={this.handleChange}
                    handleAgreement={this.handleAgreement}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignupForm.prototypes = {
    createUser: PropTypes.func.isRequired
};

export default SignupForm;