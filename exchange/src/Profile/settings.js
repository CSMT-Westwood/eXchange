/* 
    <Settings /> Compoment:
        Username, Email, Photo, Password, Theme 
*/

import React, { useState } from 'react';
import './profile.css'
import uuid from "uuid/v1"
import useSettings from './useSettings';

function SettingModule (props) {
    const [state, setState] = useState(false);
    const s = useSettings();
    const [privateInfo, setPrivateInfo] = useState(props.value);
    return (
        <form className="settingModule" onSubmit={(e)=>{
            e.preventDefault();
            if (state){
                s[2]({[props.name]: privateInfo});
            } 
            setState(!state);
        }}>
            <div className="settingName">{props.name + ":"}</div>
            {state 
                ? props.name==="theme" 
                ? <input type="range" min="0" max="100" className="settingField" value={s[0].theme.theme}onChange={(e)=>s[1].theme({"theme": e.target.value})} />
                : <input type="text" className="settingField" value={privateInfo} onChange={(e)=>setPrivateInfo(e.target.value)}></input>
                : <div className="settingField">{privateInfo}</div> 
            }
            <input type="submit" className="changeButton" value={state ? "Confirm" : "Change"}/>
        </form>
    );
}

function SettingsWrapper () {
    const s = useSettings();

    return ([
        <span id="settingTitle" key={uuid()} >settings</span>,
        <div className="fieldWrapper" key={uuid()} >
            <div className="settingModule" key={uuid()}>
                <span className="settingName">photo:</span>
                <div id="photoWrapper"> </div>
                <button className="changeButton">Change</button>
            </div>
            {Object.values(s[0]).slice(0,3).map( setting => { return (
                <div key={uuid()} >
                    <SettingModule name={Object.keys(setting)[0]} value={Object.values(setting)[0]}/>
                </div>
            )})}
        </div> 
    ]);
}

function Settings () { 
    return(
        <div id="settingWrapper">
            <SettingsWrapper/>
        </div>
    );
}

export default Settings;