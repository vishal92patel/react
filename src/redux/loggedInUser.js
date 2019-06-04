import { createStore } from 'redux';
let loggedInUserInfo = [];
const loggedInUser = ((state = loggedInUserInfo, action) => {
	switch (action.type) {
		case 'getLoggedInUser':
			return action.user;
		default:
			return state
	}
});

const saveLoggedInUserInfo = () => {
	let loggedInUser = localStorage.getItem('loggedInUser');
	if (loggedInUser && JSON.parse(loggedInUser)) {
		loggedInUserInfo = JSON.parse(loggedInUser);
		// loggedInUser.dispatch({ type: 'getLoggedInUser', user: loggedInUserInfo });
	}
}
saveLoggedInUserInfo();
export default createStore(loggedInUser);