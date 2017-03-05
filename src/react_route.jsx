import React from 'react'
import { render } from 'react-dom'
import ReactGA from 'react-ga'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import MainComponent from './views/main.jsx'
import ContentContainer from './containers/content_container.js'
import ContentContainerB from './containers/content_containerB.js'
import Stories from './views/stories.jsx'
import Specs from './views/specs.jsx'
import About from './views/about.jsx'
import Blogs from './views/blogs.jsx'
import Commercial from './views/commercial.jsx'

class ReactRouter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		ReactGA.initialize('UA-90130036-1');
	}

	logPageView() {
		ReactGA.set({ page: window.location.pathname });
		ReactGA.pageview(window.location.pathname);
	}

	render() {
		return (
			<Router history={browserHistory} onUpdate={this.logPageView} >
		    <Route path="/" component={MainComponent}>
					<IndexRedirect to="/products" />
					<Route path="products" component={ContentContainer} />
					<Route path="productsB" component={ContentContainerB} />
					<Route path="stories" component={Stories} />
					<Route path="specs" component={Specs} />
					<Route path="about" component={About} />
					{/*<Route path="blogs" component={Blogs} />*/}
					<Route path="commercial" component={Commercial} />
		    </Route>
		  </Router>
		)
	}
}

export default ReactRouter;