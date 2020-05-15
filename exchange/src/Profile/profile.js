/*
    Profile Componemt:
*/

import React from 'react';
import './profile.css'
import Settings from './settings';

function UserInfo () {
}

function Profile (props) { 
    switch (props.status) {
        case "userInfo": return (<UserInfo />)
        case "settings": return (<Settings />)
        
    }
}

export default Profile;