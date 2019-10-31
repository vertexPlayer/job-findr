import React from 'react';
import Card from './Card';

const CardList = ({ users }) => {
	const userList = users.map((user, i) => {
		return <Card key={i} user={user} />;
	});
	return <div style={userStyle}>{userList}</div>;
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '2rem'
};

export default CardList;
