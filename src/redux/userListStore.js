import { createStore } from 'redux';

const userListStore = ((state = [], action) => {
	switch (action.type) {
		case 'addNewUser':
			return [...state, action.newUser]
		default:
			return state
	}
});

export default createStore(userListStore);