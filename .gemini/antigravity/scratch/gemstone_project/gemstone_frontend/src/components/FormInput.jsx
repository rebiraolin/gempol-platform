import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder, required = false, min, max }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="form-control"
                min={min}
                max={max}
            />
        </div>
    );
};

export default FormInput;
