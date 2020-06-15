import React, { useState, useContext, useEffect } from 'react';
import './Background.css'
import * as Style from "./SettingStyle"
import uuid from "uuid/v1"
import { RenderingContext } from '../../renderingContext';
import history from "../History";

window.color = 23;

function PreferenceModule(){
    const {settings, changeInfo} = useContext(RenderingContext);
    const [addS, setAddS] = useState("");
    function changePreferences(props){
        if(props.method === "add" && addS){
                let temp = settings.preferences.preferences;
                temp.push(addS);
                changeInfo({"preferences":temp});
        }
        else{
            let temp = settings.preferences.preferences.filter(x => x!==props.value);
            changeInfo({"preferences":temp});
        }
    }

    return (
        <Style.SettingModule as="div" >
            <Style.SettingName>{"Preferences:"}</Style.SettingName>
            <Style.PreferenceSetting as="div">
                {settings.preferences.preferences.map(pfs => 
                    <div key={uuid()}>
                        <Style.PreferenceField as="div">
                            {pfs}
                        </Style.PreferenceField>
                        <Style.DeleteBtn
                            onClick={() => changePreferences({"method":"delete", "value": pfs})}
                        >-</Style.DeleteBtn>
                    </div>
                )}
                <Style.AddField color={window.color} type="text" value={addS} onChange={(e)=>setAddS(e.target.value)} />
                <Style.AddBtn as="button" color={window.color} onClick={() => changePreferences({"method": "add"})}>Add</Style.AddBtn>
                <Style.PlaceHolder/>
            </Style.PreferenceSetting>
        </Style.SettingModule>
    );
}

function SettingModule (props) {
    const [state, setState] = useState(false);
    const {settings, setSettings, changeInfo, onColorChange, setOnColorChange} = useContext(RenderingContext);
    const [privateInfo, setPrivateInfo] = useState(settings[props.name][props.name]);
    const [dummy, setDummy] = useState(false);

    useEffect(() => {
        if(props.name!=="theme" && onColorChange){
            const interval = setInterval(() => {
                setDummy(!dummy);
            }, 30);
            return () => clearInterval(interval);
        }
    });

    return (
        <Style.SettingModule onSubmit={(e)=>{
            e.preventDefault();
            if(props.name==="theme" && onColorChange || state)
                if (privateInfo!==settings[props.name][props.name]){
                    if(props.name !== "theme")
                        changeInfo({[props.name]: privateInfo});
                    else{
                        setSettings.theme({"theme" : window.color})
                        window.color = privateInfo;
                    }
                }
            if(props.name==="theme")
                setOnColorChange(!onColorChange);
            else
                setState(!state);
            
        }}>
            <Style.SettingName>{props.name + ":"}</Style.SettingName>
            {props.name==="theme" ? (onColorChange
                ? <Style.SettingField color={window.color} type="range" min="0" max="100" value={privateInfo} onChange={(e)=>{setPrivateInfo( e.target.value ); window.color=e.target.value; }} />
                : <Style.SettingField color={window.color} as='div'>{"20".concat(privateInfo)}</Style.SettingField>
            ): state
                ? <Style.SettingField color={window.color} type="text" value={privateInfo} onChange={(e)=>setPrivateInfo(e.target.value)} />
                : <Style.SettingField color={window.color} as='div'>{privateInfo}</Style.SettingField>
            }
            <Style.ChangeBtn color={window.color} type="submit" value={props.name==="theme" ? (onColorChange ? "Confirm" : "Change") : (state ? "Confirm" : "Change")}/>
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
        fetch("https://bruin-exchange.herokuapp.com/userAvatar/avatar", {
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
            <PreferenceModule/>
        </Style.FieldWrapper>
    ]);
}

function Settings () {
    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            alert("Please Log in first!");
            history.push("/login");
        }
    });
    return(
        <div id="settingWrapper">
            <SettingsWrapper/>
        </div>
    );
}

export default Settings;
