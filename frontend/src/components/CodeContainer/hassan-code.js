import React, { useState } from 'react';
import axios from 'axios';
import ClearButton from '../Buttons/ClearButton';
import RunButton from '../Buttons/RunButton';

function CodeRunner(){
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:8000/api/v1/compile', { code });
            setOutput(response.data.output);
        } catch (error) {
            console.error(error);
            alert('Compilation failed. Please try again.');
        }
        };
}