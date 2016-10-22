import React from 'react'
import BrandingComponent from './branding.jsx'
import MenuComponent from './menu.jsx'

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		return (
			<div>
				<BrandingComponent onClick={this.props.onClick}/>
				<MenuComponent pageIndex={this.props.pageIndex} onClick={this.props.onClick}/>
			</div>
		);
	}
}

export default HeaderComponent;