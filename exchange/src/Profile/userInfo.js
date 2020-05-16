import React from 'react';
import useSettings from './useSettings';
import "./profile.css"

function BasicInfo () {
    const s = useSettings();
    return (
        <div>
            <div id="userPhoto"></div>
            <span id="userName">{s[0].username.username}</span>
            <span id="userEmail">{s[0].email.email}</span>
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
    const s = useSettings();
    return (
        <div id="profileWrapper">
            <BasicInfo />
            <div id="userInfoWrapper">
                <div id="userInfoLeft">
                    <InfoField name="Reputation" value={s[0].rp.rp} />
                    <InfoField name="Activity" value="0" />
                </div>
                <div id="userInfoRight">
                    <InfoField name="Following" value={s[0].preferences.preferences.length} />
                    <InfoField name="Other" value="0" />
                </div>
            </div>
        </div>
    );
}
