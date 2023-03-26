import React, { useState } from 'react';


function Chatting() {
    // const [sender, setSender] = useState('');
    const [reciever, setReciever] = useState('');
    const [text, setText] = useState('');

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
        data.append('sender', sender)
        data.append('reciever', reciever)
        data.append('text', text)

        //connecting to api's
        try {
            const response = await axios.post('http://localhost:8000/api/v1/auth/send_message', data);
    
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
                    To:
                    <input
                        type="text"
                        name="receiver"
                        value={receiver}
                        onChange={handleInputChange} />
                </label>
                <br/>
                <label>
                    Message:
                    <textarea name="text" value={text} onChange={handleInputChange}  rows="7" cols="80"></textarea>
                    
                </label>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </div>
            
          
    );
}

export default Chatting;