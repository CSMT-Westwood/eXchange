import React, { useContext, useState, useEffect } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/background.css";
import uuid from "uuid/v1"
import history from "../history"
import Container from '../Container';


function FeedsContent (props) {
    const {settings} = useContext(RenderingContext);

    function createC () {
        let temptemp = [
            <Style.FeedTitle key={uuid()}>Personal Feed</Style.FeedTitle>,
            <div className="Test" key={uuid()}>You currently have {settings.preferences.preferences.length} preferences</div>
        ];
        console.log("output:", props.values);
        for(let i = 0; i < props.keys.length; i++){
            // console.log("Feed:", feed);
            temptemp.push(
                <Style.FeedWrapper key={uuid()}>
                    <Style.FieldTitle>{props.keys[i]}</Style.FieldTitle>
                    <Container className="hello_hello_hello" posts={props.values[i]}/>
                </Style.FeedWrapper>
            );
        }
        return temptemp;
    }

    if(!sessionStorage.getItem("token")){
        alert("Please Log in first!");
        history.push("/login");
    }
    return (
        <Style.Temp>
            {createC()}
        </Style.Temp> 
    )
}

function Feeds () {
    const {settings} = useContext(RenderingContext);
    let keys = settings.preferences.preferences;
    let values = Array.apply(null, Array(keys.length)).map(() =>[]);
    function getFeed () {
        fetch("http://localhost:8000/feed", {
            method: "GET",
            headers: { "Content-Type": "multipart/form-data", "token": sessionStorage.getItem("token")},
        }).then(response => {
            if(!response.ok)
                response.json().then(data => console.log(data.message));
            else
                response.json().then(data => { data.preferencePosts.map(f => {
                    for (let i = 0; i < keys.length; i++)
                        if(f.course.includes(keys[i])){
                            values[i].push(f);
                            console.log(values[i]);
                        }
                })}
            )
        }).then(x => {console.log("values,", values);})
    }
    
    getFeed();
    
    return(
        <FeedsContent keys={keys} values={values} />
    );
}

export default Feeds;