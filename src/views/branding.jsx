import React from 'react';
import ComponentStyle from '../styles/branding.less'

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={ComponentStyle['brandArea']}>
				Vite Studio
			</div>
		);
	}
}

export default MenuComponent;
