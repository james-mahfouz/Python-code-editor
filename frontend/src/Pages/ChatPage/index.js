import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.elements.messageInput.value;
    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    event.target.reset();
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="messageInput" placeholder="Type your message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
