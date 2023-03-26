import React, { useState } from 'react';


function Chatting() {
    const [sender, setSender] = useState('');
    const [email, setReciever] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(sender, email, password)
        const data = new FormData()
        data.append('sender', sender)
        data.append('reciever', reciever)
        data.append('text', text)
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={name} onChange={(e) => setSender(e.target.value)} />
            </label>
            <br />
            <label>
            reciever:
            <input type="reciever" value={reciever} onChange={(e) => setReciever(e.target.value)} />
            </label>
            <br />
            <label>
            Text:
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <br />
            <button type="submit">Send</button>
        </form>
        </div>
    );
}

// export default Chatting;