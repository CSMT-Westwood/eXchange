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

const rowsOfCards = (props, showModal) => {
	console.log("Rendered row of cards.");
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

function parseClients(modalPost) {
	const clients = modalPost['clients']
	const myClients = []
	for (let i = 0; clients && i < clients.length; i++) {
		myClients.push(
			{
				value: clients[i]._id,
				label: clients[i]['username'] + '  (' + clients[i]['rp'] + ' RP)',
				rp: clients[i]['rp'],
			}
		)
	}
	console.log("Parsing clients list");
	return myClients;
}

function grabSinglePost(modalVisibility, props, postCollection, postIndex)  {
	if (!modalVisibility) {
		return null;
	}
	console.log("Grabbed single post.");
	return props.allPosts[postCollection][postIndex];
}


export default function Dashboard(props) {
	const [modalVisibility, setModalVisibility] = useState(false);
	const [postIndex, setPostIndex] = useState(0);
	const [postCollection, setPostCollection] = useState('');
	const [selectedClient, setSelectedClient] = useState('');

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

	const selectClient = (id) => {
		setSelectedClient(id);
	}

	const modalPost = grabSinglePost(modalVisibility, props, postCollection, postIndex) 
	
	return (
			<div className={`dashboard ${props.className}`} >
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
						acceptStatus={
							modalPost.fulfilled===1? 2: 0
							} //can accept as a host iff post is pending
						selectedClient={selectedClient}
						post={modalPost}
						modalContent={
							<React.Fragment>
								<Card
									post={modalPost}
									inModal={true}
									showModal={() => { }} 
								/>
								{(modalPost.fulfilled === 1  && props.viewMyPosts)? (
									<ClientsDropdown
									options={parseClients(modalPost)}
									selectClient={selectClient} >
									</ClientsDropdown>)
								: null}
							</React.Fragment>
						}
					/>) : null
				}
			
			</div>
	);
}
