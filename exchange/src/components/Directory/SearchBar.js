import React, { useState } from 'react';
import Dropdown from './Dropdown'
import searchButton from '../../imgs/search.svg';
import '../../App.css';
import './SearchBar.css';

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTag, setSearchTag] = useState("Textbooks");
    const options = ["Textbooks", "Notes", "Skills"];

    const handleTextFieldChange = (e) =>{
        setSearchQuery(e.target.value);
    }

    const handleDropdownChange = (res) => {
        setSearchTag(res);
    }

    const submit = (e) => {
        if (e.type === "keypress" && e.key !== "Enter") return;
        const res = {
            query: searchQuery,
            tag: searchTag
        };
        props.handleSearch(res);
    }

    const handleClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("mousedown");
        e.target.classList.toggle("mouseup");
    }

    return (
        <div className="search-bar-wrapper">
            <Dropdown options={options} onChange={handleDropdownChange}
                className="dropdownMenu"/>
            <input type="text" className="search-bar"
                value={searchQuery} onChange={handleTextFieldChange}
                onKeyPress={submit} />
            <img src={searchButton} alt="search-button"
                className="mouseup search-button" onClick={submit}
                onMouseDown={handleClick}
                onMouseUp={handleClick} />
        </div>
    )
}

export default SearchBar;
