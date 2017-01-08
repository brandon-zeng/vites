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
				<div style={{zIndex: 9999, width: "100%", marginTop: 10, overflow:"hidden"}}>
					<HeaderContainer />
				</div>
				<ContentContainer />
				<hr style={{clear: "both"}}/>
				<Footer />
			</div>
		);
	}
}

export default MainComponent;