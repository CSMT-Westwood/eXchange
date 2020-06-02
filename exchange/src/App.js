import React, { useContext } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import {Login, Signup} from './components/Register/Register';
import Settings from './components/Profile/settings';
import Directory from './components/Directory/Directory';
import UserInfo from './components/Profile/userInfo';
import Feeds from './components/Feed/feeds'
import RenderingContextProvider, { RenderingContext } from './renderingContext';
import RegisterContextProvider from './components/Register/registerContext';
import history from './components/history';

function RenderingComponent () {
    const {settings} = useContext(RenderingContext);
    return(
        <Router history={history}>
            <Route exact path="/" component={Directory} />
            <Route path="/login" component = {Login} />
            <Route path="/signup" component = {Signup} />
            <Route path={"/"+settings.username.username} component = {UserInfo} />
            <Route path="/feeds" component = {Feeds} />
            <Route path="/settings" component = {Settings} />
        </Router>    
    );
}

function App() {
    return (
        <div className="App">
            <RenderingContextProvider>
                <RegisterContextProvider>
                    <NavBar/>
                    <RenderingComponent />
                </RegisterContextProvider>  
            </RenderingContextProvider>
            
        </div>
    );
}

export default App;
