import React, { useState, useContext, useEffect } from 'react';
import * as Style from "./UserInfoStyle";
import "./Background.css";
import { RenderingContext } from '../../renderingContext';
import Dashboard from './Dashboard';
import history from "../History";
import "./Profile.css";

function BasicInfo() {
	const { settings } = useContext(RenderingContext);
	return (
		<Style.BasicInfo>
			<Style.UserPhoto src={settings.photo.photo} />
			<Style.UserName>{settings.username.username}</Style.UserName>
			<Style.UserEmail>{settings.email.email}</Style.UserEmail>
		</Style.BasicInfo>
	);
}

function InfoField(props) {
	return (
		<Style.InfoField color={window.color} >
			<Style.Info>{props.name}</Style.Info>
			<Style.Info>{props.value}</Style.Info>
		</Style.InfoField>
	)
}


export default function UserInfo() {
	const { settings, setSettings } = useContext(RenderingContext);
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

	// https://www.robinwieruch.de/react-hooks-fetch-data
	// don't want to stuck in the fetch-render infinite loop
	useEffect(() => {
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
				}).then(a => a.json()).then(b => {
					setAllPosts(b);
					if(isHost){
						let x = 0;
						for (let each of Object.values(b))
							x += each.length;
						setSettings.postsC(x);
					}
					else{
						setSettings.followC(Object.values(b)[0].length)
					}
				});
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
		}
		getPosts();
	}, [viewMyPosts]);
	
	

	return (
		
		<div className="profile-page">
			<div className="profile-block">
				<BasicInfo />
				<div className="profile-UserInfo">
					<InfoField name="Reputation" value={settings.rp.rp} /> 
					<InfoField name="Following" value={settings.followC} />
					<InfoField name="Feeds" value={settings.preferences.preferences.length} />
					<InfoField name="Posts" value={settings.postsC} />
				</div>
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
