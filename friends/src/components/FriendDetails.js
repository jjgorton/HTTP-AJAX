import React from 'react';

const FriendDetails = (props) => {
	const friend = props.friendsData.find((person) => {
		return `${person.id}` === props.match.params.id;
	});
	if (!friend) return <h3>Loading...</h3>;

	const updatePerson = (e) => {
		e.preventDefault();
		props.setActivePerson(friend);
		props.history.push('/update-friend');
	};

	const deletePerson = (e) => {
		e.preventDefault();
		props.deleteFriend(friend.id);
	};

	return (
		<div className="friends-card details">
			<h2>Name: {friend.name}</h2>
			<p>Age: {friend.age}</p>
			<p>Email: {friend.email}</p>
			<button onClick={updatePerson}>Update Info</button>
			<button onClick={deletePerson}>Delete</button>
		</div>
	);
};

export default FriendDetails;
