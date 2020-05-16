import React from 'react';
import './App.css';
import Register from './Register/register';
import Profile from './Profile/profile';
import { Container } from './components/Container';
import { Filler } from './components/Filler';
import Directory from './components/Directory';

function App() {
    return (
        <div className="App">
            {/*<Profile status="settings"/>*/}
            {/* <Register status='signup' /> */}
            <Directory />
        </div>
    );
}


export default App;
