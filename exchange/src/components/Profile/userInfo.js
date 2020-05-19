import React, { useContext } from 'react';
import "./profile.css"
import { RenderingContext } from '../../renderingContext';

function BasicInfo () {
    const {settings} = useContext(RenderingContext);

    return (
        <div>
            <div id="userPhoto"></div>
            <span id="userName">{settings.username.username}</span>
            <span id="userEmail">{settings.email.email}</span>
        </div>
    );
}

function InfoField (props) {
    return (
        <div className="infoField">
            <div className="infoName">{props.name}</div>
            <div className="infoValue">{props.value}</div>
        </div>
    );
}


export default function UserInfo () {
    const { settings } = useContext(RenderingContext);
    console.log(settings);
    return (
        <div id="profileWrapper">
            <BasicInfo />
            <div id="userInfoWrapper">
                <div id="userInfoLeft">
                    <InfoField name="Reputation" value={settings.rp.rp} />
                    <InfoField name="Activity" value="0" />
                </div>
                <div id="userInfoRight">
                    <InfoField name="Following" value={settings.preferences.preferences.length} />
                    <InfoField name="Other" value="0" />
                </div>
            </div>
        </div>
    );
}
