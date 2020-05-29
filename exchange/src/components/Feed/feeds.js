import React, { useContext } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/background.css";
import uuid from "uuid/v1"

function getFeed (props) {
    let output = props.pfs.map(p => ({[p]: []}));
    fetch("http://localhost:8000/feed", {
        method: "GET",
        headers: { "Content-Type": "multipart/form-data", "token": sessionStorage.getItem("token")},
    }).then(response => {
        if(!response.ok)
            response.json().then(data => alert(data.message));
        else
            response.json().then(data => { data.preferencePosts.map(f => {
                for (let i = 0; i < props.pfs.length; i++)
                    if(f.course.includes(props.pfs[i])){
                        let temp = Object.values(output[i])[0];
                        temp.push(f);
                        output[i] = {[Object.keys(output[i])[0]] : temp};
                    }
            })}
        )
    })
    return output;
}

function Feeds () {
    const {settings} = useContext(RenderingContext);
    
    let GroupedFeeds = getFeed({pfs:settings.preferences.preferences});
    return (
        <div>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
            <div className="Test">You currently have {settings.preferences.preferences.length} preferences</div>
                {GroupedFeeds.map(feed =>
                    <Style.FeedWrapper key={uuid()}>
                        <Style.FieldTitle>{Object.keys(feed)[0]}</Style.FieldTitle>
                        <Style.NewContainer posts={Object.values(feed)[0]}/>
                    </Style.FeedWrapper>
                )}
        </div>
    );
}

export default Feeds;