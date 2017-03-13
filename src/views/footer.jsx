import React from 'react'
import ComponentStyle from '../styles/footer.less'
import Subscribe from './subscription.jsx'
import { Link } from 'react-router'
import ReactGA from 'react-ga'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share'

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} = ShareButtons

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const PinterestIcon = generateShareIcon('pinterest');


class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div >
				<div className={ComponentStyle['footerContent']}> 
					<div className={ComponentStyle['container']}> 
						<div className={ComponentStyle['footer-links']}> 
							<div className={ComponentStyle['footer-section']}>
								<h2>Quick Links</h2>
								<div className={ComponentStyle['footer-link-box']}><Link to="/products" activeStyle={{boxShadow: '0px 1px 0px'}}>Products</Link> </div>
								<div className={ComponentStyle['footer-link-box']}><Link to="/specs" activeStyle={{boxShadow: '0px 1px 0px'}}>Specifications</Link> </div>
								<div className={ComponentStyle['footer-link-box']}><Link to="/about" activeStyle={{boxShadow: '0px 1px 0px'}}>About us</Link> </div>
							</div>
							<div className={ComponentStyle['footer-section']}>
								<h2>Quick Links</h2>
								<p>476 Commonwealth Ave,</p>
								<p>Boston, MA 02215</p>
							</div>
							<div className={ComponentStyle['footer-section']}>
								<h2>Sign up to our mailing list</h2>
								<Subscribe />
							</div>
							<div className={ComponentStyle['footer-section']}>
								<h2>Connect with us</h2>
								<div>
									{/*<FacebookShareButton
										url={"https://www.facebook.com/vitestore"}
										title={"title"}
										picture={'NA'}
										className={ComponentStyle['social-button']}>
										<FacebookIcon
										size={32}
										round />
									</FacebookShareButton>*/}
									<ReactGA.OutboundLink eventLabel="buyButton" to="https://www.facebook.com/vitestore" style={{display: "inline-block", cursor: "pointer"}}>
										<FacebookIcon
										size={32}
										round />
									</ReactGA.OutboundLink>
									<TwitterShareButton
										url={"https://www.facebook.com"}
										title={"title"}
										picture={'NA'}
										className={ComponentStyle['social-button']}>
										<TwitterIcon
										size={32}
										round />
									</TwitterShareButton>
									<PinterestShareButton
										url={"https://www.facebook.com"}
										title={"title"}
										picture={'NA'}
										className={ComponentStyle['social-button']}>
										<PinterestIcon
										size={32}
										round />
									</PinterestShareButton>
								</div>
							</div>
						</div>
						<div className={ComponentStyle['footer-copyright']}> © 2016 vite originⓇ – ALL RIGHTS RESERVED - ALL TRADEMARKS ARE THE PROPERTY OF Vite Studio Inc. </div>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuComponent;