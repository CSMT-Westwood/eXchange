import React, { useContext, useEffect, useState } from 'react';
import * as Style from "./userInfoStyle"
import "./background.css"
import { RenderingContext } from '../../renderingContext';

function BasicInfo () {
    const {settings} = useContext(RenderingContext);

    return (
        <div>
            <Style.UserPhoto>{Image}</Style.UserPhoto>
            <Style.UserName>{settings.username.username}</Style.UserName>
            <Style.UserEmail>{settings.email.email}</Style.UserEmail>
        </div>
    );
}

function InfoField (props) {
    return (
        <Style.InfoField color={window.color}>
            <Style.Info>{props.name}</Style.Info>
            <Style.Info>{props.value}</Style.Info>
        </Style.InfoField>
    );
}


export default function UserInfo () {
    const { settings, setSettings } = useContext(RenderingContext);
    const [mount, setMount] = useState(true);
    useEffect ( () => {
        if(mount){
            fetch("http://localhost:8000/user/self", {
                method: "GET",
                headers: { "Content-Type": "application/json", "token":sessionStorage.getItem("token") },
            }).then(response => {
                if(!response.ok)
                    response.json().then(data => alert(data.message))
                else{
                    response.json().then(data => {
                        setSettings.posts({"posts": data.posts});
                    })
                }          
            })
            setMount(!mount);
        }
    })

    return (
        <div id="profileWrapper">
            <BasicInfo />
            <Style.UserInfo left>
                <InfoField name="Reputation" value={settings.rp.rp} />
                <InfoField name="Activity" value={settings.posts.posts.length} />
            </Style.UserInfo>
            <Style.UserInfo>
                <InfoField name="Following" value={settings.preferences.preferences.length} />
                <InfoField name="Other" value="0" />
            </Style.UserInfo>
        </div>
    );
}
