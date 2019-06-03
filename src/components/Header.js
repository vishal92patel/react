import React from 'react';
import loggedInUser from '../redux/loggedInUser';

class Header extends React.Component {
	constructor(props) {
		super();
		this['state'] = { loggedInUserData: [{ name: '' }] };
		loggedInUser.subscribe(() => {
			this['setState'](() => {
				return { loggedInUserData: loggedInUser.getState() }
			});
		});
	}

	render() {
		return (
			<>
				<h3>MyNotes</h3>
				{this['state'].loggedInUserData[0].name ? 'Welcome ' : null}
				<b><u>{this['state'].loggedInUserData[0].name}</u></b>
				<hr />
			</>
		)
	}

}

export default Header;