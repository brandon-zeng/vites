import React from 'react';
import { Link } from 'react-router'
import ComponentStyle from '../styles/header.less'

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={ComponentStyle['brandArea']}>
				<Link to="/products" className={ComponentStyle['anchor']}>
					<img src="/img/logo.jpg" alt="Vite Origin" title="Vite Store headphone"/>
					{/* <span style={{color: "blue"}}>vi</span><span style={{color: "red"}}>te</span> */}
				</Link>
			</div>
		);
	}
}

export default MenuComponent;
