import React from 'react';
import AllUsers from './AllUsers';
import SendMessage from './SendMessage';



function Chatting() {

    return (
        // <div>
        //     <form onSubmit={handleSubmit}>
        //         <label>
        //             Message:
        //             <input
        //                 type="text"
        //                 name="text"
        //                 value={text}
        //                 onChange={handleInputChange} />
        //         </label>
        //         <br />
        //         <button type="submit">Send Message</button>
        //     </form>
        // </div>
        <>
        <AllUsers />
        <SendMessage/>
        </>
        // <>chatting page</>
    );
}

export default Chatting;