import React, { useEffect, useContext } from 'react';
import * as Style from './feedStyle'
import { RenderingContext } from '../../renderingContext';

function Feeds () {
    
    const {settings} = useContext(RenderingContext);
    useEffect( () => {

    })

    return (
        <Style.FeedWrapper>
            <Style.FeedTitle>Personal Feed</Style.FeedTitle>
        </Style.FeedWrapper>
    );
}

export default Feeds;