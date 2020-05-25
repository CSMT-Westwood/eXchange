import React from 'react';
import './Card.css';
import Modal from './Modal';
import classNames from 'classnames';
export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkClass: "card-link-hidden"
		}
		this.cardClasses = classNames(
			'bg-light',
			'mb-3',
			'card',
			{
				'w-25': !this.props.inModal,
				'w-250': this.props.inModal,
				'h-250': this.props.inModal
			}

		)
		this.cardTextClasses = classNames(
			'card-text',
			{
				'card-text-minimized': !this.props.inModal,
				'card-text-expanded': this.props.inModal
			}
		)
		this.postTypeClasses = classNames(
			'badge',
			'float-left',
			{
				'badge-primary': this.props.post.typeOfPost===0,
				'badge-danger': this.props.post.typeOfPost===1
			}
		)
	}

	render() { //TODO: change offer/req indicator to be color of card
		return (
			<div
				className={`${this.cardClasses} full-card`}
				onClick={this.props.showModal}
				style={{ cursor: 'pointer' }}
			>
				<div className="card-header">
					<div> {this.props.post.course} </div>
					<span className={this.postTypeClasses}>{this.props.post.typeOfPost===0 ? 'Offer': 'Request'}</span>
					<span> {this.props.post.publication_date.slice(0, 10)} </span>
				</div>

				<div className="card-body">
					<h5 className="card-title">{this.props.post.itemName}</h5>
					<p className={this.cardTextClasses}>{this.props.post.description}</p>
					<div className={this.props.showLink ? "card-link-shown" : "card-link-hidden"}>
						<a className={this.cardTextClasses} 
							href={`https://${this.props.post.link}`} target="_blank">{this.props.post.link}</a>
					</div>
					<span className="badge  float-left">By {this.props.post.author.username}</span>
					<span className="badge badge-purple float-right">{this.props.post.author.rp} RP</span>

				</div>
			</div>
		);

	}

}
export default Card;
//Use this method - it does handle double digits correctly
Date.prototype.yyyymmdd = function () {
	var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
	var dd = this.getDate().toString();

	return [this.getFullYear(), mm.length === 2 ? '' : '0', mm, dd.length === 2 ? '' : '0', dd].join(''); // padding
};
