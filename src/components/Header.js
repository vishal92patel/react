import React from 'react';
import loggedInUser from '../redux/loggedInUser';

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

	render() {
		return (
			<>
				<h3>MyNotes</h3>
				{this['state'].loggedInUserData && this['state'].loggedInUserData[0] && this['state'].loggedInUserData[0].name ? 'Welcome ' : null}
				<b><u>{this['state'].loggedInUserData && this['state'].loggedInUserData[0] && this['state'].loggedInUserData[0].name}</u></b>
				<hr />
			</>
		)
	}

}

export default Header;