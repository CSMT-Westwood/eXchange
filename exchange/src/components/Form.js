import React from 'react';
/**
 * Currently suited for only Offer-Req Form.
 * IT'S NOT A GENERIC FORM COMPONENT.
 */
export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offerChecked: true,
			typeOfItem: 0, //0,1 = textbook, notes
			course: '',
			itemName: '',
			condition: 0, //from 0 (best) to 3 (worst)
			description: '',
			link:'',
			fulfilled: false

		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		let name = target.name;
		let value = target.value;
		switch (name) { //We need to cover all nonstring cases
			case 'offerChecked':
				value = true;
				break;
			case 'reqChecked':
				name = 'offerChecked';
				value = false;
				break;
			case 'typeOfItem0':
			case 'typeOfItem1':
			case 'typeOfItem2':
				value = parseInt(name.slice(-1));
				name = 'typeOfItem';
				break;
			case 'condChecked0':
			case 'condChecked1':
			case 'condChecked2':
			case 'condChecked3':
				value = parseInt(name.slice(-1));
				name = 'condition';
				break;
			default:
				break;
		}
		this.setState({
			[name]: value
		});

	}
	s
	handleSubmit(event) {
		console.log(this.state.offerChecked);
		console.log(this.state.textbookChecked);
		console.log(this.state.course);
		console.log(this.state.itemName);
		console.log(this.state.condition);
		console.log(this.state.description);
		//this.props.closeModal();
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="offerChecked"
							checked={this.state.offerChecked} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="offerRadio">Offer</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="reqChecked"
							checked={!this.state.offerChecked} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="reqRadio">Request</label>
					</div>
				</div>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="typeOfItem0"
							checked={this.state.typeOfItem === 0} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="textbookRadio">Textbook</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="typeOfItem1"
							checked={this.state.typeOfItem === 1} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="notesRadio">Notes</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="typeOfItem2"
							checked={this.state.typeOfItem === 2} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="notesRadio">Skill</label>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="course">Course</label>
					<input
						className="form-control"
						id="course"
						name="course"
						value={this.state.name}
						placeholder="CS33"
						onChange={this.handleChange}
					/>
					<label htmlFor="Item">Item</label>
					<input
						className="form-control"
						id="item"
						name="itemName"
						value={this.state.name}
						placeholder="Computer Systems: A Programmer's Perspective"
						onChange={this.handleChange}
					/>

					<fieldset className="form-group">
						<div className="row">
							<legend className="col-form-label col-sm-2 pt-0">Condition</legend>
							<div className="pl-4 col-sm-10">
								<div className="form-check">
									<input 
									className="form-check-input" 
									type="radio" 
									name="condChecked0" 
									checked={this.state.condition===0}
									onChange={this.handleChange}
									/>
									<label className="form-check-label" htmlFor="gridRadios1">
										New
          </label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="condChecked1"
										checked={this.state.condition === 1}
										onChange={this.handleChange}
									/>
									<label className="form-check-label" htmlFor="gridRadios2">
										Like New
          </label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="condChecked2"
										checked={this.state.condition === 2}
										onChange={this.handleChange}
									/>
									<label className="form-check-label" htmlFor="gridRadios3">
										Fair
          </label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="condChecked3"
										checked={this.state.condition === 3}
										onChange={this.handleChange}
									/>
									<label className="form-check-label" htmlFor="gridRadios3">
										Poor
          </label>
								</div>
							</div>
						</div>
					</fieldset>

					<label htmlFor="Description">Description</label>
					<textarea
						className="form-control"
						id="description"
						name="description"
						type="textarea"
						maxLength="140"
						rows="2"

						value={this.state.description}
						placeholder="You have 140 chars to describe it..."
						onChange={this.handleChange}
					/>
				</div>
				<label htmlFor="Link to notes">Link to notes</label>
				<input
					className="form-control" //TODO: this is currently tot React-y and slow on DOM but does the job
					disabled={ this.state.typeOfItem !==1}
					id="link"
					name="link"
					value={this.state.link}
					placeholder={this.state.typeOfItem === 1 ? "http://drive.google.com/blah": "N/A"}
					onChange={this.handleChange}
				/>

				
					<div className="form-group pt-5">
						<button className="form-control btn btn-primary" type="submit">
							Submit
        </button>
				</div>
			</form>
		);
	}

}
export default Form;

