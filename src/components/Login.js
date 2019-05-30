import React from 'react';
import { Link } from "react-router-dom";
import userStore from '../redux/userStore';

class Login extends React.Component {
	constructor(prop) {
		super(prop);
		console.log(userStore.getState());
		this['state'] = {
			username: '',
			password: ''
		}
	}
	getUsername = (e) => {
		let username = e.target.value;
		this['setState'](() => {
			return { username };
		});
	}
	getPassword = (e) => {
		let password = e.target.value;
		this['setState'](() => {
			return { password };
		});
	}
	onLogin = (e) => {
		let data = {
			username: this['state'].username,
			password: this['state'].password
		}
		this.validateUser(data);
	}
	validateUser(data) {
		return userStore.getState().filter((e) => {
			if ((e.username === data.username) && (e.password === data.password)) {
				return true;
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
				<div><button onClick={this.onLogin}>Login</button></div>
				<br />
				<Link to="/signup">Sign-up</Link>
			</>
		);
	}
}

export default Login;