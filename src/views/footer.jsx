import React from 'react';
import ComponentStyle from '../styles/footer.less';
import Subscribe from './subscription.jsx';

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div >
				<Subscribe />
				<div className={ComponentStyle['footerContent']}> 
					<div className={ComponentStyle['container']}> 
						<div> © 2016 vite originⓇ – ALL RIGHTS RESERVED - ALL TRADEMARKS ARE THE PROPERTY OF THEIR RESPECTIVE OWNERS. </div>
						<div className={ComponentStyle['footer-copyright']}> 
							<a href='.'> Support </a>
							&nbsp;&nbsp;|&nbsp;&nbsp; 
							<a href='.'> Contact Us </a>
							&nbsp;&nbsp;|&nbsp;&nbsp; 
							<a href='.'> Resellers </a>
							&nbsp;&nbsp;|&nbsp;&nbsp; 
							<a href='.'> Term of uses </a>
							&nbsp;&nbsp;|&nbsp;&nbsp; 
							<a href='.'> Privacy Policy </a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuComponent;