import React from "react";
import "./index.css";
import logoutImage from "../../images/logout.png";

function MessageIcon() {
    return (
        <button className="all-btn search-btn">
        <img src={logoutImage} alt="any" className="logout_icon"/>
        </button>
    );
    }

export default MessageIcon;