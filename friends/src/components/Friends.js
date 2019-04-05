import React from 'react';

import { Link } from 'react-router-dom';

const Friends = (props) => {
	return (
		<div className="friends-card-container">
			{props.friendsData.map((obj) => (
				<Link to={`/person/${obj.id}`} className="friends-card">
					<h2>{obj.name}</h2>
					<p>Age: {obj.age}</p>
					<p>Email: {obj.email}</p>
				</Link>
			))}
		</div>
	);
};

export default Friends;
