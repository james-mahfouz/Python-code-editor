import { useState } from "react";
import axios from "axios";
import './index.css'

const token ={
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

function SendMessage(){
    const recieverId = localStorage.getItem("selectedUserId");
    const [receiver, setReceiver] = useState(recieverId);

    
    const [text, setText] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "text") {
            setText(value);
        } else if (name === "receiver") {
            setReceiver(value);
        }
        };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("text", text);
        try {
            await axios.post(
            `http://localhost:8000/api/v1/chats/${receiver}`,
            data,
            token
            );
    
            alert("Message sent successfully!");
        } catch (error) {
            console.log(error);
            alert("Message not sent.");
        }
        };
        
        const selectedUserId = localStorage.getItem("selectedUserId");

        
    return (
        <div class="send-message-container">
        <h2>Send Message</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Receiver ID:
            <input
                type="text"
                name="receiver"
                value={selectedUserId}
                onChange={handleInputChange}
                disabled
            />
            </label>
            <br />
            <label>
            Message:
            <input
                type="text"
                name="text"
                value={text}
                onChange={handleInputChange}
            />
            </label>
            <br />
            <button type="submit">Send Message</button>
        </form>
        </div>
    );

}

export default SendMessage;