import React, { useState } from 'react';
import Modal from '../Modal';
import Card from '../Card';
import ScrollingWrapper from '../ScrollingWrapper';
import Toggle from '../Toggle';
import '../Dashboard.css';


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

function myPosts(props, showModal) {
	return (
		<React.Fragment>
			<ScrollingWrapper
				posts={props.unfulfilledPosts}
				collection={0}
				showModal={
					showModal
				}
				title="Unfulfilled">
			</ScrollingWrapper>
			<ScrollingWrapper
				posts={props.pendingPosts}
				collection={1}
				showModal={
					showModal
				} title="Pending"></ScrollingWrapper>
			<ScrollingWrapper
				posts={props.fulfilledPosts}
				collection={2}
				showModal={
					showModal
				} title="Fulfilled">

			</ScrollingWrapper>
		</React.Fragment>);
}

function interestedPosts(props, showModal) {
	return (
		<React.Fragment>
			<ScrollingWrapper
				posts={props.pendingPosts}
				collection={0}
				showModal={
					showModal
				} title="Pending"></ScrollingWrapper>
			<ScrollingWrapper
				posts={props.fulfilledPosts}
				collection={1}
				showModal={
					showModal
				} title="Fulfilled">
			</ScrollingWrapper>
		</React.Fragment>);
}

export default function Dashboard(props) {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [postIndex, setPostIndex] = useState(0);
	const [postCollection, setPostCollection] = useState(0);
	const [viewMyPosts, setViewMyPosts] = useState(false);

	const showModal = (collection, i) => { //collection is 0, 1, 2, or 3
		setPostCollection(collection);
		setPostIndex(i);
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

	const toggleMyPosts = () => {
		setViewMyPosts(!viewMyPosts);
	}



	let allPosts = [props.unfulfilledPosts, props.pendingPosts, props.processingPosts, props.fulfilledPosts];
	return (

		<React.Fragment>
			<div className="dashboard" >
				<Toggle
					on={!viewMyPosts}
					offText='My posts'
					onText="Posts I'm interested in"
					onChange={toggleMyPosts}>
				>
				</Toggle>
				{viewMyPosts? myPosts(props, showModal): interestedPosts(props, showModal)}
				<Modal
					isVisible={modalVisibility} //we pass a bool value
					closeModal={closeModal} //we pass a reference to a function
					hasAccept={true}
					modalContent={<Card
						post={allPosts[postCollection][postIndex]}
						inModal={true}
						showModal={() => { }}
					/>}
				/>
			</div>
		</React.Fragment>
	);
}
