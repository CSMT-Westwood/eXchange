import React from 'react';
import { Modal } from './Modal';
import {Card} from './Card';
import TriggerButton from './TriggerButton';
import Form from './Form';

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

export class Container extends React.Component {
	//Strat: possibly have Container be the single source of truth for
	//whether every modal is open or not. Maintain a dict of identity
	//to 1 or 0
	constructor(props) {
		super(props);
		this.state = { 
			isShown: false 
			
		};
	}
	
	showModal = () => {
		this.setState({ isShown: true }, () => {
			this.closeButton.focus();
		});
		this.toggleScrollLock();
	};
	closeModal = () => {
		this.setState({ isShown: false });
		this.TriggerButton.focus();
		this.toggleScrollLock();
	};
	onKeyDown = (event) => {
		if (event.keyCode === 27) {
			this.closeModal();
		}
	};
	onClickOutside = (event) => {
		if (this.modal && this.modal.contains(event.target)) return;
		this.closeModal();
	};

	toggleScrollLock = () => {
		document.querySelector('html').classList.toggle('scroll-lock');
	};
	render() {
		return (
			<React.Fragment>
				<TriggerButton
					showModal={this.showModal}
					buttonRef={(n) => (this.TriggerButton = n)}
					triggerText={this.props.triggerText}
				/>
				{this.state.isShown ? (
					<Modal
						modalRef={(n) => (this.modal = n)} //React convention for passing by reference
						buttonRef={(n) => (this.closeButton = n)}
						closeModal={this.closeModal}
						onKeyDown={this.onKeyDown}
						onClickOutside={this.onClickOutside}
						modalContent={<Form onSubmit={this.props.onSubmit} />}
					/>
				) : null}
				<TriggerButton
					showModal={this.showModal}
					buttonRef={(n) => (this.TriggerButton = n)}
					triggerText={this.props.triggerText}
				/>
				{/* {this.state.isShown ? (
					<Modal
						modalRef={(n) => (this.modal = n)} //React convention for passing by reference
						buttonRef={(n) => (this.closeButton = n)}
						closeModal={this.closeModal}
						onKeyDown={this.onKeyDown}
						onClickOutside={this.onClickOutside}
						modalContent="Second."
					/>
				) : null} */}
				<Card 
				post={examplePost} 
				/>
			</React.Fragment>
		);
	}
}

export default Container;
