import React from 'react';
import loggedInUser from '../redux/loggedInUser';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this['state'] = { loggedInUserData: loggedInUser.getState() };
	}
	componentWillMount() {
		if (!this['state'].loggedInUserData[0]) {
			this['props'].history.push('/');
		}
	}
	render() {
		return (
			<>
				This is Dashboard;
			</>
		);
	}
}

export { Dashboard };