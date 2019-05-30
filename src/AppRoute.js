import React from 'react';
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import { Dashboard } from './components/Dashboard';

function AppRouter() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<Route path="/login" component={Login} exact={true} />
				<Route path="/signup" component={Signup} exact={true} />
				<Route path="/dashboard" component={Dashboard} exact={true} />
				{/* <Route component={Login} /> */}
				<Redirect to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default AppRouter;