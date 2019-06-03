import { createStore } from 'redux';

const loggedInUser = ((state = [], action) => {
	switch (action.type) {
		case 'getLoggedInUser':
			return action.user;
		default:
			return state
	}
});

export default createStore(loggedInUser);