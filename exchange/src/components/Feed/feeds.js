import React, { useContext, useState, useEffect } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/background.css";
import uuid from "uuid/v1"
import history from "../history"
import Container from '../Container';


function Feeds () {
    const {settings} = useContext(RenderingContext);
    const [preferences, setPreferences] = useState({});

    useEffect(() => {
        function getFeed () {
            fetch("http://localhost:8000/feed", {
                method: "GET",
                headers: { "Content-Type": "multipart/form-data", "token": sessionStorage.getItem("token")},
            })
            .then(response => {
                if(!response.ok)
                    response.json().then(data => console.log(data.message));
                else {
                    response.json().then(data => { 
                        setPreferences(data);
                    });
                }
            })
        }
        getFeed();
    },[settings.preferences.preferences]);


    function createC () {
        let temptemp = [
            <Style.FeedTitle key={uuid()}>Personal Feed</Style.FeedTitle>,
            <Style.FeedSubTitle key={uuid()}>You currently have {settings.preferences.preferences.length} preferences</Style.FeedSubTitle>
        ];

        for(let each in preferences){   
            
            temptemp.push(
                <Style.FeedWrapper key={uuid()}>
                    <Style.FieldTitle>{each}</Style.FieldTitle>
                    <Style.NewContainer posts={preferences[each]}/>
                </Style.FeedWrapper>
            );
        }
        return temptemp;
    }

    return(
        <Style.Temp>
            {createC()}
        </Style.Temp>
    );
}

export default Feeds;