import React from 'react';

class UpdateForm extends React.Component {
	state = {
		person : this.props.activePerson
	};

	changeHandler = (e) => {
		e.persist();
		let value = e.target.value;
		if (e.target.name === 'age') {
			value = parseInt(value, 10);
		}

		this.setState((prevState) => ({
			friend : {
				...prevState.person,
				[e.target.name]: value
			}
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.updateFriend(this.state.person);
	};

	render() {
		return (
			<div className="add-form">
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="name"
						onChange={this.changeHandler}
						placeholder="Name"
						value={this.state.person.name}
					/>

					<input
						type="number"
						name="age"
						onChange={this.changeHandler}
						placeholder="Age"
						value={this.state.person.age}
					/>

					<input
						type="text"
						name="email"
						onChange={this.changeHandler}
						placeholder="Email"
						value={this.state.person.email}
					/>
					<button>Update Friend!</button>
				</form>
			</div>
		);
	}
}

export default UpdateForm;
