import React from "react";
import "./index.css";
import searchImage from "../../images/search.png";

function SearchButton() {
    return (
        <button className="all-btn search-btn">
        <img src={searchImage} alt="any" />
        </button>
    );
    }

export default SearchButton;