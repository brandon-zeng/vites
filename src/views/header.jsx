import React from 'react'
import BrandingComponent from './branding.jsx';
import MenuComponent from './menu.jsx';
import ComponentStyle from '../styles/header.less';

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {opened: false};
	};

	onOpenIconClick() {
		if (this.state.opened === false) {
			this.setState({opened: true});
		} else {
			this.setState({opened: false});
		}
	}

	getMenuClass() {
		if (this.state.opened === false) {
			return ComponentStyle['menuItem'];
		} else {
			return ComponentStyle['menuItemOpen'];
		}
	}

	render() {
		return (
			<div className = {ComponentStyle['headerContainer']}>
				<BrandingComponent onClick={this.props.onClick}/>
				<div className={ComponentStyle['menuIcon']}><button onClick={this.onOpenIconClick.bind(this)}>&#9776;</button></div>
				<MenuComponent styleName={this.getMenuClass()} pageIndex={this.props.pageIndex} onClick={this.props.onClick}/>
			</div>
		);
	}
}

export default HeaderComponent;