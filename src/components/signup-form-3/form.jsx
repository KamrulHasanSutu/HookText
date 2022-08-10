import React from "react";
import PropTypes from "prop-types";
import TextInput from "./text-input";

// Form
const Form = ({ values, agreement,skills,formSkills, formSubmit, formChange, formAgreement }) => (
    <form onSubmit={formSubmit}>
        <TextInput
            name="name"
            label="Enter name"
            placeholder="jon doe"
            value={values.name}
            onChange={formChange}
        />
        <TextInput
            name="email"
            type="email"
            label="Enter name"
            placeholder="xxxxx@gmail.com"
            value={values.email}
            onChange={formChange}
        />
        <TextInput
            name="password"
            type="password"
            label="Enter password"
            placeholder="**********"
            value={values.password}
            onChange={formChange}
        />
        <TextInput
            name="birthDay"
            type="date"
            label="birthdate"
            value={values.birthDay}
            onChange={formChange}
        />

        {/* radio */}
        <TextInput
            name="gender"
            type="radio"
            label="Male"
            value='Male'
            onChange={formChange}
        />
        <TextInput
            name="gender"
            type="radio"
            label="Female"
            value="Female"
            onChange={formChange}
        />
        <TextInput
            name="gender"
            type="radio"
            label="Other"
            value="Other"
            onChange={formChange}
        />
        {/* radio */}
        <TextInput
            name="agreement"
            type="checkbox"
            label="I agree"
            checked={agreement}
            value={agreement}
            onChange={formAgreement}
        />
        {/* skills */}
      <div>
      <TextInput
            name="skills"
            type="checkbox"
            label="Java"
            checked={skills.includes("Java")}
            value="Java"
            onChange={formSkills}
        />
        <TextInput
            name="skills"
            type="checkbox"
            label="Python"
            checked={skills.includes("Python")}
            value="Python"
            onChange={formSkills}
        />
        <TextInput
            name="skills"
            type="checkbox"
            label="Golang"
            checked={skills.includes("Golang")}
            value="Golang"
            onChange={formSkills}
        />
      </div>



        <button type="submit" disabled={!agreement}>Submit</button>
    </form>
)


Form.propType = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    formChange: PropTypes.func.isRequired,
    formAgreement: PropTypes.func.isRequired

}

export default Form;