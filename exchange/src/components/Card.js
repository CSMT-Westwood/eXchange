import React from 'react';
import './Card.css';
import Modal from './Modal';

export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// modal: Modal({onClickOutside=})
		}
	}

	render() { //TODO: change offer/req indicator to be color of card
		return (<div>
			<div className="row">
				<div
				className="card w-25 bg-light mb-3"
				onClick={this.props.showModal}
					style={{ cursor: 'pointer' }}
				>
					<div className="card-header">
						<div> {this.props.post.course} </div>
						<span class="badge badge-primary float-left">Offer</span>
						<span> {this.props.post.publication_date.toISOString().slice(0, 10)} </span>
					</div>

					<div className="card-body">
						<h5 className="card-title">{this.props.post.itemName}</h5>
						<p className="card-text">{this.props.post.description}</p>
						<span class="badge  float-left">By {this.props.post.author}</span>
						<span class="badge badge-purple float-right">100 RP</span>

					</div>
				</div>

			</div>
		</div>);

	}

}
export default Card;
//Use this method - it does handle double digits correctly
Date.prototype.yyyymmdd = function () {
	var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
	var dd = this.getDate().toString();

	return [this.getFullYear(), mm.length === 2 ? '' : '0', mm, dd.length === 2 ? '' : '0', dd].join(''); // padding
};
