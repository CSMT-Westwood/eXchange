import React, { useState, useRef } from 'react';
import SearchBar from './SearchBar';
import Container from '../Container';
import '../../App.css';
import './directory.css';

function Directory(props) {
    const [queryObject, setQueryObject] = useState({});
    const [firstVisit, setFirstVisit] = useState(true);
    const [results, setResults] = useState([]);
    const [resultsClass, setResultsClass] = useState("");

    const handleSearch = (value) => {
        // get query results
        setQueryObject(value);
        console.log(value);

        // change the page layout
        if (firstVisit) {
            setFirstVisit(false);
            setTimeout(()=>setResultsClass("directory-result-shown"), 2000);
        }

        // fetch the query
        try {
            let url = new URL("http://localhost:8000/post/search");
            let params = value;
            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
            fetch(url, {
                method: "GET",
                headers: {"Content-Type": "application/json"},
            })
            .then(a => a.json())
            .then(b => setResults(b));
        } catch (e) {
            console.log(e);
        }
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
            <Container triggerText="YEET"
                className={`directory-result-box ${resultsClass}`}
                posts={results}></Container>
        </div>
    )
}

export default Directory;
