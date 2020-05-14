import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { Filler } from './components/Filler';
import { Card } from './components/Card'

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
const App = () => {
	const triggerText = 'Offer/Request';
	const onSubmit = (event) => {
		// event.preventDefault(event);
		// console.log(typeof(event));
		// console.log(event.offerChecked); //console.log treats offerChecked as a string for some reason
		// console.log(event.target.email.value);
		// console.log(event.target.name.value);
	};
	return (
		<div className="App">
			<Filler />
			<Container triggerText={triggerText} onSubmit={onSubmit} />
			<Card post={examplePost} />
			<Filler />
		</div>
	);
};

export default App;
