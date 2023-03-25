import React, { useState } from 'react';
import SignupButton from '../../components/Buttons/SignupButton';
import axios from 'axios';



function Signup(){
    const [isFormOpen, setIsFormOpen] = useState(false);
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
        setIsFormOpen(false);

        // Store the token in local storage
        localStorage.setItem('token', response.data.authorisation.token);
        } catch (error) {
        console.error(error);
        alert('Signup failed. Please try again.');
        }
    };

    return(
        <div>
        <SignupButton onClick={() => setIsFormOpen(true)}>Open form</SignupButton>
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
        </div>
    );

}

export default Signup;