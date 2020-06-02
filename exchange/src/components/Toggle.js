import React from 'react';
import './Toggle.css';
export class Toggle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<React.Fragment>
				
				<label className="switch">
					<h3 className="switch-label-left">{this.props.on? this.props.onText:this.props.offText}</h3>
					<input
						type="checkbox"
						checked={this.props.on}
						onChange={() => this.props.onChange()}></input>
					<div className="slider"></div>
					
				</label>
				
			</React.Fragment>);
	}
}

export default Toggle
