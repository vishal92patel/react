import loggedInUser from '../redux/loggedInUser';

class CommonService {
	logout = (r) => {
		localStorage.removeItem('loggedInUser');
		loggedInUser.dispatch({ type: 'getLoggedInUser', user: [] });
	}
}
export const commonService = new CommonService();
