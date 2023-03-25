import React from 'react';
import NavLogo from '../NavLogo';
import LoginButton from '../Buttons/LoginButton';
import SignupButton from '../Buttons/SignupButton';
import './index.css'

const Navbar=()=> {
  return (
    <nav className="navbar">
      <div>
        <NavLogo />
      </div>
      <div className="navbar-end">
        <SignupButton />
        <LoginButton />
        
      </div>
    </nav>
  );
}

export default Navbar;
