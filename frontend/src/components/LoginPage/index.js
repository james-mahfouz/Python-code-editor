import React, { useState } from 'react'; 
import axios from 'axios';




const Login = ()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData()
        data.append('email', email)
        data.append('password', password)

        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/login', data);
        
            alert('Signup successful!');

            localStorage.setItem('token', response.data.authorisation.token);
            } catch (error) {
                console.error(error);
                alert('Signup failed. Please try again.');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button type="submit">Submit</button>
        </form>
    );

}

export default Login;