import React from 'react';
import { Link } from "react-router-dom";
import userListStore from '../redux/userListStore';
import loggedInUser from '../redux/loggedInUser';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this['state'] = {
			username: 'vishal',
			password: 'patel',
			loggedInUserData: null
		}
	}
	getUsername = (e) => {
		let username = e.target.value;
		this['setState'](() => {
			return { username };
		});
		this['setState'](() => {
			return {
				loggedInUserData: false
			};
		});
	}
	getPassword = (e) => {
		let password = e.target.value;
		this['setState'](() => {
			return { password };
		});
		this['setState'](() => {
			return {
				loggedInUserData: false
			};
		});
	}
	onLogin = (e) => {
		let data = {
			username: this['state'].username,
			password: this['state'].password
		}
		let user = this.validateUser(data);
		this['setState'](() => {
			return {
				loggedInUserData: user
			};
		});
		if (user && user.length && user.length === 1) {
			loggedInUser.dispatch({ type: 'getLoggedInUser', user: user });
			this.props.history.push('/dashboard');
		}
	}
	validateUser(data) {
		return userListStore.getState().filter((e) => {
			if ((e.username === data.username) && (e.password === data.password)) {
				return true;
			} else {
				return false;
			}
		});
	}
	render() {
		return (
			<>
				<h3>Login</h3>
				<div><input type="text" placeholder="Username" value={this['state'].username} onChange={this.getUsername} /></div>
				<div><input type="text" placeholder="Password" value={this['state'].password} onChange={this.getPassword} /></div>
				<br />
				{(this['state'].loggedInUserData && this['state'].loggedInUserData !== null && this['state'].loggedInUserData.length !== 1) ? 'Username or password invalid' : null}
				{(this['state'].loggedInUserData && this['state'].loggedInUserData.length === 1) ? 'Login successfully' : null}
				<br /><br />
				<div><button onClick={this.onLogin}>Login</button></div>
				<br />
				<Link to="/signup">Sign-up</Link>
			</>
		);
	}
}

export default Login;