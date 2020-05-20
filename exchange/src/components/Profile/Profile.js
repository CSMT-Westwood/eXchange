/*
    Profile Component:
    <Profile status="*status*" />
*/

import React from 'react';
import './profile.css'
import Settings from './settings';
import UserInfo from './userInfo';
import Feeds from './feeds';

export default function Profile (props) { 
    switch (props.status) {
        case "userinfo": return (<UserInfo />);
        case "settings": return (<Settings />);
        case "feeds": return (<Feeds />);
    }
}