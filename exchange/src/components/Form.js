import React from 'react';

export class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			offerChecked: true,
			textbookChecked: true,
			course: '',
			itemName: '',

		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		const target = event.target;
		let name = target.name;
		let value = target.value;
		switch (name) {
			case 'offerChecked':
			case 'textbookChecked':
				value = true;
				break;
			case 'reqChecked':
				name = 'offerChecked'
				value = false;
				break;
			case 'notesChecked':
				name = 'textbookChecked'
				value = false;
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
		console.log(this.state.name);
		console.log(this.state.email);
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
							name="textbookChecked"
							checked={this.state.textbookChecked} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="textbookRadio">Textbook</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="notesChecked"
							checked={!this.state.textbookChecked} //check if this is checked
							onChange={this.handleChange}
						/>
						<label className="form-check-label" htmlFor="notesRadio">Notes</label>
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

					<fieldset class="form-group">
						<div class="row">
							<legend class="col-form-label col-sm-2 pt-0">Condition</legend>
							<div class="col-sm-10">
								<div class="form-check">
									<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
									<label class="form-check-label" for="gridRadios1">
										New
          </label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
									<label class="form-check-label" for="gridRadios2">
										Like New
          </label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
									<label class="form-check-label" for="gridRadios3">
										Fair
          </label>
								</div>
								<div class="form-check">
									<input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
									<label class="form-check-label" for="gridRadios3">
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
						maxlength="140"
						rows="2"

						value={this.state.description}
						placeholder="You have 140 chars to describe it..."
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="email">Email address</label>
					<input
						className="form-control"
						type="email"
						id="email"
						name="email"
						placeholder="name@example.com"
						value={this.state.email}
						onChange={this.handleChange}
					/>
				</div>

				<div className="form-group">
					<button className="form-control btn btn-primary" type="submit">
						Submit
        </button>
				</div>
			</form>
		);
	}

}
export default Form;

