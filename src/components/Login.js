import React from 'react';
import { Link } from "react-router-dom";
import userStore from '../redux/userStore';

class Login extends React.Component {
	constructor(prop) {
		super(prop);
		console.log(userStore.getState());
		this['state'] = {
			username: '',
			password: '',
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
		this['setState'](() => {
			return {
				loggedInUserData: this.validateUser(data)
			};
		});
		this.validateUser(data);
	}
	validateUser(data) {
		return userStore.getState().filter((e) => {
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