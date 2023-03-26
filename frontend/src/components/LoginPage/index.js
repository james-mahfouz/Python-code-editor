import React, { useState } from 'react'; 
import axios from 'axios';
import Logo from '../FormLogo';
import "./index.css"
import NavbarTwo from '../NavbarTwo';



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
            localStorage.setItem('token', response.data.authorisation.token);
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div className='form_container'>
            <Logo />
            <h1>Login</h1>
            <form className='form' onSubmit={handleSubmit}>
                
                <div className='input_field'>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='input_field'>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;