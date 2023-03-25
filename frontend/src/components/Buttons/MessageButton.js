import React from "react";
import "./index.css";
import messageImage from "../../images/message.png";

function MessageButton() {
    return (
        <button className="all-btn run-btn btn-image">
        <img src={messageImage} alt="any" />
        <p>MESSAGES</p>
        </button>
    );
    }

export default MessageButton;