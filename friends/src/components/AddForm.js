import React from 'react';

class AddForm extends React.Component {
	state = {
		friend : {
			name  : '',
			age   : '',
			email : ''
		}
	};

	changeHandler = (e) => {
		e.persist();
		let value = e.target.value;
		if (e.target.name === 'age') {
			value = parseInt(value, 10);
		}

		this.setState((prevState) => ({
			friend : {
				...prevState.friend,
				[e.target.name]: value
			}
		}));
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addFriend(this.state.friend);

		this.setState({
			friend : {
				name  : '',
				age   : '',
				email : ''
			}
		});
	};

	render() {
		return (
			<div className="add-form-container">
				<form onSubmit={this.handleSubmit} className="add-form">
					<input
						type="text"
						name="name"
						onChange={this.changeHandler}
						placeholder="Name"
						value={this.state.friend.name}
					/>

					<input
						type="number"
						name="age"
						onChange={this.changeHandler}
						placeholder="Age"
						value={this.state.friend.age}
					/>

					<input
						type="text"
						name="email"
						onChange={this.changeHandler}
						placeholder="Email"
						value={this.state.friend.email}
					/>
					<button>Add Friend!</button>
				</form>
			</div>
		);
	}
}

export default AddForm;
