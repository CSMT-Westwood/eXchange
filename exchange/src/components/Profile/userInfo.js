import React, { useContext, useEffect } from 'react';
import * as Style from "./userInfoStyle"
import "./background.css"
import { RenderingContext } from '../../renderingContext';
import history from "../history";

function BasicInfo () {
    const {settings} = useContext(RenderingContext);
    return (
        <div>
            <Style.UserPhoto src={settings.photo.photo} />
            <Style.UserName>{settings.username.username}</Style.UserName>
            <Style.UserEmail>{settings.email.email}</Style.UserEmail>
        </div>
    );
}

function InfoField (props) {
    return (
        <Style.InfoField  color={window.color}>
            <Style.Info>{props.name}</Style.Info>
            <Style.Info>{props.value}</Style.Info>
            <Style.InfoFieldWrapper name={props.name} />
        </Style.InfoField>
    )
}


export default function UserInfo () {
    const { settings } = useContext(RenderingContext);    
    
    useEffect(() => {
        if(!sessionStorage.getItem("token")){
            alert("Please Log in first!");
            history.push("/login");
        }
    })
    return (
        <div id="profileWrapper">
            <BasicInfo />
            <Style.UserInfo left>
                <InfoField name="Reputation" value={settings.rp.rp} />
                <InfoField name="Activity" value={0} />
            </Style.UserInfo>
            <Style.UserInfo>
                <InfoField name="Following" value={0} />
                <InfoField name="Posts" value={0} />
            </Style.UserInfo>
        </div>
    );
}
