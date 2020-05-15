import React from 'react';
import './App.css';
import Register from './Register/register';
import Profile from './Profile/profile';
import { Container } from './components/Container';
import { Filler } from './components/Filler';

function App() {
  return (
    <div className="App">
      <Profile status="settings"/>
      {/* <Register status='signup' /> */}
    </div>
  );
}


export default App;
