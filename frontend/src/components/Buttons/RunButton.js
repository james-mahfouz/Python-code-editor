import React from "react";
import "./index.css";
import runImage from "../../images/run.PNG";

function RunButton(props) {
    return (
    <button  className="all-btn run-btn btn-image" onClick={props.onClick}>
        <img src={runImage} alt="any" />
        <p>RUN</p>
    </button>
    );
    }

export default RunButton;