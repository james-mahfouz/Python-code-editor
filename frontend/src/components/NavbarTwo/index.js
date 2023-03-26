import React from 'react';
import NavLogo from '../NavLogo';
import MessageButton from '../Buttons/MessageButton';
import LogoutButton from '../Buttons/LogoutButton';
import '../Navbar/index.css'
import SearchButton from '../Buttons/SearchButton';
import { useNavigate } from "react-router-dom";

const NavbarTwo=()=> {

  const navigate = useNavigate();

  const goChat =()=>{
    navigate('/chat');
  }


  return (
    <nav className="navbar">
      <div>
        <NavLogo />
      </div>
      <div className='search-bar'>
        <input className='search-input' type="text" placeholder='SEARCH...' />
        <SearchButton/>
      </div>
      <div className="navbar-end">
        <div onClick={goChat}><MessageButton/></div>
        <div><LogoutButton /></div>
        
      </div>
    </nav>
  );
}

export default NavbarTwo;