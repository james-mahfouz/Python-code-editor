import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import ClearButton from '../Buttons/ClearButton';
import RunButton from '../Buttons/RunButton';
import './index.css'
import axios from 'axios';
import DownloadButton from '../Buttons/DownloadButton';
import SaveButton from '../Buttons/SaveButton';


const CodeContainer=({selectedCode})=>{
  
    let token = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };
    const navigate = useNavigate()
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [code_title, setTitle] = useState('');

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

    const handleDownload = async () => {
        const response = await axios.get("http://localhost:8000/api/v1/verify", token)
        if (!response.data.success){
          navigate("/login")
        } else{
        const blob = new Blob([code], {type: "text/plain;charset=utf-8"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = "my_code.txt";
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    };

    useEffect(() => {
      if (selectedCode !== null) {
        setCode(selectedCode);
      }
    }, [selectedCode]);

    const save_code = async () => {
      const response = await axios.get("http://localhost:8000/api/v1/verify", token)
      if (!response.data.success){
          navigate("/login")
      } else{
        const data = new FormData()
        data.append('code', code)
        data.append('title', code_title)
        console.log(code, code_title) 
        const response = await axios.post('http://localhost:8000/api/v1/save_code', data, token);
        console.log(response)

      }
    }
    
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
          <textarea className='code-editor code-output' value={output} readOnly />

 
        </div>
        <div className='left-editor'>
            <div onClick={handleDownload}><DownloadButton/></div> 
            <div onClick={save_code}><SaveButton/></div>
            <input className='title_input' value={code_title} onChange={(e) => setTitle(e.target.value)} placeholder='enter code title'></input>
        </div>
      </div> 
      );
}

export default CodeContainer;