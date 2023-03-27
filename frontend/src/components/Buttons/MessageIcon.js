import React from "react";
import "./index.css";
import messageImage from "../../images/message.png";

function MessageIcon() {
    return (
        <button className="all-btn search-btn">
        <img src={messageImage} alt="any" />
        </button>
    );
    }

export default MessageIcon;