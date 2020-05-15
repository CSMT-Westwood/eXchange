import React from 'react';
import './App.css';
// import Register from './Register/register';
// import Profile from './Profile/profile';


// function App() {
//   return (
//     <div className="App">
//       <Profile status="settings"/>
//       {/* <Register status='signup' /> */}
//     </div>
//   );
// }
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
