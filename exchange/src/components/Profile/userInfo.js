import React, { useState, useContext, useEffect } from 'react';
import * as Style from "./userInfoStyle";
import "./background.css";
import { RenderingContext } from '../../renderingContext';
import Dashboard from './Dashboard'
import TriggerButton from '../TriggerButton';
import history from "../history";

function BasicInfo() {
	const { settings } = useContext(RenderingContext);
	return (
		<div>

			<Style.UserPhoto src={settings.photo.photo} />
			<Style.UserName>{settings.username.username}</Style.UserName>
			<Style.UserEmail>{settings.email.email}</Style.UserEmail>
		
		</div>
	);
}

function InfoField(props) {
	return (
		<Style.InfoField color={window.color}>
			<Style.Info>{props.name}</Style.Info>
			<Style.Info>{props.value}</Style.Info>
			<Style.InfoFieldWrapper name={props.name} />
		</Style.InfoField>
	)
}


export default function UserInfo() {
	const { settings } = useContext(RenderingContext);
	//A dictionary: {'unfulfilled': <Array>, 'pending': <Array>..}
	const [allPosts, setAllPosts] = useState({}); 
	const [viewMyPosts, setViewMyPosts] = useState(true);

	useEffect(() => {
        if(!sessionStorage.getItem("token")){
            alert("Please Log in first!");
            history.push("/login");
        }
	})
	
	const toggleMyPosts = () => {
		setViewMyPosts(!viewMyPosts);
	}

	const fetchPosts = (isHost) => {
		
		// fetch the query
		try {
			let url = new URL('http://localhost:8000/feed/myPosts/')
			if (!isHost) {
				url = new URL('http://localhost:8000/feed/followedPosts/')
			}
			fetch(url, {
				method: "GET",
				headers: {
					 "Content-Type": "application/json",
					"token":  sessionStorage.getItem("token") //TODO: verify this is correct token retrieval
					}
			})
				.then(a => a.json())
				.then(b => setAllPosts(b));
		} catch (e) {
			console.log(e);
		}
	}

	const getPosts = () => {
		//Now to make the Cards!
		if (viewMyPosts) {
			fetchPosts(true);
		} else {
			fetchPosts(false);
		}
		console.log(allPosts);
		console.log(typeof(allPosts));
		console.log(allPosts['unfulfilled'])
	}

	getPosts();
	

	return (
		
		<div>
			<div className="profile-block">
				<BasicInfo />
				<Style.UserInfo left>
					<InfoField name="Reputation" value={settings.rp.rp} /> 
					<InfoField name="Activity" value={0} />
				</Style.UserInfo>
				<Style.UserInfo>
					<InfoField name="Following" value={settings.preferences.length} />
					<InfoField name="Posts" value={0} />
				</Style.UserInfo>
			</div>
			
			<Dashboard
				allPosts={allPosts}
				toggleMyPosts={toggleMyPosts}
				viewMyPosts={viewMyPosts}
			>
			</Dashboard>
		</div>
	);
}
