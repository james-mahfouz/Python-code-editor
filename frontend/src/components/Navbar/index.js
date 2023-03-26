import React from 'react';
import { useNavigate } from "react-router-dom";
import NavLogo from '../NavLogo';
import LoginButton from '../Buttons/LoginButton';
import SignupButton from '../Buttons/SignupButton';
import './index.css'

const Navbar = () => {
  const navigate = useNavigate();

  const goSignup = () => {
    navigate("/signup");
  }

  const goLogin =()=>{
    navigate('/login');
  }

  return (
    <nav className="navbar">
      <div>
        <NavLogo />
      </div>
      <div className="navbar-end">
        <div onClick={goSignup}><SignupButton /></div>
        <div onClick={goLogin}><LoginButton onClick={goLogin}/></div>
      </div>
    </nav>
  );
}

export default Navbar;
