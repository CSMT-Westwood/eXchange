import React, { useContext } from 'react';
import * as Style from "./registerStyle"
import '../Profile/background.css'
import { RegisterContext } from './registerContext';
import history from "../history";

function InputField (props) {
    const {info, setInfo} = useContext(RegisterContext);
    return(
        <Style.InputBar type={props.keys.slice(-1)==='d' ? 'password' : 'text'} placeholder={props.keys} value={info[props.keys]} onChange = {(e) => {
            setInfo(info.map(obj => Object.keys(obj)[0] === props.keys ? {[props.keys]:e.target.value} : obj)
        )}
        } required />
);
}

export function Login () {
    const {info, warning, setWarning, handleSumbit} = useContext(RegisterContext);

    return (
        <div className='pageWrapper'>
                <Style.NavBar>Log in</Style.NavBar>
                <Style.WarningBar>{warning}</Style.WarningBar>
            <Style.RegisterForm onSubmit={handleSumbit}>
                <Style.InputWrapper>
                    {[0,2].map(i => info[i]).map(obj => {
                        return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                    })}
                </Style.InputWrapper>
                <Style.SubmitBtn type='submit' value='log in' onSubmit={handleSumbit} />
            </Style.RegisterForm>
            <Style.AlternateBtn onClick={() => {
                setWarning("");
                history.push("/signup");
            }}>Don't have an account? Sign up here.</Style.AlternateBtn>
        </div>
    );
}


export function Signup () {
    const {info, warning, setWarning, handleSumbit} = useContext(RegisterContext);
    
    return (
        <div className='pageWrapper'>
            <Style.NavBar>Sign up</Style.NavBar>
            <Style.WarningBar>{warning}</Style.WarningBar>
            <Style.RegisterForm onSubmit={handleSumbit}>

                <Style.InputWrapper>
                    {info.map(obj => {
                        return (<InputField key={Object.keys(obj)[0]} keys={Object.keys(obj)[0]}/> );
                    })}
                </Style.InputWrapper>
                <Style.InputWarning>*You must use a ucla email to register</Style.InputWarning>
                <Style.SubmitBtn type='submit' value='create account' onSubmit={handleSumbit} />
            </Style.RegisterForm>
            <Style.AlternateBtn onClick={() => {
                setWarning("");
                history.push("/login");
                }}>Already have an account? Log in here.</Style.AlternateBtn>
        </div>
    );
}

