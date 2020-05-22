import React, { useState, useContext } from 'react';
import './background.css'
import * as Style from "./settingStyle"
import uuid from "uuid/v1"
import { RenderingContext } from '../../renderingContext';

window.color = 0;

function SettingModule (props) {
    const [state, setState] = useState(false);
    const {settings, setSettings, changeInfo} = useContext(RenderingContext);
    const [privateInfo, setPrivateInfo] = useState(settings[props.name][props.name]);

    return (
        <Style.SettingModule onSubmit={(e)=>{
            e.preventDefault();
            if (state){
                if(privateInfo!==settings[props.name][props.name])
                if(props.name !== "theme")
                    changeInfo({[props.name]: privateInfo});
                else
                    setSettings.theme({"theme" : window.color})
                    window.color = privateInfo;
            }
            setState(!state);
        }}>
            <Style.SettingName>{props.name + ":"}</Style.SettingName>
            {state
                ? props.name==="theme"
                ? <Style.SettingField color={window.color} type="range" min="0" max="254" value={privateInfo} onChange={(e)=>{setPrivateInfo( e.target.value ); window.color=e.target.value; }} />
                : <Style.SettingField  color={window.color} type="text" value={privateInfo} onChange={(e)=>setPrivateInfo(e.target.value)} />
                : <Style.SettingField  color={window.color} as='div'>{privateInfo}</Style.SettingField>
            }
            <Style.ChangeBtn color={window.color} type="submit" value={state ? "Confirm" : "Change"}/>
        </Style.SettingModule>
    );
}

function SettingsWrapper () {
    const { settings, setSettings } = useContext(RenderingContext);
    const [photo, setPhoto] = useState(null);

    function uploadPhoto (e) {
        e.preventDefault();
        const data = new FormData();
        data.append("image", photo);
        fetch("http://localhost:8000/userAvatar/avatar", {
            method: "POST",
            headers: { "token": sessionStorage.getItem("token") },
            body: data,
        }).then(response => {
            if(!response.ok)
                response.json().then(data => alert(data.message))
            else{
                response.json().then(data => {
                    console.log(data);
                    alert("You have successfully changed your photo!");   
                    setSettings.photo({"photo": data.url})
            })}
        });
    }

    return ([
        <Style.SettingTitle key={uuid()}>Settings</Style.SettingTitle>,
        <Style.FieldWrapper key={uuid()} >

            <Style.SettingModule key={uuid()} action="userAvatar/avatar" method="post" enctype="multipart/form-data" onSubmit={uploadPhoto} >
                <Style.SettingName>photo:</Style.SettingName>
                <Style.PhotoWrapper src={settings.photo.photo} />
                <Style.ChangePhoto as="label" htmlFor="testtest">Choose</Style.ChangePhoto>
                <input id="testtest" type="file" name="image" onChange={(e) => {         setPhoto(e.target.files[0])}} />
                <Style.ChangeBtn color={window.color} type="submit" value="Upload" />
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
