import React, { useState } from "react";
import axios from "axios";
import './index.css';

function ShowMessages(){
    const [messages, setMessages] = useState([]);

    
    const token = {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const fetchMessages = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/v1/show_messages", token);
            setMessages(response.data.data);
        } catch (error) {
            console.error(error);
        }
        };
        // fetchMessages()
        return (
            <div className="inbox-container">
                <h2>Show Messages</h2>
                
                {messages.length > 0 ? (
                    <ul>
                        {messages.map((message) => (
                        <li key={`${message.from}-${message.text}`}>
                            {`From: ${message.from}, Text: ${message.text}`}
                        </li>
                        ))}
                    </ul>
                    ) : (
                    <p>You have no messages.</p>
                    )}
                    <button className="submit-button" onClick={fetchMessages}>INBOX</button>
            </div>
            );
}
export default ShowMessages;