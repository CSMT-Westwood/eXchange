import React, { useContext } from 'react';
import * as Style from "./userInfoStyle"
import "./background.css"
import { RenderingContext } from '../../renderingContext';

function BasicInfo () {
    const {settings} = useContext(RenderingContext);

    return (
        <div>
            <Style.UserPhoto></Style.UserPhoto>
            <Style.UserName>{settings.username.username}</Style.UserName>
            <Style.UserEmail>{settings.email.email}</Style.UserEmail>
        </div>
    );
}

function InfoField (props) {
    return (
        <Style.InfoField>
            <Style.Info>{props.name}</Style.Info>
            <Style.Info>{props.value}</Style.Info>
        </Style.InfoField>
    );
}


export default function UserInfo () {
    const { settings } = useContext(RenderingContext);
    console.log(settings);
    return (
        <div id="profileWrapper">
            <BasicInfo />
            <Style.UserInfo left>
                <InfoField name="Reputation" value={settings.rp.rp} />
                <InfoField name="Activity" value="0" />
            </Style.UserInfo>
            <Style.UserInfo>
                <InfoField name="Following" value={settings.preferences.preferences.length} />
                <InfoField name="Other" value="0" />
            </Style.UserInfo>
        </div>
    );
}
