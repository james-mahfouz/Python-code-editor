import React from 'react';
import './index.css'
const Sidebar=({ username, savedFiles })=> {
  return (
    
    <div className="container">
      <div className="sidebar">
        <h2>{username}</h2>
        <div className="content">
          <h3>Saved Files</h3>
          <ul>
            {savedFiles.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
  );
}

export default Sidebar;
