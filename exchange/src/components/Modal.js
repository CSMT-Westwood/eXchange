import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import FocusTrap from 'focus-trap-react';
export class Modal extends React.Component {
    constructor(props) {
        super(props);

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
                            onClick={this.props.closeModal}>
                            <span id="close-modal" className="_hide-visual">
                                Close
                            </span>
                            <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                            </svg>
                        </button>
                        <div className="modal-body">
                            {this.props.modalContent}
                        </div>
                    </div>
                </aside>

            </FocusTrap>,
            document.body
        );
    }

    acceptOfferReq = async () => {
		let currPost = this.props.modalContent.props.post;

		if (!sessionStorage.hasOwnProperty("token")) {
			this.props.closeModal();
			alert("You are not logged in.");
			return;
		}
		
		try {
			let result = await fetch("http://localhost:8000/post/accept", {
				method: "POST",
				headers: {
					"content-type": "application/json",
					"token": sessionStorage.getItem("token")
				},
				body: JSON.stringify({_id: currPost._id})
            }).then(data => data.json());	
            if (result.message === "Show Link") {
                this.props.showLink();
            }
            		
		} catch (error) {
			console.log(error);
		}
		// close the modal
		// this.props.closeModal();
		return;
    }

    returnModalWithAccept() {
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
                            onClick={this.props.closeModal}>
                            <span id="close-modal" className="_hide-visual">
                                Close
                            </span>
                            <svg className="_modal-close-icon" viewBox="0 0 40 40">
                                <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                            </svg>
                        </button>
                        <div className="modal-body">
                            {this.props.modalContent}
                            <div className="form-group pt-5">
                                <button className="form-control btn btn-primary" 
                                    type="submit" onClick={this.acceptOfferReq}>
                                    Accept
                                </button>
                            </div>
                        </div>
                    </div>

                </aside>

            </FocusTrap>,
            document.body
        );
    }

    render() {
        if(!this.props.isVisible) {
            return null;
        }
        if(this.props.hasAccept) {
            return this.returnModalWithAccept();
        } else {
            return this.returnModal();
        }

    }
}

export default Modal
