import React from 'react';
import NavLogo from '../NavLogo';
import MessageButton from '../Buttons/MessageButton';
import LogoutButton from '../Buttons/LogoutButton';
import '../Navbar/index.css'
import SearchButton from '../Buttons/SearchButton';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const NavbarTwo=()=> {

  const navigate = useNavigate();

  const goChat =()=>{
    navigate('/chat');
  }

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/');
  // };

    const handleLogout = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:8000/api/v1/logout', {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      localStorage.removeItem('token');
      console.log(response.data);
      navigate('/');
    }).catch((error) => {
      console.log(error);
    });
  };
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
        <div onClick={handleLogout}><LogoutButton /></div>
        
      </div>
    </nav>
  );
}

export default NavbarTwo;