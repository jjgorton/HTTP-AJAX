import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import Friends from './components/Friends';

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

	render() {
		return (
			<div className="App">
				<div className="header">
					<h1>My Friends</h1>
				</div>
				<div className="friends-container">
					{this.state.friendsData.map((obj) => <Friends friend={obj} key={obj.id} />)}
				</div>
			</div>
		);
	}
}

export default App;
