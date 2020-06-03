import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import FocusTrap from 'focus-trap-react';
import "./Modal.css";
export class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			responseText: "",
		};
	}

	returnModal() {
		return ReactDOM.createPortal(
			<FocusTrap>
				<aside
					tag="aside"
					role="dialog"
					tabIndex="-1"
					aria-modal="true"
					className="modal-cover"
				//onClick={() => this.props.closeModal(this.props.modalID)}
				>
					<div className="modal-area" ref={this.props.modalRef}>
						<button
							ref={this.props.buttonRef}
							aria-label="Close Modal"
							aria-labelledby="close-modal"
							className="_modal-close"
							onClick={() => {
								this.setState({ responseText: "" });
								this.props.closeModal();
							}}>
							<span id="close-modal" className="_hide-visual">
								Close
                            </span>
							<svg className="_modal-close-icon" viewBox="0 0 40 40">
								<path d="M 10,10 L 30,30 M 30,10 L 10,30" />
							</svg>
						</button>
						<div className="modal-body">
							{this.props.modalContent}
							{this.grabAdditionalContent()}
						</div>
					</div>
				</aside>

			</FocusTrap>,
			document.body
		);
	}

	grabAdditionalContent() {
		if (!sessionStorage.hasOwnProperty("token")) { //if we are not signed in, then no additional content
			return null;
		}
		switch (this.props.acceptStatus) {
			case 0:
				return null;
			case 1:
				return (
					<React.Fragment>
						<p className="modal-response-text">{this.state.responseText}</p>
						<div className="form-group pt-5">
							<button className="form-control btn btn-primary"
								type="submit" onClick={this.clientAccepts}>
								I'm interested!
                                </button>
						</div>
					</React.Fragment>
				);
			case 2: return (
				<React.Fragment>
					<p className="modal-response-text">{this.state.responseText}</p>
					<div className="form-group pt-5">
						<button className="form-control btn btn-primary"
							type="submit" onClick={this.props.selectedClient? this.hostAccepts:
								() => alert("Invalid client")
							}>
							Accept this client
                                </button>
					</div>
				</React.Fragment>
			);
			default:
				return null;
		}
	}

	// ideally, this should be placed inside the card class definition...
	// or it's better to raise all the methods up into the ancestor class.
	clientAccepts = async () => {
		let currPost = this.props.modalContent.props.post;

		if (!sessionStorage.hasOwnProperty("token")) {
			this.props.closeModal();
			alert("You are not logged in.");
			return;
		}

		try {
			let result = await fetch("http://localhost:8000/post/follow", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					"token": sessionStorage.getItem("token")
				},
				body: JSON.stringify({ _id: currPost._id })
			}).then(data => data.json());
			if (result.message === "Show Link") {
				this.props.showLink();
			} else {
				this.setState({ responseText: result.message });
			}
		} catch (error) {
			console.log(error);
		}
		this.props.closeModal();
		return;
	}

	hostAccepts = async () => {
		let currPost = this.props.post;

		if (!sessionStorage.hasOwnProperty("token")) {
			this.props.closeModal();
			alert("You are not logged in.");
			return;
		}

		try {
			let result = await fetch("http://localhost:8000/post/chooseClient", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					"token": sessionStorage.getItem("token")
				},
				body: JSON.stringify({
					postID: currPost._id,
					clientID: this.props.selectedClient
				})
			}).then(data => data.json());
			console.log('clientID: '+ this.props.selectedClient);
			this.setState({ responseText: result.message });
		} catch (error) {
			console.log(error);
		}
		this.props.closeModal();
		return;
	}


	render() {
		if (!this.props.isVisible) {
			return null;
		}
		return this.returnModal();
	}
}

export default Modal
