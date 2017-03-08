import React from 'react'
import ReactGA from 'react-ga'
import BrandingComponent from './branding.jsx';
import MenuComponent from './menu.jsx';
import ComponentStyle from '../styles/header.less';

class HeaderComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {opened: false, containerClass: ComponentStyle['headerContainer']};
	};

	onOpenIconClick() {
		if (this.state.opened === false) {
			this.setState({opened: true, contianerClass: this.state.containerClass});
		} else {
			this.setState({opened: false, contianerClass: this.state.containerClass});
		}
	}

	closeMenu() {
		if (this.state.opened === true) {
			this.setState({opened: false, contianerClass: this.state.containerClass});
		}
	}

	getMenuClass() {
		if (this.state.opened === false) {
			return ComponentStyle['menuItem'];
		} else {
			return ComponentStyle['menuItemOpen'];
		}
	}

	handleScroll(event) {
        // Do something generic, if you have to
        // console.log("ScrollWrapper's handleScroll: " + document.body.scrollTop);

        // Call the passed-in prop
        if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
			this.setState({opened: this.state.opened, containerClass: ComponentStyle['headerContainerWhite']})
		} else {
			this.setState({opened: this.state.opened, containerClass: ComponentStyle['headerContainer']})
		}
    }

	componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
    }

	render() {
		return (
			<div className = {this.state.containerClass}>
				<BrandingComponent onClick={this.props.onClick}/>
				<div className={ComponentStyle['menuIcon']}><button onClick={this.onOpenIconClick.bind(this)}>&#9776;</button></div>
				<ReactGA.OutboundLink eventLabel="buyButton" to="https://www.amazon.com/dp/B01MYXSBM9"><div className={ComponentStyle['menuBuy']}></div></ReactGA.OutboundLink>
				{/*<div className={ComponentStyle['amazonImg']}>
					<ReactGA.OutboundLink eventLabel="buyButton" to="https://www.amazon.com/dp/B01MYXSBM9">
						<img src="img/amazon-buy.png" alt="vite store buy from Amazon" height="42" width="42" />
					</ReactGA.OutboundLink>
				</div>*/}
				<MenuComponent styleName={this.getMenuClass()} pageIndex={this.props.pageIndex} onClick={this.props.onClick} hideMenu={this.onOpenIconClick.bind(this)} onClickOutside={this.closeMenu.bind(this)}/>
			</div>
		);
	}
}

export default HeaderComponent;