import React, { useContext } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';
import uuid from "uuid/v1"

function getFeed (props) {
    const output = props.pfs.map(p => ({[p]: []}));
    props.fds.map(f => {output[f.itemName].push(f);});
    return output;
}

function Feeds () {
    const {settings} = useContext(RenderingContext);
    let GroupedFeeds = getFeed({fds: settings.posts.posts, pfs:settings.preferences.preferences});
    return (
        <div>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
            {settings.preferences.preferences.map(pf => 
                <Style.FeedWrapper>
                    <div>{Object.keys(pf)[0]}</div>
                    {GroupedFeeds.map(feed => 
                        <Style.NewContainer posts={Object.values(feed)[0]} key={uuid()}/>
                    )}
                </Style.FeedWrapper>
            )}
        </div>
    );
}

export default Feeds;