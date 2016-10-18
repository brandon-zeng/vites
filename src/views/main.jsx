import React from 'react';
import BrandingComponent from './branding.jsx'
import MenuComponent from './menu.jsx'
import ComponentStyle from '../styles/content.less'

class MainComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	// var backgroundStyle = {
	// 	backgroundImage: "url('static/img/sport.jpg')",
	// 	backgroundSize: "cover",
 //    	backgroundRepeat: "no-repeat",
 //    	backgroundPositionX: -600
	// };

	render() {
		return (
			<div style={{
							backgroundImage: "url('static/img/sport.jpg')",
							backgroundSize: "cover",
					    	backgroundRepeat: "no-repeat",
					    	backgroundPositionX: -600
						}}>
				<div style={{position:"absolute", top: 0, zIndex: 9999}}>
					<BrandingComponent />
					<MenuComponent />
				</div>
				<div className={ComponentStyle['contentBox']}> <br/><br/>detail page comes here </div>
				<div> footer: Vite Studio </div>
			</div>
		);
	}
}

export default MainComponent;