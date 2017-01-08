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
				<div> more footer </div>
			</div>
		);
	}
}

export default MenuComponent;