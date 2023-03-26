import React, { useState } from 'react';
import axios from 'axios';
const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};


function Chat(){
    const [receiver, setReceiver] = useState('');
    const [text, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('text', text)
        setReceiver(2)
        try {
            await axios.post(`http://localhost:8000/api/v1/chats/${receiver}`, data,token);
    
            alert('Message sent successfully!');
            
        } catch (error) {
            console.log(error);
            alert('Message not sent.');
        }
    };
    return(
        <>
        
        </>

    );
}