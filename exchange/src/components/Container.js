import React from 'react';
import { Modal } from './Modal';
import { Card } from './Card';
import TriggerButton from './TriggerButton';
import Form from './Form';


let examplePost = {
	typeOfPost: 0, //0,1 = offer, request
	typeOfItem: 0, //0,1 = textbook, notes		
	course: 'CS33',
	itemName: 'Computer Organization: A Perspective!',
	condition: 0, //from 0 (best) to 3 (worst)
	description: 'Awesome. I dropped this off at your house when I went to theeraewrfasidjfasdfaisfasdifiasddfsdfsdfsfisiodiofisdifaiosdfioasiodfioasiodfioasodfoiasoierae',
	link: '',
	fulfilled: 0, //Unfulfilled, Pending (matched w at least 1 other person), Fulfilled (marked for deletion). On the backend, we will switch pending to fulfilled after 2 weeks have passed.
	publication_date: new Date(2023, 4, 13),
	author: 'Tommy', 		// the author’s username
}

let examplePost1 = {
	typeOfPost: 1, //0,1 = offer, request
	typeOfItem: 0, //0,1 = textbook, notes		
	course: 'CS33',
	itemName: 'Computer Organization: A Perspective!',
	condition: 0, //from 0 (best) to 3 (worst)
	description: 'Awesome. I dropped this off at your house when I went to theeraewrfasidjfasdfaisfasdifiasddfsdfsdfsfisiodiofisdifaiosdfioasiodfioasiodfioasodfoiasoierae',
	link: '',
	fulfilled: 0, //Unfulfilled, Pending (matched w at least 1 other person), Fulfilled (marked for deletion). On the backend, we will switch pending to fulfilled after 2 weeks have passed.
	publication_date: new Date(2023, 4, 13),
	author: 'Tommy', 		// the author’s username
}

export class Container extends React.Component {
	//Strat: possibly have Container be the single source of truth for
	//whether every modal is open or not. Maintain a dict of identity
	//to 1 or 0
	constructor(props) {
		super(props);
		this.state = {
			visibility: { //0 for uninit, 1 for nonvisible, 2 for visible
				modal0: false,
				modal1: false,
				modal2: false
			}
		};
		this.showModal = this.showModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}



	// showModal = () => {
	// 	this.setState({ isShown: true }, () => {
	// 		this.closeButton.focus();
	// 	});
	// 	this.toggleScrollLock();
	// };
	showModal(modalID) {
		if (modalID in this.state.visibility) {
			this.setState(
				(prevState) => {
					return {
						visibility: { ...prevState.visibility, [modalID]: true }
					};
				});
		}
		this.toggleScrollLock();
	}


	closeModal(modalID) {
		if (modalID in this.state.visibility) {
			this.setState(
				(prevState) => {
					return {
						visibility: { ...prevState.visibility, [modalID]: false }
					};
				});
		}
		this.toggleScrollLock();
	};


	toggleScrollLock = () => {
		document.querySelector('html').classList.toggle('scroll-lock');
	};
	render() {
		return (
			<React.Fragment>
				<TriggerButton
					showModal={() => this.showModal("modal0")}
					//buttonRef={(n) => (this.TriggerButton = n)}
					triggerText={this.props.triggerText}
				/>

				<Modal
					modalID="modal0"
					isVisible={this.state.visibility["modal0"]} //we pass a bool value
					closeModal={this.closeModal} //we pass a reference to a function
					modalContent={<Form onSubmit={this.props.onSubmit} />} //we pass "static"
				/>
				<Card
					post={examplePost}
					modalID="modal1"
					showModal={this.showModal}
				/>
				<Modal
					modalID="modal1"
					isVisible={this.state.visibility["modal1"]}
					closeModal={this.closeModal}
					hasAccept={true}
					modalContent={
						<Card
							post={examplePost}
							modalID="modal1"
							showModal={this.showModal}
							inModal={true}
						/>
					}
				/>

				<Card
					post={examplePost1}
					modalID="modal2"
					showModal={this.showModal}
				/>
				<Modal
					modalID="modal2"
					isVisible={this.state.visibility["modal2"]}
					closeModal={this.closeModal}
					hasAccept={true}
					modalContent={
						<Card
							post={examplePost1}
							modalID="modal2"
							showModal={this.showModal}
							inModal={true}
						/>
					}
				/>
			</React.Fragment>
		);
	}
}

export default Container;
