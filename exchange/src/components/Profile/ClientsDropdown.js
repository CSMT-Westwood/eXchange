import React from 'react'
import '../Card.css'
import { DropdownMultiple, Dropdown } from 'reactjs-dropdown-component'
import './ClientsDropdown.css';

export class ClientsDropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = { //A dictionary of keys to JSON objects, each of which is an Array of JSON obj entries
			// clients: [
			// 	{
			// 		id: 0,
			// 		title: 'Bob',
			// 		selected: false,
			// 		key: 'clients', //FIRST FOUR ARE MANDATORY FOR LIRBARY TO WORK
			// 		rp: 10

			// 	},
			// 	{
			// 		id: 1,
			// 		title: 'Jennifer',
			// 		selected: false,
			// 		key: 'clients',
			// 		email: 'Bob@cs.ucla.edu',
			// 		rp: 15
			// 	},
			// ]
			clients: this.parseClients()
		}
	}

	parseClients() {
		const myClients = []
		for(let i = 0; this.props.clients && i < this.props.clients.length; i++) {
			myClients.push(
				{
					id: i,
					title: this.props.clients[i]['username'] + '  (' + this.props.clients[i]['rp'] + ' RP)',
					selected: false,
					key: 'clients',
					rp: this.props.clients[i]['rp']
				}
			)
		}
		return myClients;
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
				searchable={["Search for client", "No matching client"]}
				list={this.state.clients}
				resetThenSet={this.resetThenSet}
			/>
			

		);
	}

}
export default ClientsDropdown
