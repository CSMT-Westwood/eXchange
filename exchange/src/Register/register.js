/*  React Compument for Login and Signup
    Usage: 
        import Register from '../Register/register'
        Login: <Regiter status='login' />
        Signup: <Register status='signup' />
*/

import React, { useContext } from 'react';
import './register.css'
import RegisterContextProvider, { RegisterContext } from './registerContext';

const InputField = (props) => {
    const {info, setInfo} = useContext(RegisterContext);
    return(
        <div className={"inputWrapper"}>
            <div className="inputTitle">{props.keys+ ': '}</div>
            <input type={props.keys.slice(-1)==='d' ? 'password' : 'text'} placeholder={props.keys} value={info[props.keys]} onChange = {(e) => {setInfo(
                info.map( obj => Object.keys(obj)[0] === props.keys ? {[props.keys]:e.target.value} : obj)
            )}
            } required />
        </div>           
    );
}

const Login = () => {
    const {info, setStatus, handleSumbit} = useContext(RegisterContext);
    
    return (
        <div className='pageWrapper'>
            <form className="loginForm" onSubmit={handleSumbit}>
                {info.slice(0,2).map(obj => {
                    return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                })}
                <input type='submit' value='log in' onSubmit={handleSumbit} /> 
            </form>
            <button className='alternateBtn' onClick={() => {setStatus('signup')}}>Doesn't have an account? Sign up here.</button>
        </div>
    );
}


const Signup = () => {
    const {info, setStatus, handleSumbit} = useContext(RegisterContext);

    return (
        <div className='pageWrapper'>
            <form className="signupForm" onSubmit={handleSumbit}>
                {info.map(obj => {
                    return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                })}
                <div className="inputWarning">*You must use a ucla email to register</div>
                <input type='submit' value='create account' onSubmit={handleSumbit} /> 
            </form>
            <button className='alternateBtn' onClick={() => {setStatus('login')}}>Already have an account? Log in here.</button>
        </div>
    );
}



const Register = (props) => { 
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