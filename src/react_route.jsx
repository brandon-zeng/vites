import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import MainComponent from './views/main.jsx'

class ReactRouter extends React.Component {

	render() {
		return (
			<Router history={browserHistory}>
		    <Route path="/" component={MainComponent}>
		    </Route>
		  </Router>
		)
	}
}

export default ReactRouter;