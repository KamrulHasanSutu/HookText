import React from "react";

class Inputs extends React.Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })

    }
    handleCheckbox = (e) => {
        this.setState({
            agree: e.target.checked
        })
    }
    // if uncheckd hle data ber kore dite hbe...
    handleSkillChange = (e) => {
        // if select or tick
        if (e.target.checked) {
            this.setState({
                skills: [...this.state.skills, e.target.value]  // addig old with new data // immutable way // new create array & pass
            })
        } else { // un-check ..remove out array element
            const skills = this.state.skills.filter(skill => skill !== e.target.value);
            this.setState({ skills });
        }
    }

    render() {

        const { name, country, bio, birthday, agree, skills } = this.state;
        return (
            <>
                <div className="form-control">

                    <h2>inputs :: all</h2>
                    <input className="form-control my-2" type="text" name="name" placeholder="enter your name" onChange={this.handleChange} value={name} />
                    <select className="form-control my-2" name="country" onChange={this.handleChange} value={country}>
                        <option>select your country</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Srilanka">Srilanka</option>
                    </select>
                    <textarea className="form-control my-2" name="bio" placeholder="tell me something about u" onChange={this.handleChange} value={bio}></textarea>
                    <input className="form-control my-2" type="date" name="birthday" onChange={this.handleChange} value={birthday} />

                    <input type="radio" name="gender" onChange={this.handleChange} value='male' />Male
                    <input type="radio" name="gender" onChange={this.handleChange} value='female' />Female
                    <input type="radio" name="gender" onChange={this.handleChange} value='other' />Other
                    <br />
                    <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckbox} /> I agree
                    <br />
                    <input type="checkbox" name="skills" value="Java" checked={skills.includes('Java')} onChange={this.handleSkillChange} /> Java
                    <input type="checkbox" name="skills" value="Javascript" checked={skills.includes('Javascript')} onChange={this.handleSkillChange} /> Javascript
                    <input type="checkbox" name="skills" value="Python" checked={skills.includes('Python')} onChange={this.handleSkillChange} /> Python
                    <input type="checkbox" name="skills" value="Golang" checked={skills.includes('Golang')} onChange={this.handleSkillChange} /> Golang

                    <button type="text" onClick={() => { console.log(this.state); }} >some text</button>
                </div>
            </>
        )
    }
}

export default Inputs;