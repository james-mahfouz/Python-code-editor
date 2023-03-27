import { useState } from "react";
import axios from "axios";

const token ={
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
};

function SendMessage(){
    const [receiver, setReceiver] = useState("");
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

        
}