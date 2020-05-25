import React, { useState, useContext } from 'react';
import * as Style from "./userInfoStyle";
import "./background.css";
import { RenderingContext } from '../../renderingContext';
import Container from '../Container';
import ScrollingWrapper from '../ScrollingWrapper';
import '../ScrollingWrapper.css';

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

	return (
		<div>
			{/* <BasicInfo />
            <Style.UserInfo left>
                <InfoField name="Reputation" value={settings.rp.rp} />
                <InfoField name="Activity" value={settings.activities.activities.length} />
            </Style.UserInfo>
            <Style.UserInfo>
                <InfoField name="Following" value={settings.preferences.preferences.length} />
                <InfoField name="Posts" value={settings.posts.posts.length} />
            </Style.UserInfo> */}
			

			<div className="dashboard" >
			<ScrollingWrapper posts={unfulfilledPosts} title="Unfulfilled"></ScrollingWrapper>
				<ScrollingWrapper posts={pendingPosts} title="Pending"></ScrollingWrapper>
				<ScrollingWrapper posts={processingPosts} title="Processing"></ScrollingWrapper>
				<ScrollingWrapper posts={fulfilledPosts} title="Fulfilled"></ScrollingWrapper>
			</div>
			<div class="row" id="pending">

			</div>
			<div class="row" id="processing">

			</div>
			<div class="row" id="fulfilled">

			</div>
			<Container
				posts={allPosts}
				displayPosts={false}>

			</Container>
		</div>
	);
}
