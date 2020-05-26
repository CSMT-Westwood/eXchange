import React, { useState, useContext } from 'react';
import * as Style from "./userInfoStyle";
import "./background.css";
import { RenderingContext } from '../../renderingContext';
import Container from '../Container';
import ScrollingWrapper from '../ScrollingWrapper';
import '../ScrollingWrapper.css';
import './Profile.css';
import Dashboard from './Dashboard';

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
	const [allPosts, setAllPosts] = useState([]);
	const [unfulfilledPosts, setUnfulfilledPosts] = useState([]);
	const [pendingPosts, setPendingPosts] = useState([]);
	const [processingPosts, setProcessingPosts] = useState([]);
	const [fulfilledPosts, setFulfilledPosts] = useState([]);
	const [resultsClass, setResultsClass] = useState("");

	const getAllUserPosts = (value) => {
		//To be implemented
		// // get query results
		// setQueryObject(value);
		// console.log(value);

		// // change the page layout
		// if (firstVisit) {
		// 	setFirstVisit(false);
		// 	setTimeout(() => setResultsClass("directory-result-shown"), 2000);
		// }

		// // fetch the query
		// try {
		// 	let url = new URL("http://localhost:8000/post/search");
		// 	let params = value;
		// 	Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
		// 	fetch(url, {
		// 		method: "GET",
		// 		headers: { "Content-Type": "application/json" },
		// 	})
		// 		.then(a => a.json())
		// 		.then(b => setResults(b));
		// } catch (e) {
		// 	console.log(e);
		// }
	}
	//TESTING PURPOSES
	let examplePost = {
		typeOfPost: 0, //0,1 = offer, request
		typeOfItem: 0, //0,1 = textbook, notes		
		course: 'CS33',
		itemName: 'Computer Organization: A Perspective!',
		condition: 0, //from 0 (best) to 3 (worst)
		description: 'Awesome. I dropped this off at your house when I went to the',
		link: '',
		fulfilled: 0, //Unfulfilled, Pending (matched w at least 1 other person), Fulfilled (marked for deletion). On the backend, we will switch pending to fulfilled after 2 weeks have passed.
		publication_date: new Date(2023, 4, 13),
		author: 'Tommy', 		// the author’s username
	}
	var posts = [];
	for (let i = 0; i < 6; i++) {
		posts.push(examplePost);
	}
	let unfulfilledPostsTest = posts;
	let pendingPostsTest = posts;
	let processingPostsTest = posts;
	let fulfilledPostsTest = posts;

	return (
		<div>
			<div className="profile-block">
				<BasicInfo />
				<Style.UserInfo left>
					<InfoField name="Reputation" value={settings.rp.rp} />
					<InfoField name="Activity" value={settings.activities.activities.length} />
				</Style.UserInfo>
				<Style.UserInfo>
					<InfoField name="Following" value={settings.preferences.preferences.length} />
					<InfoField name="Posts" value={settings.posts.posts.length} />
				</Style.UserInfo>
			</div>

			<Dashboard
				unfulfilledPosts={unfulfilledPostsTest}
				pendingPosts={pendingPostsTest}
				processingPosts={processingPostsTest}
				fulfilledPosts={fulfilledPostsTest}
			></Dashboard>
		</div>
	);
}
