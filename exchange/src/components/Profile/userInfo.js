import React, { useContext } from 'react';
import * as Style from "./userInfoStyle"
import "./background.css"
import { RenderingContext } from '../../renderingContext';

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

    return (
        <div id="profileWrapper">
            <BasicInfo />
            <Style.UserInfo left>
                <InfoField name="Reputation" value={settings.rp.rp} />
                <InfoField name="Activity" value={settings.activities.activities.length} />
            </Style.UserInfo>
            <Style.UserInfo>
                <InfoField name="Following" value={settings.preferences.preferences.length} />
                <InfoField name="Posts" value={settings.posts.posts.length} />
            </Style.UserInfo>
        </div>
    );
}
