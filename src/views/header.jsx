import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import BrandingComponent from './branding.jsx';
import MenuComponent from './menu.jsx';
import ComponentStyle from '../styles/header.less';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');

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
        // Call the passed-in prop
        if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
			this.setState({opened: this.state.opened, containerClass: ComponentStyle['headerContainerWhite']})
		} else {
			this.setState({opened: this.state.opened, containerClass: ComponentStyle['headerContainer']})
		}
    }

	notifyBuyClick() {
		console.log('buy button is clicked up');
		window.notifyPixelAboutPurchase();
	}

	componentDidMount() {
        window.addEventListener("scroll", this.handleScroll.bind(this));
		window.__myapp_container.addEventListener('click', this.handleDocumentClick.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll.bind(this));
		window.__myapp_container.removeEventListener('click', this.handleDocumentClick.bind(this))
    }


	/* using fat arrow to bind to instance */
	handleDocumentClick(evt) {
		const area = ReactDOM.findDOMNode(this.refs.area);
		const menuButton = ReactDOM.findDOMNode(this.refs.menuButton);

		if (menuButton.contains(evt.target)) {
			this.onOpenIconClick();
		} else {
			if (!area.contains(evt.target)) {
				this.closeMenu(evt)
			}
		}
	}

	render() {
		return (
			<div className = {this.state.containerClass}>
				<BrandingComponent onClick={this.props.onClick}/>
				<div className={ComponentStyle['menuIcon']}><button ref="menuButton">&#9776;</button></div>
				<div className={ComponentStyle['social-section']}>
					<div className={ComponentStyle['social-area']}>
						<div>
							<ReactGA.OutboundLink eventLabel="fbButton" to="https://www.facebook.com/vitestore" style={{display: "inline-block", marginLeft: 5, cursor: "pointer"}}>
								<FacebookIcon
								size={32}
								round />
							</ReactGA.OutboundLink>
							<ReactGA.OutboundLink eventLabel="twButton" to="https://twitter.com/vitestore" style={{display: "inline-block", marginLeft: 5, cursor: "pointer"}}>
								<TwitterIcon
								size={32}
								round />
							</ReactGA.OutboundLink>
							<ReactGA.OutboundLink eventLabel="pinButton" to="https://www.pinterest.com/vitestudio" style={{display: "inline-block", marginLeft: 5, cursor: "pointer"}}>
								<PinterestIcon
								size={32}
								round />
							</ReactGA.OutboundLink>
						</div>
					</div>
					<ReactGA.OutboundLink eventLabel="buyButton" to="https://www.facebook.com/commerce/products/1438699939505294"><div className={ComponentStyle['menuBuy']} onClick={this.notifyBuyClick.bind(this)}></div></ReactGA.OutboundLink>
				</div>
				{/*<div className={ComponentStyle['amazonImg']}>
					<ReactGA.OutboundLink eventLabel="buyButton" to="https://www.amazon.com/dp/B01MYXSBM9">
						<img src="img/amazon-buy.png" alt="vite store buy from Amazon" height="42" width="42" />
					</ReactGA.OutboundLink>
				</div>*/}
				<MenuComponent styleName={this.getMenuClass()} pageIndex={this.props.pageIndex} onClick={this.closeMenu.bind(this)} ref="area"/>
			</div>
		);
	}
}

export default HeaderComponent;