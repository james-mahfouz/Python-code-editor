import React, { useState, useEffect } from 'react';
import ClearButton from '../Buttons/ClearButton';
import RunButton from '../Buttons/RunButton';
import './index.css'
import axios from 'axios';
import DownloadButton from '../Buttons/DownloadButton';
import SaveButton from '../Buttons/SaveButton';


const CodeContainer=({selectedCode})=>{

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

    const handleDownload = () => {
    const blob = new Blob([code], {type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = "my_code.txt";
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
   
  };

  useEffect(() => {
    if (selectedCode !== null) {
      setCode(selectedCode);
    }
  }, [selectedCode]);
  
    return (
      <div>
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
        <div className='left-editor'>
           <div onClick={handleDownload}><DownloadButton/></div> 
            <div><SaveButton/></div>
        </div>
      </div> 
      );
}

  export default CodeContainer;