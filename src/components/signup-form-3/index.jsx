import React from "react";
import Form from "./form";
// import Classes from './index.module.css'
const initValues = {
    name: '',
    email: '',
    password: '',
    birthDay: '',
    gender: '',
    // skills: []
}
class SignupForm3 extends React.Component {

    state = {
        values: initValues,
        agreement: false,
        skills: []
    }

    formSkills = e => {
        if (e.target.checked) {
            this.setState({
                skills: [...this.state.skills, e.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill => skill !== e.target.value)
            this.setState({skills})
        }

    }

    formChange = e => {
        this.setState({
            // [e.target.name]: e.target.value
            values: {
                ...this.state.values, [e.target.name]: e.target.value
            }
        })
    }
    formAgreement = e => {
        this.setState({
            agreement: e.target.checked
        })
    }

    formSubmit = e => {
        e.preventDefault();
        

        this.props.createUser(this.state.values, this.state.agreement, this.state.skills)
        console.log(this.state);
        e.target.reset();
        this.setState({ values: initValues, agreement: false })
    }

    render() {
        return (
            <>
                <h2 >Calling from [index.jsx]</h2>
                <Form
                    values={this.state.values}
                    agreement={this.state.agreement}
                    skills={this.state.skills}

                    formSkills={this.formSkills}
                    formChange={this.formChange}
                    formAgreement={this.formAgreement}
                    formSubmit={this.formSubmit}
                />
            </>
        )
    }
}

export default SignupForm3;