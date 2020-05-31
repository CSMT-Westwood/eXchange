import React, { useState, useContext, useEffect } from 'react';
import * as Style from "./navBarStyle"
import { ReactComponent as SearchIcon } from '../imgs/search.svg'
import { ReactComponent as ProfileIcon } from '../imgs/profile.svg'
import { ReactComponent as FeedIcon } from '../imgs/feed.svg'
import { ReactComponent as SettingsIcon } from '../imgs/settings.svg'
import { ReactComponent as LogoutIcon } from '../imgs/logout.svg'
import { ReactComponent as AlertOpenIcon } from '../imgs/alert-open.svg'
import { ReactComponent as AlertCloseIcon } from '../imgs/alert-close.svg'
import { ReactComponent as AddIcon } from '../imgs/addIcon.svg'
import { RenderingContext } from '../renderingContext';
import { RegisterContext } from './Register/registerContext';
import history from '../components/history';

function NavItem (props) {
    const [open, setOpen] = useState(false);

    return (
        <Style.MenuIcon name={props.name.slice(0,4)}>
            <Style.IconBtn name={props.name.slice(0,4)} onClick={() => {
                setOpen(!open);
                if(props.name=="searchIcon") history.push("/");
                }}>
                {open ? props.openIcon : props.closeIcon}
            </Style.IconBtn>
            {open && props.children}
        </Style.MenuIcon>
    )
}

function DropDownMenu () {
    const [pColor, setPcolor] = useState(window.color);
    const {settings, onColorChange} = useContext(RenderingContext);

    function DropdownItem (props) {
        const {setSettings} = useContext(RenderingContext);
        return (
            <Style.MenuItem onClick={()=>{
                history.push('/'+props.name);
                if (props.name==="login" && sessionStorage.getItem("token") !==null) {
                    sessionStorage.removeItem("token");
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
        if(onColorChange){
            const interval = setInterval(() => {
                setPcolor(window.color);
            }, 30);
            return () => clearInterval(interval);
        }
    });

    return (
        <Style.Dropdown color={pColor}> 
            <DropdownItem icon={<ProfileIcon/>} name={settings.username.username}>{settings.username.username}</DropdownItem>
            <DropdownItem icon={<FeedIcon/>} name="feeds">Feeds</DropdownItem>
            <DropdownItem icon={<SettingsIcon/>} name="settings">Settings</DropdownItem>
            <DropdownItem icon={<LogoutIcon/>} name="login">{sessionStorage.getItem("token")===null ? "Log in" : "Log out"}</DropdownItem>
        </Style.Dropdown>
    );
}

export default function NavBar (props) {
    const {settings, onColorChange} = useContext(RenderingContext);
    const [pColor, setPcolor] = useState(window.color);
    const {getUserInfo} = useContext(RegisterContext);

    useEffect(() => {
        if(settings.username.username==="User" && sessionStorage.getItem("token")){
            let temp = window.location.href;
            for(let i = temp.length; i > 0; i--){
                if(temp[i]==="/")
                    temp = temp.slice(i);
            }
            getUserInfo({"token": sessionStorage.getItem("token"), "name":temp});
        }
        if(onColorChange){
            const interval = setInterval(() => {
                setPcolor(window.color);
            }, 30);
            return () => clearInterval(interval);
        }
    });

    return (
        <Style.Navbar color={pColor}>
            <NavItem name="userIcon" 
                openIcon={<img src={settings.photo.photo}  
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>} 
                closeIcon={<img src={settings.photo.photo} 
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>}>
                <DropDownMenu setting={props.setting}/>
            </NavItem>
            <NavItem name="alertIcon" openIcon={<AlertOpenIcon/>} closeIcon={<AlertCloseIcon/>} />
            <NavItem name="createIcon" openIcon={<AddIcon/>} closeIcon={<AddIcon/>} />
            <NavItem name="searchIcon" openIcon={<SearchIcon/>} closeIcon={<SearchIcon/>} />
            <Style.BTN onClick={() => {history.push("/");}}>
                <Style.Logo id="logoIcon"/>
            </Style.BTN>
        </Style.Navbar>
    );
}
