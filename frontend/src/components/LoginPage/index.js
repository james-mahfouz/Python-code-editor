import React, { useState } from 'react'; 
import axios from 'axios';
import LoginButton from '../Buttons/LoginButton';
import Logo from '../../images/logo.png'
// import "./index.css"
import "../MySignup/index.css"



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
        <div className='signup-form'>
        <img className='logo' src={Logo} alt="logo" />
        <h1>Login</h1><br/>
        <form onSubmit={handleSubmit}>
             <div className='signup-container'>
                <label className='label' htmlFor="email">Email:</label>
                <input className='input-field' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div><br/>

             <div className='signup-container'>
                <label className='label' htmlFor="name">Name:</label>
                <input className='input-field pass' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='loginn-btn'>
                <LoginButton/>
            </div>

            <div className='signup-container'>
                <label className='label' htmlFor="name">Don't have an account ?<a href='signup'>Signup</a></label>
            </div>
        </form>
        </div>
    );
}

export default Login;