import React from 'react';
import AllUsers from './AllUsers';
import SendMessage from './SendMessage';
import ShowMessages from './ShowRecievedMessages';
import './index.css';
import AdminLogo from '../AdminLogo';




function Chatting() {

    return (
        <div className='main-page'>
        <AdminLogo/>
        <AllUsers />
        <SendMessage/>
        <ShowMessages/>
        </div>
    
    );
}

export default Chatting;