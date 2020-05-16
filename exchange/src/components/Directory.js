import React, { useState } from 'react';
import SearchBar from './SearchBar';
import '../App.css';


function Directory(props) {
    const [queryText, setQueryText] = useState("");

    const handleSearch = (value) => {
        setQueryText(value);
    }

    return (
        <div className="body">
            <SearchBar handleSearch={handleSearch}/>
        </div>
    )
}

export default Directory;
