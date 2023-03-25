import React, { useState } from 'react';
import { SignupButton } from '../buttons/SignupButton';
import axios from 'axios';

    function PopupForm() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        const response = await axios.post('http://localhost:8000/api/v1/auth/signup', {
            name: name,
            email: email,
            password: password
        });

        if (response.status === 201) {
            alert('Signup successful!');
        } else {
            alert('Signup failed!');
        }
        } catch (error) {
        console.error(error);
        alert('Signup failed!');
        }
    };

    return (
        <div>
        <SignupButton onClick={() => setIsFormOpen(true)}>Open form</SignupButton>

        {isFormOpen && (
            <div className="popup">
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
                <button onClick={() => setIsFormOpen(false)}>Close form</button>
            </form>
            </div>
        )}
        </div>
    );
}

export default PopupForm;