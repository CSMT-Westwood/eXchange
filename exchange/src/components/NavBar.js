/*
    <NavBar /> Component
        4vw * 100vw
*/

import React, { useState, useContext, useEffect } from 'react';
import Modal from "./Modal.js";
import Form from "./Form.js";
import * as Style from "./navBarStyle";
import { ReactComponent as MenuOpenIcon } from '../imgs/menu-close.svg'
import { ReactComponent as MenuCloseIcon } from '../imgs/menu-open.svg'
import { ReactComponent as SearchIcon } from '../imgs/search.svg'
import { ReactComponent as ProfileIcon } from '../imgs/profile.svg'
import { ReactComponent as FeedIcon } from '../imgs/feed.svg'
import { ReactComponent as SettingsIcon } from '../imgs/settings.svg'
import { ReactComponent as LogoutIcon } from '../imgs/logout.svg'
import { ReactComponent as AlertOpenIcon } from '../imgs/alert-open.svg'
import { ReactComponent as AlertCloseIcon } from '../imgs/alert-close.svg'
import { ReactComponent as AddIcon } from '../imgs/addIcon.svg'
import { RenderingContext } from '../renderingContext';

function NavItem (props) {
    const [open, setOpen] = useState(false);
    const {setPage} = useContext(RenderingContext);

    return (
        <Style.MenuIcon name={props.name.slice(0,4)}>
            <Style.IconBtn name={props.name.slice(0,4)} onClick={() => {
                if (props.onClick)
                    props.onClick();
                setOpen(!open);
                if(props.name=="searchIcon") setPage("directory");
                }}>
                {open ? props.openIcon : props.closeIcon}
            </Style.IconBtn>
            {open && props.children}
        </Style.MenuIcon>
    )
}

function DropDownMenu () {
    const [pColor, setPcolor] = useState(window.color);
    const {settings} = useContext(RenderingContext);

    function DropdownItem (props) {
        const {setPage, setSettings} = useContext(RenderingContext);
        return (
            <Style.MenuItem onClick={()=>{
                setPage(props.name);
                if (props.name==="login") {
                    sessionStorage.setItem("token", "");
                    setSettings.username({"username": "User"});
                    setSettings.email({"email": ""});
                    setSettings.rp({"rp": 0});
                    setSettings.preferences({"preferences": []});
                    setSettings.photo({"photo": process.env.PUBLIC_URL + "/profile.svg"});
                    alert("you have successfully logged out!");
                }
            }}>
                <span> {props.icon} </span>
                <Style.ItemTxtDiv>{props.children}</Style.ItemTxtDiv>
            </Style.MenuItem>
        );
    }

    useEffect(() => {
        
        const interval = setInterval(() => {
            setPcolor(window.color);
        }, 30);
        return () => clearInterval(interval);
    });

    return (
        <Style.Dropdown color={pColor}> 
            <DropdownItem icon={<ProfileIcon/>} name="userinfo">{settings.username.username}</DropdownItem>
            <DropdownItem icon={<FeedIcon/>} name="feeds">Feeds</DropdownItem>
            <DropdownItem icon={<SettingsIcon/>} name="settings">Settings</DropdownItem>
            <DropdownItem icon={<LogoutIcon/>} name="login">{sessionStorage.getItem("token")==="" ? "Log in" : "Log out"}</DropdownItem>
        </Style.Dropdown>
    );
}

export default function NavBar (props) {
    const {settings, setPage} = useContext(RenderingContext);
    const [pColor, setPcolor] = useState(window.color);
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        if(props.setting){
            const interval = setInterval(() => {
                setPcolor(window.color);
            }, 30);
            return () => clearInterval(interval);
        }
    });

    const showModal = () => {
        if (sessionStorage["token"] == "") return;        
        setModalVisibility(true);
        toggleScrollLock();
    }

    const closeModal = () => {
        setModalVisibility(false);
        toggleScrollLock();
    }

    const toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    return (
        <Style.Navbar color={pColor}>
            <NavItem name="userIcon" 
                openIcon={<img src={settings.photo.photo}  
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>} 
                closeIcon={<img src={settings.photo.photo} 
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>}>
                <DropDownMenu />
            </NavItem>
            <NavItem name="alertIcon" openIcon={<AlertOpenIcon/>} closeIcon={<AlertCloseIcon/>} />
            <NavItem name="createIcon" openIcon={<AddIcon/>} closeIcon={<AddIcon/>} 
                onClick={showModal} />
            <NavItem name="searchIcon" openIcon={<SearchIcon/>} closeIcon={<SearchIcon/>} />
            <Style.BTN onClick={() => {setPage("directory")}}>
                <Style.Logo id="logoIcon"/>
            </Style.BTN>
            <Modal
                isVisible={modalVisibility} //we pass a bool value
                closeModal={closeModal} //we pass a reference to a function
                hasAccept={false}
                showLink={()=>{}}   // not useful here
                modalContent={
                    <Form closeModal={closeModal} />
                }
            />
        </Style.Navbar>
    );
}
