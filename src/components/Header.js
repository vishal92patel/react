import React from 'react';
import { Link } from "react-router-dom";
import loggedInUser from '../redux/loggedInUser';
import { commonService } from '../services/CommonService';

class Header extends React.Component {
	unsubscribeLoggedInUser;
	constructor(props) {
		super();
		this['state'] = { loggedInUserData: loggedInUser.getState() };
		this.unsubscribeLoggedInUser = loggedInUser.subscribe(() => {
			this['setState'](() => {
				return { loggedInUserData: loggedInUser.getState() }
			});
		});
	}
	componentWillUnmount() {
		this.unsubscribeLoggedInUser();
	}
	logout() {
		commonService.logout();
	}

	render() {
		return (
			<>
				<h3>MyNotes</h3>
				{ this['state'].loggedInUserData && this['state'].loggedInUserData[0] && this['state'].loggedInUserData[0].name ? 'Welcome' : null }
				<h2 className="dashboard-title"><u>{ this['state'].loggedInUserData && this['state'].loggedInUserData[0] && this['state'].loggedInUserData[0].name }</u></h2>
				<i> { this['state'].loggedInUserData && this['state'].loggedInUserData[0] && this['state'].loggedInUserData[0].name ? <Link to="/" onClick={this.logout}> Logout</Link> : null } </i>
				<hr />
			</>
		)
	}

}

export default Header;