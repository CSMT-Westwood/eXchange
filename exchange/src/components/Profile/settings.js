/*
    <Settings /> Compoment:
        Username, Email, Photo, Password, Theme
*/

import React, { useState, useContext } from 'react';
import './background.css'
import * as Style from "./settingStyle"
import uuid from "uuid/v1"
import { RenderingContext } from '../../renderingContext';

function SettingModule (props) {
    const [state, setState] = useState(false);
    const {settings, setSettings, changeInfo} = useContext(RenderingContext);
    const [privateInfo, setPrivateInfo] = useState(settings[props.name][props.name]);

    return (
        <Style.SettingModule onSubmit={(e)=>{
            e.preventDefault();
            if (state){
                if(privateInfo!==settings[props.name][props.name])
                    changeInfo({[props.name]: privateInfo});
            }
            setState(!state);
        }}>
            <Style.SettingName>{props.name + ":"}</Style.SettingName>
            {state
                ? props.name==="theme"
                ? <Style.SettingField type="range" min="0" max="100" value={settings.theme.theme} onChange={(e)=>setSettings.theme({"theme": e.target.value})} />
                : <Style.SettingField type="text" value={privateInfo} onChange={(e)=>setPrivateInfo(e.target.value)} />
                : <Style.SettingField as='div'>{privateInfo}</Style.SettingField>
            }
            <Style.ChangeButton as='input' type="submit" value={state ? "Confirm" : "Change"}/>
        </Style.SettingModule>
    );
}

function SettingsWrapper () {
    const { settings } = useContext(RenderingContext);

    return ([
        <Style.SettingTitle key={uuid()}>settings</Style.SettingTitle>,
        <Style.FieldWrapper key={uuid()} >
            <Style.SettingModule as='div' key={uuid()}>
                <Style.SettingName>photo:</Style.SettingName>
                <Style.PhotoWrapper />
                <Style.ChangeButton>Change</Style.ChangeButton>
            </Style.SettingModule>
            {Object.values(settings).slice(0,3).map( setting => { return (
                <div key={uuid()} >
                    <SettingModule name={Object.keys(setting)[0]} value={Object.values(setting)[0]}/>
                </div>
            )})}
        </Style.FieldWrapper>
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
