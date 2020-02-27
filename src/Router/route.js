import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from '../Components/Form/index';
import dashboard from '../Components/Dashboard/index';

const Routes = (
	<Router>
		<Route path={'/'} component={login} exact />
		<Route path={'/dashboard'} component={dashboard} exact />
	</Router>
);

export default Routes;
