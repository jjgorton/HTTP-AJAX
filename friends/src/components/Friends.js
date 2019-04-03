import React from 'react';

const Friends = (props) => {
	return (
		<div className="friends-card">
			<h2>Name: {props.friend.name}</h2>
			<p>Age: {props.friend.age}</p>
			<p>Email: {props.friend.email}</p>
		</div>
	);
};

export default Friends;
