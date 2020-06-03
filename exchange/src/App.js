import React, { useContext } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import {Login, Signup} from './components/Register/Register';
import Settings from './components/Profile/Settings';
import Directory from './components/Directory/Directory';
import UserInfo from './components/Profile/UserInfo';
import Feeds from './components/Feed/Feeds'
import RenderingContextProvider, { RenderingContext } from './renderingContext';
import RegisterContextProvider from './components/Register/registerContext';
import history from './components/history';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
	html {
		--color-primary: #FFD100; /*bruin gold*/
		--color-secondary: #C3D7EE; /*lightest blue*/
		--color-tertiary: #8BB8E8; /*light-blue*/
		--color-quaternary: #222831; /*dark purple;*/
		--color-quinary: #2D68C4; /*true blue*/
		--color-senary: cornsilk; /*lightest blue #C3D7EE*/
		--color-background: var(--color-senary);
		--color-black: black;
		--color-white: white;
		--color-text: black;
		background-color: var(--color-background);
	}
	html > body {
		color: var(--color-text);
	}
`

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
			<GlobalStyles />
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
