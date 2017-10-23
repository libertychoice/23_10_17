import React, { Component } from 'react';
import map from 'lodash/map';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import App from './App';

class AppRouter extends Component {
	click() {
		map([1, 2, 4], (el) => el);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path={'/'} component={App}/>
					<Route exact path={'/about/:id'} component={About}/>
				</Switch>
			</Router>
		);
	}
}

export default AppRouter;