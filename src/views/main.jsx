import React from 'react'
import HeaderContainer from '../containers/header_container.js'
import ContentContainer from '../containers/content_container.js'
import SimpleSlider from './imageSlider.jsx'

class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		return (
			<div>
				<div style={{zIndex: 9999, width: "100%", background: "#ecebe8"}}>
					<HeaderContainer />
				</div>
				<ContentContainer />
				<div> footer: Vite Studio </div>
			</div>
		);
	}
}

export default MainComponent;