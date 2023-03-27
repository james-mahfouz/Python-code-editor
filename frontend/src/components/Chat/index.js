import React from 'react';
import AllUsers from './AllUsers';
import SendMessage from './SendMessage';
import ShowMessages from './ShowRecievedMessages';



function Chatting() {

    return (
        <>
        <AllUsers />
        <SendMessage/>
        <ShowMessages/>
        </>
    
    );
}

export default Chatting;