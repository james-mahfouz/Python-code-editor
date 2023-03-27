import React, { useState } from "react";
import axios from "axios";

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

        return (
            <div>
                <h2>Show Messages</h2>
                <button onClick={fetchMessages}>Fetch Messages</button>
                <ul>
                {messages.map((message) => (
                    <li key={`${message.from}-${message.text}`}>{message.from}: {message.text}</li>
                ))}
                </ul>
            </div>
            );
}
export default ShowMessages;