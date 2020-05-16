import React, { useState } from 'react';
import '../style/SearchBar.css';
import '../App.css';
import searchButton from '../imgs/search.svg';

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleTextFieldChange = (e) =>{
        setSearchQuery(e.target.value);
    }

    const submit = () => {
        props.handleSearch(searchQuery);
    }

    return (
        <div className="search-bar-wrapper">
            <input type="text" className="search-bar"
                value={searchQuery} onChange={handleTextFieldChange}/>
            <img src={searchButton} alt="search-button"
                id="search-button" onClick={submit}/>
        </div>
    )
}

export default SearchBar;
