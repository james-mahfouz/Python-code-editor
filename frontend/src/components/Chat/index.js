import React from 'react';
import AllUsers from './AllUsers';
import SendMessage from './SendMessage';
import ShowMessages from './ShowRecievedMessages';
import './index.css';





function Chatting() {

    return (
        <div className='main-page'>
        
        <AllUsers />
        <SendMessage/>
        <ShowMessages/>
        </div>
    
    );
}

export default Chatting;