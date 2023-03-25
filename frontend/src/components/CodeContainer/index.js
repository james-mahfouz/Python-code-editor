import React, { useState } from 'react';
import ClearButton from '../Buttons/ClearButton';
import RunButton from '../Buttons/RunButton';
import './index.css'


const CodeContainer=()=>{

const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-container">
    
    <RunButton/>
    <div className="code-editor">
      <textarea
        className="code-editor-textarea"
        value={code}
        onChange={handleCodeChange}
        placeholder="Write your code here..."
      />
    </div>
     <ClearButton/>
    <div className="code-editor output"></div>
    </div>
  );
}

export default CodeContainer;