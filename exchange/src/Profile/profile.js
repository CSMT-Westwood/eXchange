/*
    Profile Component:
*/

import React from 'react';
import './profile.css'
import Settings from './settings';
import UserInfo from './userInfo';

export default function Profile (props) { 
    switch (props.status) {
        case "userInfo": return (<UserInfo />)
        case "settings": return (<Settings />)
    }
}