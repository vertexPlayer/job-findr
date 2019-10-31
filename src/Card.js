import React from 'react';

const Card = ({ user }) => {
	return (
		<div className="card text-center">
			<img src={`https://robohash.org/${user.id}`} className="round-img" style={{ width: '60px' }} alt="" />
			<h1>{user.username}</h1>
			<h2>{user.name}</h2>

			<p>{`${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`}</p>
			<p>{`${user.address.geo.lat}, ${user.address.geo.lng}`}</p>

			<div>
				<a href={user.name} target="_blank" className="btn btn-dark btn-sm my-1" rel="noopener noreferrer">
					More
				</a>
			</div>
			{/* <img src="" alt="user" />

			<div>
				<h2>{props.id}</h2>
				<p>{props.name}</p>
			</div> */}
		</div>
	);
};

export default Card;
