import React from 'react';
import { useState } from 'react';
import NavLogo from '../NavLogo';
import MessageButton from '../Buttons/MessageButton';
import LogoutButton from '../Buttons/LogoutButton';
import '../Navbar/index.css'
import SearchButton from '../Buttons/SearchButton';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const NavbarTwo=()=> {
  const [name, setName] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goChat =()=>{
    navigate('/chat');
  }

  const handleLogout = () => {
    const token = localStorage.getItem('token');
    axios.post('http://localhost:8000/api/v1/logout', {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        localStorage.removeItem('token');
        navigate('/');
      }).catch((error) => {
        console.log(error);
      });
  };
  
  const handleSearch = async () =>{
    const data = new FormData();
    data.append('name', name)
    const response = await axios.post('http://localhost:8000/api/v1/get_developers',data,
    {
      headers: {Authorization: `Bearer ${localStorage.getItem('token')}`
    }})
    console.log(response.data)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  
return (
  <nav className="navbar">
  <div>
    <NavLogo />
  </div>
  <div className="navbar-end">
    <div className="menu-icon" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    {isMenuOpen && (
      <div className="navbar-menu">
        <div className="search-bar">
          <input
            className="search-input"
            type="text"
            placeholder="SEARCH..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div onClick={handleSearch}>
              <SearchButton />
            </div>
          </div>
          <div className="navbar-end">
            <div onClick={goChat}>
              <MessageButton />
            </div>
            <div onClick={handleLogout}>
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
  );
}

export default NavbarTwo;