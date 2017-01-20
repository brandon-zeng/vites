import React from 'react';
import ComponentStyle from '../styles/content.less';

class StoriesComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 100, minHeight: 200}}>
				<div className={ComponentStyle['stories']}>
					Stories are coming!
				</div>
			</div>
		);
	}
}

export default StoriesComponent;
