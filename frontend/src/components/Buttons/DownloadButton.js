import React from "react";
import "../index.css";
import downloadImage from "../../images/download.png";

function DownloadButton() {
    return (
        <button className="all-btn run-btn btn-image">
        <img src={downloadImage} alt="any" />
        <p>DOWNLOAD</p>
        </button>
    );
    }

export default DownloadButton;
