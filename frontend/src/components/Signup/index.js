import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
        name,
        email,
        password,
        };

        try {
        const response = await axios.post('http://localhost:8000/api/v1/auth/signup', formData);

        alert('Signup successful!');
        setName('');
        setEmail('');
        setPassword('');

        // Store the token in local storage
        localStorage.setItem('token', response.data.authorisation.token);
        } catch (error) {
        console.error(error);
        alert('Signup failed. Please try again.');
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <br />
            <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}

export default Signup;