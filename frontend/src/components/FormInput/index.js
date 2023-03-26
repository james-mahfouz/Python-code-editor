import React from 'react';
import './index.css'
const FormInput = ({ input }) => {
    const isPassword = input === "password";

    return (
        <div className='input-container'>
            <label className='label'>{input}</label>
            <input className='input-field'
            type={isPassword ? "password" : "text"}
            placeholder={input}
            />
           
        </div>
        
    );
}

export default FormInput;