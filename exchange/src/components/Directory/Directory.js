import React, { useState } from 'react';
import SearchBar from './SearchBar';
import '../../App.css';
import './directory.css';


function Directory(props) {
    const [queryObject, setQueryObject] = useState({});

    const handleSearch = (value) => {
        setQueryObject(value);
        console.log(value);
    }

    return (
        <div className="body">
            <SearchBar handleSearch={handleSearch}/>
        </div>
    )
}

export default Directory;
