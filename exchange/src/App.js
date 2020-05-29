import React, { useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Directory from './components/Directory/Directory';
import RenderingContextProvider, { RenderingContext } from './renderingContext';
import RegisterContextProvider from './components/Register/registerContext';


function RenderingComponent () {
    const {page} = useContext(RenderingContext);

    switch(page) {
        case "login":
            return (<Register status="login" />);
        case "signup":
            return (<Register status="signup" />);
        case "settings":
            return (<Profile status="settings" />);
        case "userinfo":
            return (<Profile status="userinfo" />);
        case "feeds":
            return (<Profile status="feeds" />);
        case "directory":
            return (<Directory />);
        default:
            return (<Register status="login" />);
    }
}

function DisplayWrapper () {
    const {page} = useContext(RenderingContext);
    return(
        <RegisterContextProvider>
          <NavBar setting={page !== "settings" ? false: true} />
          <RenderingComponent />
        </RegisterContextProvider>  
    );
}

function App() {
    return (
        <div className="App">
            <RenderingContextProvider>
                <DisplayWrapper />        
            </RenderingContextProvider>
        </div>
    );
}

export default App;
