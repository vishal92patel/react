import { createStore } from 'redux';

var users = [];
function userStore(state = users, action) {
	switch (action.type) {
		case 'addNewUser':
			return [...state, action.newUser]
		default:
			return state
	}
}

export default createStore(userStore);