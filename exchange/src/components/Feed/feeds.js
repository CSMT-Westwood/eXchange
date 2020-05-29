import React, { useContext } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import "../Profile/background.css"
import uuid from "uuid/v1"

function getFeed (props) {
    const output = props.pfs.map(p => ({[p]: []}));
    props.fds.map(f => {output[f.itemName].push(f);});
    return output;
}

function Feeds () {
    const {settings} = useContext(RenderingContext);
    console.log(settings.posts.posts);
    
    let GroupedFeeds = getFeed({fds: settings.posts.posts, pfs:settings.preferences.preferences});

    return (
        <div>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
            <div className="Test">You currently have 0 feed</div>
            {settings.preferences.preferences.map(pf => 
                <Style.FeedWrapper>
                    
                    {GroupedFeeds.map(feed => 
                        <Style.NewContainer posts={Object.values(feed)[0]} key={uuid()}/>
                    )}
                </Style.FeedWrapper>
            )}
        </div>
    );
}

export default Feeds;