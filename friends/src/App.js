import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Friends from './components/Friends';
import AddForm from './components/AddForm';

class App extends Component {
	constructor(props) {
		super();
		this.state = {
			friendsData : []
		};
	}

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then((res) => {
				this.setState({ friendsData: res.data });
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	addFriend = (newFriend) => {
		axios
			.post('http://localhost:5000/friends', newFriend)
			.then((res) => {
				this.setState({ friendsData: res.data });
				// this.props.history.push('/put path here');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		return (
			<div className="App">
				<div className="header">
					<h1>My Friends</h1>
				</div>

				<div className="friends-container">
					{this.state.friendsData.map((obj) => <Friends friend={obj} key={obj.id} />)}
				</div>
				<AddForm addFriend={this.addFriend} />
			</div>
		);
	}
}

export default App;
