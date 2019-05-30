import React from 'react';
import { Link } from "react-router-dom";
import userStore from '../redux/userStore';

class Signup extends React.Component {
	constructor(prop) {
		super(prop);
		console.log(prop);
		console.log(this);
		this['state'] = {
			name: '',
			username: '',
			password: '',
			accountCreated: false
		}
		userStore.subscribe(() => {
			console.log(userStore.getState());
		});
	}

	getName = (e) => {
		var name = e.target.value;
		this['setState']((state, prop) => {
			return { name, accountCreated: false };
		});
	};
	getUsername = (e) => {
		var username = e.target.value;
		this['setState'](() => {
			return { username, accountCreated: false };
		});
	};
	getPassword = (e) => {
		var password = e.target.value;
		this['setState'](() => {
			return { password, accountCreated: false };
		});
	};
	onSignUp = (e) => {
		let newUser = {
			name: this['state'].name,
			username: this['state'].username,
			password: this['state'].password
		}
		if (this['state'].name && this['state'].username && this['state'].password) {
			userStore.dispatch({ type: 'addNewUser', newUser });
			this['setState'](() => {
				return { name: '', username: '', password: '', accountCreated: true };
			});
		} else {
			this['setState'](() => {
				return { accountCreated: false };
			});
		}

	}
	render() {
		return (
			<>
				<h3>Signup</h3>
				<div><input type="text" placeholder="Name" value={this['state'].name} onChange={this.getName} /></div>
				<div><input type="text" placeholder="Username" value={this['state'].username} onChange={this.getUsername} /></div>
				<div><input type="text" placeholder="Password" value={this['state'].password} onChange={this.getPassword} /></div>
				<br />{this['state'].accountCreated ? 'Account created successfully.' : null}<br />
				<br />
				<div><button onClick={this.onSignUp}>Signup</button></div>
				<br />
				<Link to="/login">Login</Link>
			</>
		);
	}
}

export default Signup; 