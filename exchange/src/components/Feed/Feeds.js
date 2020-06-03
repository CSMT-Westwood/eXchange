import React, { useContext, useState, useEffect } from 'react';
import * as Style from './FeedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/Background.css";
import uuid from "uuid/v1"
import history from "../History"


function Feeds () {
    const {settings} = useContext(RenderingContext);
    const [preferences, setPreferences] = useState({});

    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            alert("Please log in first!");
            history.push("/");
        }
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
            <Style.FeedTitle key={uuid()}>Personal Feeds</Style.FeedTitle>,
			<Style.FeedSubTitle key={uuid()}>You are following {settings.preferences.preferences.length} topics: {settings.preferences.preferences.join(', ')} </Style.FeedSubTitle>
		];
        for(let each in preferences){
            if(preferences[each].length!==0){  
                temptemp.push(
                    <Style.SecondaryWrapper color={window.color} key={uuid()}>
                        <Style.FieldTitle color={window.color}>{each}</Style.FieldTitle>
                        <Style.FeedWrapper>   
                            <Style.NewContainer posts={preferences[each]}/>
                        </Style.FeedWrapper>
                    </Style.SecondaryWrapper>
                );
            }
            else{
                temptemp.push(
                    <Style.SecondaryWrapper color={window.color} key={uuid()}>
                        <Style.FieldTitle color={window.color}>{each}</Style.FieldTitle>
                        <Style.FieldTitle>No result avaliable</Style.FieldTitle>
                    </Style.SecondaryWrapper>
                );
            }
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
