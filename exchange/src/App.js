import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { Filler } from './components/Filler';

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
			<Filler />
		</div>
	);
};

export default App;
