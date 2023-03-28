import React from 'react';
import AllUsers from './AllUsers';
import SendMessage from './SendMessage';
import ShowMessages from './ShowRecievedMessages';
import { useNavigate } from "react-router-dom";

import './index.css';





function Chatting() {
    const navigate = useNavigate();

    
    const goLanding = () => {
        navigate("/landing");
    }
    return (
        <div className='main-page'>
        <button className=' back-button' onClick={goLanding}>back</button>
        <AllUsers />
        <SendMessage/>
        <ShowMessages/>
        </div>
    
    );
}

export default Chatting;