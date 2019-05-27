import React, { Component } from 'react';
import axios from 'axios';

import { Route, Link } from 'react-router-dom';

import './App.css';

import Friends from './components/Friends';
import FriendDetails from './components/FriendDetails';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';

class App extends Component {
	constructor() {
		super();
		this.state = {
			friendsData  : [],
			activePerson : null
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
				this.props.history.push('/'); // not working!....withRouter()
			})
			.catch((err) => {
				console.log(err);
			});
	};

	updateFriend = (person) => {
		axios
			.put(`http://localhost:5000/friends/${person.id}`, person)
			.then((res) => {
				this.setState({ friendsData: res.data });
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	deleteFriend = (id) => {
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then((res) => {
				this.setState({ friendsData: res.data });
				this.props.history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	setActivePerson = (person) => {
		this.setState({ activePerson: person });
	};

	render() {
		return (
			<div className="App">
				<header className="header">
					<Link to="/new-friend">
						<button className="btn">Add a Friend</button>
					</Link>
					<h1>My Friends</h1>
					<Link to="/">
						<button className="btn">See the Group</button>
					</Link>
				</header>
				<Route exact path="/" render={() => <Friends friendsData={this.state.friendsData} />} />

				<Route
					exact
					path="/person/:id"
					render={(props) => (
						<FriendDetails
							{...props}
							friendsData={this.state.friendsData}
							setActivePerson={this.setActivePerson}
							deleteFriend={this.deleteFriend}
						/>
					)}
				/>

				<Route exact path="/new-friend" render={(props) => <AddForm {...props} addFriend={this.addFriend} />} />

				<Route
					path="/update-friend"
					render={() => (
						<UpdateForm updateFriend={this.updateFriend} activePerson={this.state.activePerson} />
					)}
				/>
			</div>
		);
	}
}

export default App;
