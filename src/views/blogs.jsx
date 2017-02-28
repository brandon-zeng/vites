import React from 'react';
import ComponentStyle from '../styles/content.less';

class blogsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{minHeight: 200}}>
				<div className={ComponentStyle['blogs']}>
					It is coming soon!
				</div>
			</div>
		);
	}
}

export default blogsComponent;