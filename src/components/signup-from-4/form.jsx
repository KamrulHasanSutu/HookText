import React from "react";
import PropTypes from "prop-types";
import TextInput from "./text-input";

const Form2 = ({ values, agreement, handleChange, formSubmit, hangleAgreement }) => {
    return (
        <form onSubmit={formSubmit}>
            <TextInput
                name="name"
                label='Name'
                placeholder='kamrul'
                value={values.name}
                onChange={handleChange}
            />
            <TextInput
                name="email"
                type="email"
                label="email"
                placeholder="xxxx@email.com"
                value={values.email}
                onChange={handleChange}

            />
            <TextInput
                name="password"
                type="password"
                label="password"
                placeholder="***********"
                value={values.password}
                onChange={handleChange}
            />
            <TextInput
                name="birthday"
                type="date"
                label="birthday"
                value={values.birthday}
                onChange={handleChange}

            />

            <div className="from-group">
                <label>
                    <input type="radio" name="gender" value='Male' onChange={handleChange} />Male
                    <input type="radio" name="gender" value='female' onChange={handleChange} />Female
                    <input type="radio" name="gender" value='other' onChange={handleChange} />other
                </label>
            </div>

            <TextInput
                name="agreement"
                type="checkbox"
                label="i agree"
                value={agreement}
                checked={agreement}
                onChange={hangleAgreement}
            />

            <button type="submit" disabled={!agreement}>Submit</button>
        </form>
    )
}

Form2.propTypes = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    hangleAgreement: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    formSubmit: PropTypes.func.isRequired
}

export default Form2;