import { createStore } from 'redux';
let defaultUserState = [];
const userListStore = ((state = defaultUserState, action) => {
	switch (action.type) {
		case 'addNewUser':
			return [...state, action.newUser]
		default:
			return state
	}
});

const getUserListFromLocalStorage = () => {
	let userList = localStorage.getItem('userList');
	if (userList && JSON.parse(userList)) {
		defaultUserState = JSON.parse(userList);
	}
}
getUserListFromLocalStorage();
export default createStore(userListStore);