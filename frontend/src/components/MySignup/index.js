import React, { useState } from 'react';
import axios from 'axios';
import SignupButton from '../Buttons/SignupButton';
import Logo from '../../images/logo.png'
import './index.css'

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password)
        const data = new FormData()
        data.append('name', name)
        data.append('email', email)
        data.append('password', password)

        try {
        const response = await axios.post('http://localhost:8000/api/v1/auth/signup', data);

        alert('Signup successful!');

        // Store the token in local storage
        localStorage.setItem('token', response.data.authorisation.token);
        } catch (error) {
        console.log(error);
        alert('Signup failed. Please try again.');
        }
    };

    return (
        <div className='signup-form'>
        <img className='logo' src={Logo} alt="logo" />
        <h1>Create Account</h1><br/>
        <form onSubmit={handleSubmit}>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input className='input-field' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div><br/>

             <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div><br/>

             <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input className='input-field pass' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <SignupButton className="signup-btn"/>
            <div className='signup-container'>
                <label className='label' htmlFor="name">Already have an account?<a href='signup'>Signin</a></label>
            </div>
        </form>
        </div>
    );
}

export default Signup;