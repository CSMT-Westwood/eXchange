import React from 'react'
import '../Card.css'
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'

export class TestBlank extends React.Component {
	constructor(props) {
		super(props);
		this.state = { //A dictionary of keys to JSON objects, each of which is an Array of JSON obj entries
			clients: [
				{
					id: 0,
					title: 'Bob',
					selected: false,
					key: 'clients',
					rp: 10

				},
				{
					id: 1,
					title: 'Jennifer',
					selected: false,
					key: 'clients',
					rp: 15
				},
			]
		}
	}
	resetThenSet = (id, key) => {
		let temp = JSON.parse(JSON.stringify(this.state[key]));
		temp.forEach(item => item.selected = false);
		temp[id].selected = true;
		this.setState({
			[key]: temp
		});
	}
	toggleItem = (id, key) => {
		let temp = JSON.parse(JSON.stringify(this.state[key]));
		temp[id].selected = !temp[id].selected;
		this.setState({
			[key]: temp
		});
	}

	render() {
		return(
			<Dropdown
				title="Accept a client"
				searchable={["Search for fruit", "No matching fruit"]}
				list={this.state.clients}
				resetThenSet={this.resetThenSet}
			/>

		);
	}

}
export default TestBlank
