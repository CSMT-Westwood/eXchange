import React, { useState } from 'react';
import Dropdown from './Dropdown'
import searchButton from '../../imgs/search.svg';
import '../../App.css';
import './SearchBar.css';

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchTag, setSearchTag] = useState(0);
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
            typeOfItem: searchTag
        };
        props.handleSearch(res);
    }

    const handleClick = (e) => {
        e.preventDefault();
        e.target.classList.toggle("s-mousedown");
        e.target.classList.toggle("s-mouseup");
    }

    return (
        <div className={`search-bar-wrapper ${props.className}`}>
            <Dropdown options={options} onChange={handleDropdownChange}
                className="search-bar-dropdown"/>
            <input type="text" className="search-bar-search-bar"
                value={searchQuery} onChange={handleTextFieldChange}
                onKeyPress={submit} />
            <img src={searchButton} alt="search-button"
                className="search-bar-mouseup search-bar-search-button" onClick={submit}
                onMouseDown={handleClick}
                onMouseUp={handleClick} />
        </div>
    )
}

export default SearchBar;
