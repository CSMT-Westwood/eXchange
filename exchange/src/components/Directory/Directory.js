import React, { useState, useRef } from 'react';
import SearchBar from './SearchBar';
import '../../App.css';
import './directory.css';


function Directory(props) {
    const [queryObject, setQueryObject] = useState({});
    const [firstVisit, setFirstVisit] = useState(true);
    const welcomeHeader = useRef(null);

    const handleSearch = (value) => {
        // get query results
        setQueryObject(value);
        console.log(value);

        // change the page layout
        setFirstVisit(false);
    }

    return (
        <div className="body directory-body">
            <h1 className={
                firstVisit ? "directory-welcome-text" : "directory-welcome-text-hidden"
            }>
                Exchange. Learn. Discuss. Grow. <br /> <br />
                Find any resource you want.
            </h1>
            <SearchBar handleSearch={handleSearch}
                className={
                    firstVisit ? "directory-search-bar-first" : "directory-search-bar"
                }/>
        </div>
    )
}

export default Directory;
