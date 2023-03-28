import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import './index.css'
import AdminLogo from '../../components/AdminLogo'

function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/get_all_user_admin', 
    {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(response => {
        console.log(response.data)
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
   const navigate = useNavigate()

  return (
    <div>
      <div className='table-container'>
        <div className='admin-logo'><AdminLogo/></div>
        
        <table className='table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {users && users.users && users.users.length > 0 ? (
          users.users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">{navigate("/landing")}</td>
          </tr>
        )}
      </tbody>
    </table>
    </div>
    </div>
    
    
  );
}

export default AdminPanel;
