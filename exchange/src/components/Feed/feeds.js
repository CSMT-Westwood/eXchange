import React, { useContext, useState, useEffect } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/background.css";
import uuid from "uuid/v1"
import history from "../history"
import Container from '../Container';

function Feeds () {
    const {settings} = useContext(RenderingContext);
    let output = settings.preferences.preferences.map(p => ({[p]: []}));
    const [feedsPri, setFeedsPri] = useState(output);

    function getFeed () {
        
        fetch("http://localhost:8000/feed", {
            method: "GET",
            headers: { "Content-Type": "multipart/form-data", "token": sessionStorage.getItem("token")},
        }).then(response => {
            if(!response.ok)
                response.json().then(data => console.log(data.message));
            else
                response.json().then(data => { data.preferencePosts.map(f => {
                    for (let i = 0; i < settings.preferences.preferences.length; i++)
                        if(f.course.includes(settings.preferences.preferences[i])){
                            let temp = Object.values(output[i])[0];
                            temp.push(f);
                            output[i] = {[Object.keys(output[i])[0]] : temp};
                        }
                })}
            )
        })
        if(output!==feedsPri)
            setFeedsPri(output);
    }

    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            alert("Please Log in first!");
            history.push("/login");
        }
        getFeed();
    }, [feedsPri]);

    return (
        <Style.Temp>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
            <div className="Test">You currently have {settings.preferences.preferences.length} preferences</div>
            {feedsPri.map(feed =>
                <Style.FeedWrapper key={uuid()}>
                     <Style.FieldTitle>{Object.keys(feed)[0]}</Style.FieldTitle>
                     <Style.NewContainer posts={Object.values(feed)[0]}/>
                </Style.FeedWrapper>
            )}
        </Style.Temp> 
    )
}

export default Feeds;