/*  React Compoment for Login and Signup
    Usage: 
        import Register from '../Register/register'
        Login: <Regiter status='login' />
        Signup: <Register status='signup' />
*/

import React, { useContext } from 'react';
import './register.css'
import RegisterContextProvider, { RegisterContext } from './registerContext';

function InputField (props) {
    const {info, setInfo} = useContext(RegisterContext);
    return(
        <input className="inputBar" type={props.keys.slice(-1)==='d' ? 'password' : 'text'} placeholder={props.keys} value={info[props.keys]} onChange = {(e) => {
            setInfo(info.map(obj => Object.keys(obj)[0] === props.keys ? {[props.keys]:e.target.value} : obj)
        )}
        } required />        
);
}

function Login () {
    const {info, warning, setWarning, setStatus, handleSumbit} = useContext(RegisterContext);
    
    return (
        <div className='pageWrapper'>
                <div className="navBar">Log in</div> 
                <div className = "warningBar">{warning}</div>
            <form className="registerForm" onSubmit={handleSumbit}>
                <div className="inputWrapper">
                    {[0,2].map(i => info[i]).map(obj => {
                        return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                    })}
                </div>
                <input className="submitBtn" type='submit' value='log in' onSubmit={handleSumbit} /> 
            </form>
            <button className='alternateBtn' onClick={() => {
                setStatus('signup');
                setWarning("")
            }}>Doesn't have an account? Sign up here.</button>
        </div>
    );
}


function Signup () {
    const {info, warning, setWarning, setStatus, handleSumbit} = useContext(RegisterContext);

    return (
        <div className='pageWrapper'>
            <div className="navBar">Sign up</div> 
            <div className = "warningBar">{warning}</div>
            <form className="registerForm" onSubmit={handleSumbit}>
                
                <div className="inputWrapper">
                    {info.map(obj => {
                        return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                    })}
                </div>
                <div id="inputWarning">*You must use a ucla email to register</div>
                <input className="submitBtn" type='submit' value='create account' onSubmit={handleSumbit} /> 
            </form>
            <button className='alternateBtn' onClick={() => {
                setStatus('login');
                setWarning("")}}>Already have an account? Log in here.</button>
        </div>
    );
}



function Register (props) { 
    const StatusHandler = () => {
        const {status} = useContext(RegisterContext);
        return (status === 'login' ? <Login /> : <Signup /> );
    }
    return (
        <RegisterContextProvider status={props.status}>
            <StatusHandler />
        </RegisterContextProvider>
    );
}
 
export default Register;