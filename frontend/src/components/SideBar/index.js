import React, { useState, useEffect } from 'react';
import './index.css'
import axios from 'axios';
const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

const Sidebar = ()=> {
  const [savedFiles, setSavedFiles] = useState([]);
  const username = localStorage.getItem('name');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/get_code', token);
        console.log("hello",response.data.data[1].title)
        console.log(response.data.data)
        setSavedFiles(response.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const codeStatus =(file)=>{
    let title
    return title = file.title !== ""? file.title: file.code

  }

  return (
    
    <div className="container">
      <div className="sidebar">
        <h2>{username}</h2>
        <div className="content">
          <h3>Saved Files</h3>
          <ul>
            {savedFiles.map((file, index) => (
              <li id={file.id} key={index}> {index} { codeStatus(file) }</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
