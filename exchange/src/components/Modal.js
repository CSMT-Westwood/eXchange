import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './Form';
import FocusTrap from 'focus-trap-react';
export class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return ReactDOM.createPortal(
			<FocusTrap>
				<aside
					tag="aside"
					role="dialog"
					tabIndex="-1"
					aria-modal="true"
					className="modal-cover"
					onClick={this.props.onClickOutside}
					onKeyDown={this.props.onKeyDown}
				>
					<div className="modal-area" ref={this.props.modalRef}>
						<button
							ref={this.props.buttonRef}
							aria-label="Close Modal"
							aria-labelledby="close-modal"
							className="_modal-close"
							onClick={this.props.closeModal}
						>
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
}

export default Modal
