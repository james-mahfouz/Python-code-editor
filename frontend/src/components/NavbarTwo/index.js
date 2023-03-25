import React from 'react';
import NavLogo from '../NavLogo';
import MessageButton from '../Buttons/MessageButton';
import LogoutButton from '../Buttons/LogoutButton';
import '../Navbar/index.css'
import SearchButton from '../Buttons/SearchButton';
const NavbarTwo=()=> {
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
        <MessageButton />
        <LogoutButton />
        
      </div>
    </nav>
  );
}

export default NavbarTwo;