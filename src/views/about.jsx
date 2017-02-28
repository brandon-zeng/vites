import React from 'react';
import ComponentStyle from '../styles/content.less';

class AboutComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{minHeight: 200}}>
				<div className={ComponentStyle['about']}>
					<h1>About us</h1>
					<h3>We are a Boston, MA-based startup. We introduce to the world lifestyle products we think interesting and useful; stuff you don’t know you would need or want, or even exist! We are both passionate about fitness, health, and travel – so our focus will be mostly in these areas.</h3>
					<br />
					<p> Email: viteorigin@gmail.com </p>
					<p> Address: 403 Neponset St, Norwood, MA 02062 </p>
					<div>
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23647.31503164111!2d-71.20273692647805!3d42.1948981790963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e48070ec90973f%3A0x2483f732bafc86cc!2s403+Neponset+St%2C+Norwood%2C+MA+02062!5e0!3m2!1sen!2sus!4v1486609231880" width="600" height="450" frameBorder="0" style={{border: 0}} allowFullScreen></iframe>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutComponent;