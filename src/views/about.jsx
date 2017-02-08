import React from 'react';
import ComponentStyle from '../styles/content.less';

class AboutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 150, minHeight: 200}}>
				<div className={ComponentStyle['about']}>
					<h1>About us</h1>
					<h3>We are a Boston, MA-based startup. We introduce to the world lifestyle products we think interesting and useful; stuff you don’t know you would need or want, or even exist! We are both passionate about fitness, health, and travel – so our focus will be mostly in these areas.</h3>
					<br />
					<p> Email: viteorigin@gmail.com </p>
					<p> Address: 403 Neponset St, Norwood, MA 02062 </p>
				</div>
			</div>
		);
	}
}

export default AboutComponent;