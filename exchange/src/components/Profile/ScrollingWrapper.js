import React from 'react';
import Card from '../Card';
import './Dashboard.css';

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

export default function ScrollingWrapper(props) {
	var cards = [];
	const coll = props.collection;
	for (let i = 0; props.posts && i < props.posts.length; i++) {
		cards.push(<Card
			post={props.posts[i]}
			key={i}
			inModal={false}
			showModal={() => props.showModal(coll, i)}
		/>);
	}
	return (
		<React.Fragment>
			<span className="display-4 wrapper-title"><h1>{props.title}</h1></span>
		<div className="scrolling-wrapper">
			{cards}
		</div>
		</React.Fragment>
	);
}
