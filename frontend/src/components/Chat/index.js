import React, { useState } from 'react';
import axios from 'axios';
const token = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
  };

function Chatting() {
    // const [sender, setSender] = useState('');
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
        // console.log(sender, reciever, text)
        const data = new FormData()
        data.append('receiver', receiver)
        data.append('text', text)

        //connecting to api's
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/send_message', data,token);
    
            alert('Message sent successfully!');
    
            // Store the token in local storage
            localStorage.setItem('token', response.data.authorisation.token);
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
                <label>
                    Receiver:
                    <input
                        type="text"
                        name="receiver"
                        value={receiver}
                        onChange={handleInputChange} />
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
            
          
    );
}

export default Chatting;