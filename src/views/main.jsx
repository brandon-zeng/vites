import React from 'react'
import HeaderContainer from '../containers/header_container.js'
import ContentContainer from '../containers/content_container.js'
import SimpleSlider from './imageSlider.jsx'
import Footer from './footer.jsx'
import Feedback from './floatFeedback.jsx'

class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		return (
			<div style={{maxWidth: 1600, margin: "auto"}}>
				<HeaderContainer />
				{this.props.children}
				<hr style={{clear: "both", marginTop: 20, marginBottom: 30}}/>
				<Feedback />
				<Footer />
			</div>
		);
	}
}

export default MainComponent;