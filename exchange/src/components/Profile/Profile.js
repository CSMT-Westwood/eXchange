import React, { useContext } from 'react';
import Settings from './settings';
import UserInfo from './userInfo';
import Feeds from '../Feed/feeds';
import { RenderingContext } from '../../renderingContext';

export default function Profile (props) { 
    const {setPage} = useContext(RenderingContext);
    
    if(sessionStorage.getItem("token")===""){
        alert("Please log in first!");
        setPage('login');
    } 
    switch (props.status) {
        case "userinfo": return (<UserInfo />);
        case "settings": return (<Settings />);
        case "feeds": return (<Feeds />);
        default: return (<UserInfo />);
    }
}