import React from 'react';
import ComponentStyle from '../styles/content.less';

class AboutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 65, minHeight: 200}}>
				<div className={ComponentStyle['about']}>
					<h1>About us</h1>
					<h3>We are a Boston, MA-based startup. We introduce to the world lifestyle products we think interesting and useful; stuff you don’t know you would need or want, or even exist! We are both passionate about fitness, health, and travel – so our focus will be mostly in these areas.</h3>
					<br />
					<p> Email: viteorigin@gmail.com </p>
					<p> Address: 476 Commonwealth Ave, Boston, MA02215 </p>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.7212267714!2d-71.09604314888392!3d42.348466543723994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a1cd59997cd%3A0xbfb28c20971bdc59!2s476+Commonwealth+Avenue%2C+Boston%2C+MA+02215!5e0!3m2!1sen!2sus!4v1488682811658"  width="500" height="400" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutComponent;