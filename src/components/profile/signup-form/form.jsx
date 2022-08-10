import React from "react";
import PropTypes from "prop-types";
import TextInput from "./text-input";


const Form = ({ values, agreement, errors, handleChange, handleAgreement, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Your Name"
                placeholder="max pane"
                value={values.name}
                error={errors.name}
                onChange={handleChange}
            />
            <TextInput
                name="email"
                label="your Email"
                type="email"
                placeholder="xxxxxx@gmail.com"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <TextInput
                name="password"
                label="your Password"
                type="password"
                placeholder="*********"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <TextInput
                name="birthDate"
                label="put your BirthDate plz"
                type="date"
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />

            <div className="form-group">
                <label className="mr-7"><input type="radio" name="gender" value="Male" onChange={handleChange} className="form-group mr-2" />Male</label>
                <label className="mr-7"><input type="radio" name="gender" value="Female" onChange={handleChange} className="form-group mr-2" />Female</label>
                <label className="mr-7"><input type="radio" name="gender" value="Other" onChange={handleChange} className="form-group mr-2" />Other</label>
                {errors.gender && <div className="invdlid-feedback">{errors.gender}</div>}
            </div>


            <div className="form-group">
                <label>
                    <input type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement} className="form-group" />  I agree
                </label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={!agreement}>Submit</button>
        </form>
    )
}

Form.prototype = {
    values: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;