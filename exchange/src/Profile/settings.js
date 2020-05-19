/* 
    Settings Compoment:
    Username, Email, Photo, Password, Theme 
*/

import React, { useState } from 'react';
import './profile.css'
import useSettings from './useSettings';
import { ReactComponent as SettingsIcon } from '../imgs/settings.svg'
import NavBar from "../components/NavBar"

function SettingModule (props) {
    const [state, setState] = useState(false);

    return (
        <div className="settingModule">
            <div className="settingName">{props.name + ":"}</div>
            {state 
                ? <input type="text" className="settingField"></input>
                : <div className="settingField">{props.value}</div> 
            }
            <button className="changeButton" onClick={()=>setState(!state)}>
                {state ? "Confirm" : "Change"}
            </button>
        </div>
    );
}

function SettingsWrapper (props) {
    return ([
        <span id="settingTitle">settings</span>,
        <div className="fieldWrapper">
            {props.settings.map( setting => { return (
                <div>
                    <SettingModule name={Object.keys(setting)[0]} value={Object.values(setting)[0]} />
                </div>
            )})}
        </div> 
    ]);
}

function Settings () {
    const [settings] = useSettings();
    return(
        <div>
            <NavBar></NavBar>
            <div id="settingWrapper">
                <SettingsWrapper settings={settings} />
            </div>
        </div>
    );
}

export default Settings;