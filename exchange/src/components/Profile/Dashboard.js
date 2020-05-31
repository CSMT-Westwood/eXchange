import React, { useState } from 'react';
import Modal from '../Modal';
import Card from '../Card';
import ScrollingWrapper from './ScrollingWrapper';
import Toggle from '../Toggle';
import './Dashboard.css';
import ClientsDropdown from './ClientsDropdown';

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

function rowsOfCards(props, showModal) {
	return (
		<React.Fragment>
			<ScrollingWrapper
				posts={props.allPosts['unfulfilled']}
				collection={'unfulfilled'}
				showModal={
					showModal
				}
				title="Unfulfilled">
			</ScrollingWrapper>
			<ScrollingWrapper
				posts={props.allPosts['pending']}
				collection={'pending'}
				showModal={
					showModal
				} title="Pending"></ScrollingWrapper>
			<ScrollingWrapper
				posts={props.allPosts['fulfilled']}
				collection={'fulfilled'}
				showModal={
					showModal
				} title="Fulfilled">
			</ScrollingWrapper>
		</React.Fragment>)
}



export default function Dashboard(props) {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [postIndex, setPostIndex] = useState(0);
	const [postCollection, setPostCollection] = useState('');

	const showModal = (collection, i) => { //collection is 0, 1, or 2
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

	const grabSinglePost = () => {
		if(!modalVisibility) {
			return null;
		}
		var func = new Function("props", "collection", "i", "return props.allPosts[collection][i]");
		return func(props, postCollection, postIndex);
	}

	const modalPost = grabSinglePost();
	
	return (

		<React.Fragment>
			<div className="dashboard" >
				<Toggle
					on={!props.viewMyPosts}
					offText='My posts'
					onText="Posts I'm interested in"
					onChange={props.toggleMyPosts}>
				>
				</Toggle>
				{rowsOfCards(props, showModal)}
				{modalVisibility?
					(<Modal
						isVisible={modalVisibility} //we pass a bool value
						closeModal={closeModal} //we pass a reference to a function
						hasAccept={true}
						modalContent={
							<React.Fragment>
								<Card
									post={
										modalPost
									}
									inModal={true}
									showModal={() => { }
									} />
								<ClientsDropdown
									clients={modalPost['clients']}>
								</ClientsDropdown>
							</React.Fragment>
						}
					/>) : null
				}
			
			</div>
		</React.Fragment>
	);
}
