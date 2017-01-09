import React from 'react'
import HeaderContainer from '../containers/header_container.js'
import ContentContainer from '../containers/content_container.js'
import SimpleSlider from './imageSlider.jsx'
import Footer from './footer.jsx'

class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		return (
			<div>
				<HeaderContainer />
				<ContentContainer />
				<hr style={{clear: "both", marginTop: 20, marginBottom: 30}}/>
				<Footer />
			</div>
		);
	}
}

export default MainComponent;