import React from 'react';
import "./Form.css";
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
			fulfilled: false,
			error_message: "",
			error_display_class: "form_error_hidden"
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleErrorMessage = this.toggleErrorMessage.bind(this);
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

	toggleErrorMessage(errorMessage, showError) {
		if (!showError) {
			this.setState(prevState => ({
				...prevState,
				error_display_class: "form_error_hidden",
				error_message: ""
			}));
		} else {
			this.setState(prevState => ({
				...prevState,
				error_display_class: "form_error_shown",
				error_message: errorMessage
			}));
		}
	}

	async handleSubmit(event) {
		event.preventDefault();
		if (this.state.course === "") {
			this.toggleErrorMessage("Please categorize your post under a course!", true);
			return;
		}
		if (this.state.itemName === "") {
			this.toggleErrorMessage("Please give your item a name!", true);
			return;
		}
		if (this.state.description === "") {
			this.toggleErrorMessage("Please give your post a description!", true);
			return;
		}
		if (this.state.offerChecked && this.state.typeOfItem === 1 && this.state.link === "") {
			this.toggleErrorMessage("Please input the link to your resource. Thanks!", true);
			return;
		}

		const newPost = {
			typeOfPost: this.state.offerChecked ? 0 : 1,
			typeOfItem: this.state.typeOfItem,
			course: this.state.course,
			itemName: this.state.itemName,
			condition: this.state.condition,
			description: this.state.description,
			link: this.state.link
		};
		console.log(newPost);

		try {
			await fetch("https://bruin-exchange.herokuapp.com/post/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"token": sessionStorage["token"]
				},
				body: JSON.stringify(newPost)
			});
		} catch (e) {
			alert("error while creating a new post.");
		}

		this.toggleErrorMessage(undefined, false);
		this.props.closeModal();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<p className={this.state.error_display_class}>
					{this.state.error_message}
				</p>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="radio"
								name="offerChecked"
								checked={this.state.offerChecked} //check if this is checked
								onChange={this.handleChange}
							/>
							Offer
						</label>
					</div>
					<div className="form-check form-check-inline">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="radio"
								name="reqChecked"
								checked={!this.state.offerChecked} //check if this is checked
								onChange={this.handleChange}
							/>
							Request
						</label>
					</div>
				</div>
				<div className="form-group">
					<div className="form-check form-check-inline">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="radio"
								name="typeOfItem0"
								checked={this.state.typeOfItem === 0} //check if this is checked
								onChange={this.handleChange}
							/>
							Textbook
						</label>
					</div>
					<div className="form-check form-check-inline">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="radio"
								name="typeOfItem1"
								checked={this.state.typeOfItem === 1} //check if this is checked
								onChange={this.handleChange}
							/>
							Notes
						</label>
					</div>
					<div className="form-check form-check-inline">
						<label className="form-check-label">
							<input
								className="form-check-input"
								type="radio"
								name="typeOfItem2"
								checked={this.state.typeOfItem === 2} //check if this is checked
								onChange={this.handleChange}
							/>
							Skill
						</label>
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

