import React, { useState } from 'react';
import ClearButton from '../Buttons/ClearButton';
import RunButton from '../Buttons/RunButton';
import './index.css'
import axios from 'axios';


const CodeContainer=()=>{

const [code, setCode] = useState('');
const [output, setOutput] = useState('');

const handleSubmit = async (e) => {

    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:8000/api/v1/compile', { code });
        setOutput(response.data.output+ response.data.error);

    } catch (error) {
        setOutput('Compilation failed. Please try again.');
    }
    };
    const handleClear = () => {setOutput('');};



  return (
      <div className="code-container">
      
      <RunButton onClick={handleSubmit}/>

      <div className="code-editor">
        <textarea
          className="code-editor-textarea"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </div>
      <ClearButton onClick={handleClear} />
      <textarea className='code-editor' value={output} readOnly />

      </div>
    );
  }

  export default CodeContainer;