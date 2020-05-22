/*
    <NavBar /> Component
        4vw * 100vw
*/

import React, { useState, useContext, useEffect } from 'react';
import * as Style from "./navBarStyle"
import { ReactComponent as MenuOpenIcon } from '../imgs/menu-close.svg'
import { ReactComponent as MenuCloseIcon } from '../imgs/menu-open.svg'
import { ReactComponent as SearchIcon } from '../imgs/search.svg'
import { ReactComponent as ProfileIcon } from '../imgs/profile.svg'
import { ReactComponent as FeedIcon } from '../imgs/feed.svg'
import { ReactComponent as SettingsIcon } from '../imgs/settings.svg'
import { ReactComponent as LogoutIcon } from '../imgs/logout.svg'
import { ReactComponent as AlertOpenIcon } from '../imgs/alert-open.svg'
import { ReactComponent as AlertCloseIcon } from '../imgs/alert-close.svg'
import { RenderingContext } from '../renderingContext';

function NavItem(props) {
	const [open, setOpen] = useState(false);
	const { setPage, setSettings } = useContext(RenderingContext);
	return (
		// <Style.MenuIcon name={props.name.slice(0, 4)}>
		// 	<Style.IconBtn name={props.name.slice(0, 4)} onClick={() => setOpen(!open)}>
		// 		{open ? props.openIcon : props.closeIcon}
		// 	</Style.IconBtn>
		// 	{open && props.children}
		// </Style.MenuIcon>

		<li class="nav-item">
			{<a class="nav-link" href="#"
			onClick={() => setPage(props.name)}
			>{props.caption}{props.icon}</a>}
		</li>
	);
}

function Navigator() {
	const [pColor, setPcolor] = useState(window.color);
	return <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
}

function DropDownMenu() {
	const [pColor, setPcolor] = useState(window.color);

	function DropdownItem(props) {
		const { setPage, setSettings } = useContext(RenderingContext);
		return (
			<Style.MenuItem onClick={() => {
				setPage(props.name);
				if (props.name === "login") {
					sessionStorage.setItem("token", "");
					setSettings.username({ "username": "You are not logged in" });
					setSettings.email({ "email": "" });
					setSettings.rp({ "rp": 0 });
					setSettings.preferences({ "preferences": [] });
					setSettings.photo({ "photo": process.env.PUBLIC_URL + "/profile.svg" });
					alert("you have successfully logged out!");
				}
			}}>
				<span> {props.icon} </span>
				{props.children}
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
			{/* <DropdownItem icon={<SearchIcon/>} name="directory">Directory</DropdownItem>
            <DropdownItem icon={<FeedIcon/>} name="feeds">Feeds</DropdownItem>
            <DropdownItem icon={<ProfileIcon/>} name="userinfo">Profile</DropdownItem>
            <DropdownItem icon={<SettingsIcon/>} name="settings">Settings</DropdownItem>
            <DropdownItem icon={<LogoutIcon/>} name="login">{sessionStorage.getItem("token")==="" ? "Log in" : "Log out"}</DropdownItem> */}
		</Style.Dropdown>
	);
}

export default function NavBar(props) {
	const { settings, setPage } = useContext(RenderingContext);
	const [pColor, setPcolor] = useState(window.color);

	useEffect(() => {
		if (props.setting) {
			const interval = setInterval(() => {
				setPcolor(window.color);
			}, 30);
			return () => clearInterval(interval);
		}
	});


	return (
		
		<nav class="navbar navbar-expand-lg navbar-light bg-info">
			{/* Hamburger menu on small screens */}
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto">
					
					<NavItem icon={<SearchIcon />} name="directory" caption="Directory"> </NavItem>
					<NavItem name="post" caption="Post"> </NavItem>
					<NavItem icon={<FeedIcon />} name="feeds" caption="Feeds"></NavItem>
					<NavItem icon={<ProfileIcon />} name="userinfo" caption="Profile"> </NavItem>
					<NavItem icon={<SettingsIcon/>}></NavItem>
				</ul>
				
			</div>
		</nav>
	);
}
