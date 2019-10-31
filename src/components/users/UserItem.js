import React from 'react';
import PropTypes from 'prop-types';

const UserItem = (props) => {
	const { id, name } = props.user;
	return (
		<div className="card text-center">
			<img src="" className="round-img" style={{ width: '60px' }} alt="" />
			<h1>{name}</h1>
			<div>
				<a href={name} target="_blank" className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
