import React from 'react';
import ComponentStyle from '../styles/footer.less';
import Subscribe from './subscription.jsx';
import { Link } from 'react-router'

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
								<div>F W P I</div>
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