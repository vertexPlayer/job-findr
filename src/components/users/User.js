import React, { Component } from 'react';
import UserItem from './UserItem';

const User = ({ users }) => {
	return (
		<div style={userStyle}>
			{users.map((user, index) => {
				return <UserItem key={users[index].id} user={users[index].name} />;
			})}
		</div>
	);
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default User;
// export class User extends Component {

//     render() {

//         return (
//             <div style={userStyle}>
//                 {this.props.users.map(user => (<UserItem key={user.id} user={user}/>))}
//             </div>
//         )
//     }
// }

// export default User
