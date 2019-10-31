import React from 'react';

// export class Navbar extends Component {
// 	static defaultProps = {
// 		title: 'Job Findr',
// 		icon: 'fa fa-search'
// 	};

// 	static propTypes = {
// 		title: PropTypes.string.isRequired,
// 		icon: PropTypes.string.isRequired
// 	};
// 	render() {
// 		return (
// 			<nav className="navbar bg-dark">
// 				<h1>
// 					<i className={this.props.icon} /> {this.props.title}
// 				</h1>
// 				<div className="searchbox">
// 					<form>
// 						<input type="search" className="form-text" placeholder="Cari user......" />
// 					</form>
// 				</div>
// 			</nav>
// 		);
// 	}
// }

const Navbar = ({ icon, title, searchChange }) => {
	return (
		<nav className="navbar bg-dark">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<div className="searchbox">
				<form>
					<input type="search" className="form-text" placeholder="Cari user......" onChange={searchChange} />
				</form>
			</div>
		</nav>
	);
};

export default Navbar;
