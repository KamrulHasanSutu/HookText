import React from "react";
import TextInput from "./text-input";
import PropTypes from "prop-types";

const Form = (props) =>(
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name="name"
            label="Enter your name plz"
            placeholder="jon doe"
            value={props.values.name}   // bcz values is an object 
            onChange={props.handleChange}
        />
         <TextInput 
            name="email"
            type="email"
            label="Enter the email"
            placeholder="xxxxx@gmail.com"
            value={props.values.email}
            onChange={props.handleChange}
         /> 
         <TextInput 
            name="password"
            type="password"
            label="Enter password plz"
            placeholder="*********"
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type="submit">Submit</button>
    </form>
)
Form.propTypes = {
    values:       PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;