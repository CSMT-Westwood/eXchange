import React, { useEffect, useContext, useState } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import Container from '../Container';

function Feeds () {
    const {settings, setSettings} = useContext(RenderingContext);
    const [mount, setMount] = useState(true);
    useEffect( () => {
        if(mount){
            fetch("http://localhost:8000/feed", {
                method: "GET",
                headers: {"token": sessionStorage.getItem("token")},
            }).then(response => {
                if(!response.ok){
                    response.json().then(data => alert(data.message))
                }
                else{
                    response.json().then(data => { setSettings.posts({"posts": data.preferencePosts})})
                }
            })
            setMount(!mount);
        }
        
    })
        
    return (
        <Style.FeedWrapper>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
            <Style.NewContainer posts={settings.posts.posts} />
        </Style.FeedWrapper>
    );
}

export default Feeds;