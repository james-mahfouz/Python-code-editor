import React from 'react';
import { useState, useEffect, useRef } from 'react';
import NavLogo from '../NavLogo';
import MessageButton from '../Buttons/MessageButton';
import MessageIcon from '../Buttons/MessageIcon';
import LogoutButton from '../Buttons/LogoutButton';
import '../Navbar/index.css'
import './index.css'
import SearchButton from '../Buttons/SearchButton';
import LogoutIcon from '../Buttons/LogoutIcon';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const NavbarTwo=()=> {
  const [name, setName] = useState("")
  const [searched_name, setSearched_name] = useState("")
  const navigate = useNavigate();
  const searchedNameRef = useRef(null);


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
    setSearched_name(response.data.users)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchedNameRef.current && !searchedNameRef.current.contains(event.target)) {
        setSearched_name([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <nav className="navbar">
      <div>
        <NavLogo />
      </div>
        <div className='search-bar'>
          <input className='search-input' type="text" placeholder='SEARCH...' value={name} onChange={(e) => setName(e.target.value)} />
            <div onClick={handleSearch}><SearchButton /></div>
            <div className='searched_name' ref={searchedNameRef}>
            {searched_name && searched_name.map((name, index) => (
                <div key={name.id}>
                  <div onClick={goChat}> {index}){ name.name }</div><br/>
                </div>
              ))}
            </div>
          </div>
          <div className='navbar-buttons'>
            <div className="navbar-end">
              <div onClick={goChat}><MessageButton/></div>
              <div onClick={handleLogout}><LogoutButton /></div>
            </div>
          </div>
          <div className="navbar-icon">
            <div className="navbar-end">
              <div onClick={goChat}><MessageIcon/></div>
              <div onClick={handleLogout} className="logout"><LogoutIcon /></div>
            </div>
          </div>

    </nav>
  );
}

export default NavbarTwo;