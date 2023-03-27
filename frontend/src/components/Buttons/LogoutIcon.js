import React from "react";
import "./index.css";
import logoutImage from "../../images/logout.png";

function MessageIcon() {
    return (
        <button className="all-btn search-btn">
        <img src={logoutImage} alt="any" />
        </button>
    );
    }

export default MessageIcon;