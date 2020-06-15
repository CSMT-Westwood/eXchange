import React, { useState, useContext, useEffect } from 'react';
import Modal from "./Modal.js";
import Form from "./Form.js";
import Notification from "./Notifications/Notification.js";
import * as Style from "./NavBarStyle";
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
import history from './History';

function NavItem (props) {
    const [open, setOpen] = useState(false);

    return (
        <Style.MenuIcon name={props.name.slice(0,4)}>
            <Style.IconBtn name={props.name.slice(0,4)} onClick={() => {
                if (props.onClick)
                    props.onClick();
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
    const [formVisibility, setFormVisibility] = useState(false);
    const [notificationVisibility, setNotificationVisibility] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const {getUserInfo} = useContext(RegisterContext);

    useEffect(() => {
        if(settings.username.username==="User" && sessionStorage.getItem("token")){
            let temp = window.location.href;
            for(let i = temp.length; i > 0; i--){
                if(temp[i]==="/")
                    temp = temp.slice(i);
            }
            getUserInfo({"token": sessionStorage.getItem("token")});
        }
        if(onColorChange){
            const interval = setInterval(() => {
                setPcolor(window.color);
            }, 30);
            return () => clearInterval(interval);
        }
    });

    const showForm = () => {
        if (sessionStorage["token"] == "" || sessionStorage["token"] == undefined) return;        
        setFormVisibility(true);
        toggleScrollLock();
    }

    const closeForm = () => {
        setFormVisibility(false);
        toggleScrollLock();
    }

    const toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    const showNotifications = () => {
        if (sessionStorage["token"] == "" || sessionStorage["token"] == undefined) return;
        fetch("https://bruin-exchange.herokuapp.com/user/notifications", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": sessionStorage["token"]
            }
        })
        .then(data => data.json())
        .then(data => {
            data = [...data];           // convert to array
            data.sort((a, b) => a.activity_date < b.activity_date? 1 : -1); // sort the array by date
            data.sort((a, b) => a.unread > b.unread ? -1 : 1); // sort by read/unread
            let arr = [];
            let unreadCnt = 0;
            for (let i = 0; i < data.length; i++) {
                unreadCnt += data[i].unread;
                arr.push(
                    <Notification message={data[i].message} 
                        date={data[i].activity_date} key={i}
                        notificationId={data[i]._id}
                        read={!data[i].unread}
                    />
                );
            }
            setNotifications(arr.slice(0, Math.max(5, unreadCnt)));
            setNotificationVisibility(true);
            toggleScrollLock();
        });
    };

    const closeNotifications = () => {
        setNotificationVisibility(false);
        toggleScrollLock();
    };

    return (
        <Style.Navbar color={pColor}>
            <NavItem name="userIcon" 
                openIcon={<img src={settings.photo.photo}  
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>} 
                closeIcon={<img src={settings.photo.photo} 
                    style={{borderRadius: `50%`, height: `1.5vw`, width: `1.5vw`}}/>}>
                <DropDownMenu setting={props.setting}/>
            </NavItem>
            <NavItem name="alertIcon" openIcon={<AlertOpenIcon/>} closeIcon={<AlertCloseIcon/>} 
                onClick={showNotifications} />
            <NavItem name="createIcon" openIcon={<AddIcon/>} closeIcon={<AddIcon/>} 
                onClick={showForm} />
            <NavItem name="searchIcon" openIcon={<SearchIcon/>} closeIcon={<SearchIcon/>} />
            <Style.BTN onClick={() => {history.push("/");}}>
                <Style.Logo id="logoIcon"/>
            </Style.BTN>
            <Modal
                isVisible={formVisibility} //we pass a bool value
                closeModal={closeForm} //we pass a reference to a function
                acceptStatus={0} //no accept button
                showLink={()=>{}}   // not useful here
                modalContent={
                    <Form closeModal={closeForm} />
                }
            />
            <Modal 
                isVisible={notificationVisibility}
                closeModal={closeNotifications}
                hasAccept={false}
                showLink = {()=>{}}
                modalContent = {
                    [<Style.NotificationTitle>Notifications</Style.NotificationTitle>,
                    ...notifications]
                }
            />
        </Style.Navbar>
    );
}
