import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
// import User from './components/users/User';
import CardList from './CardList';
import './App.css';

class App extends Component {
	state = {
		users: [],
		searchField: '',
		loading: false
	};

	componentDidMount() {
		this.setState({ loading: true });
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) => this.setState({ users: users, loading: false }))
			.catch((err) => console.log(err));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });

		// console.log(filteredUser);
	};
	render() {
		const filteredUser = this.state.users.filter((user) => {
			return user.username.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div className="App">
				<Navbar icon={'fa fa-search'} title={'Job Findr'} searchChange={this.onSearchChange} />
				<div className="container">
					{/* <User loading={this.state.loading} users={this.state.users} /> */}
					<CardList users={filteredUser} />
				</div>
			</div>
		);
	}
}

export default App;
