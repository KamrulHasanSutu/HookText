import React from "react";
import PropTypes from "prop-types";
import TextInput from "./text-input";

// Form
const Form = (props) => (
    <form onSubmit={props.formSubmit}>

        <TextInput
            name="name"
            label="Enter name"
            placeholder="jon doe"
            value={props.values.name}
            onChange={props.formChange}
        />
        <TextInput
            name="email"
            type="email"
            label="Enter email"
            placeholder="xxxxx@gmail.com"
            value={props.values.email}
            onChange={props.formChange}
        />
        <TextInput
            name="password"
            type="password"
            label="Enter password"
            placeholder="*******"
            value={props.values.password}
            onChange={props.formChange}
        />
        <button type="submit">Submit</button>
    </form>
)


Form.propType = {
    values: PropTypes.object.isRequired,
    formChange: PropTypes.func.isRequired,
    formSubmit: PropTypes.func.isRequired

}

export default Form;