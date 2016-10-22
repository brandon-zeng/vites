import React from 'react';
import ComponentStyle from '../styles/branding.less'

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onLinkClick() {
    	this.props.onClick("0");
    }

	render() {
		return (
			<div className={ComponentStyle['brandArea']}>
				<a href="javascript:void(0)" onClick={this.onLinkClick.bind(this)}>
					<img src="/img/brand.jpg" alt="Vite Origin" />
				</a>
			</div>
		);
	}
}

export default MenuComponent;
