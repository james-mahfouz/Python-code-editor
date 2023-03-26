import React, { useState } from 'react';
import axios from 'axios';
const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
};

function Chatting() {
    const [receiver, setReceiver] = useState('');
    const [text, setMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "text") {
            setMessage(value);
        } else if (name === "receiver") {
            setReceiver(value);
        }
        };
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
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Message:
                    <input
                        type="text"
                        name="text"
                        value={text}
                        onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
            
        
    );
}

export default Chatting;