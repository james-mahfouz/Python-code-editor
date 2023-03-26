import React from "react";
import "./index.css";

function ClearButton(props) {
    return <button onClick={props.onClick} className="all-btn signup-btn">CLEAR</button>;
}

export default ClearButton;