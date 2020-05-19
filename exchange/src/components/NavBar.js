/*
    <NavBar /> Component
        4vw * 100vw
*/

import React, { useState, useContext } from 'react';
import './navBar.css'
import { ReactComponent as MenuOpenIcon } from '../imgs/menu-close.svg'
import { ReactComponent as MenuCloseIcon } from '../imgs/menu-open.svg'
import { ReactComponent as SearchIcon } from '../imgs/search.svg'
import { ReactComponent as ProfileIcon } from '../imgs/profile.svg'
import { ReactComponent as FeedIcon } from '../imgs/feed.svg'
import { ReactComponent as SettingsIcon } from '../imgs/settings.svg'
import { ReactComponent as LogoutIcon } from '../imgs/logout.svg'
import { ReactComponent as LogoIcon } from '../imgs/logo.svg'
import { ReactComponent as AlertOpenIcon } from '../imgs/alert-open.svg'
import { ReactComponent as AlertCloseIcon } from '../imgs/alert-close.svg'
import { RenderingContext } from '../renderingContext';

function NavItem (props) {
    const [open, setOpen] = useState(false);

    return (
        <li id={props.name}>
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {open ? props.openIcon : props.closeIcon}
            </a>
            {open && props.children}
        </li>
    )
}

function DropDownMenu () {
    function DropdownItem (props) {
        const {setPage, setSettings} = useContext(RenderingContext);
        return (
            <button onClick={()=>{
                setPage(props.name);
                if (props.name==="login") {
                    sessionStorage.setItem("token", "");
                    setSettings.username({"username": "You are not logged in"});
                    setSettings.email({"email": ""});
                    setSettings.rp({"rp": 0});
                    setSettings.preferences({"preferences": []});
                    setSettings.photo({"photo": null});
                    alert("you have successfully logged out!");
                }
            }} className="menu-item">
                <span> {props.icon} </span>
                {props.children}
            </button>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem icon={<SearchIcon/>} name="directory">Directory</DropdownItem>
            <DropdownItem icon={<FeedIcon/>} name="feeds">Feeds</DropdownItem>
            <DropdownItem icon={<ProfileIcon/>} name="userinfo">Profile</DropdownItem>
            <DropdownItem icon={<SettingsIcon/>} name="settings">Settings</DropdownItem>
            <DropdownItem icon={<LogoutIcon/>} name="login">Log out</DropdownItem>
        </div>
    );
}

export default function NavBar () {
    const {settings} = useContext(RenderingContext);

    return (
        <nav className="navbar">
            {/*<NavItem name="searchIcon" openIcon={<SearchIcon/>} closeIcon={<SearchIcon/>} />*/}
            <NavItem name="menuIcon" openIcon={<MenuOpenIcon/>} closeIcon={<MenuCloseIcon/>}>
                <DropDownMenu />
            </NavItem>
            <NavItem name="userIcon" openIcon={<ProfileIcon/>} closeIcon={<ProfileIcon/>}>
                <div id="usernameOnBar">{settings.username.username}</div>
            </NavItem>
            <NavItem name="alertIcon" openIcon={<AlertOpenIcon/>} closeIcon={<AlertCloseIcon/>} />
            <a href="#">
                <LogoIcon id="logoIcon"/>
            </a>
        </nav>
    );
}
