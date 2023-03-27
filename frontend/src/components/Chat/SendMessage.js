import { useState } from "react";
import axios from "axios";
import './index.css';



function SendMessage(){
    const token ={
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    };
    const recieverId = localStorage.getItem("selectedUserId");
    const [receiver, setReceiver] = useState(recieverId);
    const[status,setStatus]=useState('')
    
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
            setStatus('Message sent successfully!')
            alert("Message sent successfully!");
        } catch (error) {
            console.log(error);
            setStatus('Message not sent.')
            alert("Message not sent.");
        }
        };
        
        const selectedUserId = localStorage.getItem("selectedUserId");

        
    return (
        <div className="send-message-container">

        <form onSubmit={handleSubmit}  className="form">
            <label className="message-status">

            <input
                type="text"
                name="receiver"
                
                value={status}
                onChange={handleInputChange}
                disabled
            />
            </label>
            <br />
            <label  className="message-area">

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