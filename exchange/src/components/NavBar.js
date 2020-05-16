/*
    <NavBar /> Component
        4vw * 100vw
*/

import React, { useState, useContext } from 'react';
import '../Profile/navBar.css'
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
import useSettings from '../Profile/useSettings';
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

function DropDownMenu (props) {
    function DropdownItem (props) {
        const {setPage} = useContext(RenderingContext);
        return (
            <button onClick={()=>setPage(props.name)} className="menu-item">
                <span> {props.icon} </span>
                {props.children}
            </button>
        );
    }

    return (
        <div className="dropdown">
            <DropdownItem icon={<ProfileIcon/>} name="userinfo">Profile</DropdownItem>
            <DropdownItem icon={<FeedIcon/>} name="feeds">Feeds</DropdownItem>
    <DropdownItem icon={<SettingsIcon/>} name="settings">Settings</DropdownItem>
            <DropdownItem icon={<LogoutIcon/>} name="login">Log out</DropdownItem>
        </div>
    );
}

export default function NavBar () {
    const s = useSettings();

    return (
        <nav className="navbar"> 
            <NavItem name="searchIcon" openIcon={<SearchIcon/>} closeIcon={<SearchIcon/>} />
            <NavItem name="menuIcon" openIcon={<MenuOpenIcon/>} closeIcon={<MenuCloseIcon/>}>
                <DropDownMenu />
            </NavItem>
            <NavItem name="userIcon" openIcon={<ProfileIcon/>} closeIcon={<ProfileIcon/>}>
                <div id="usernameOnBar">{s[0].username.username}</div>
            </NavItem>
            <NavItem name="alertIcon" openIcon={<AlertOpenIcon/>} closeIcon={<AlertCloseIcon/>} />
            <a href="#">
                <LogoIcon id="logoIcon"/>
            </a>
        </nav>
    );
}