import React from 'react';
import ComponentStyle from '../styles/content.less';

class ContactsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 200, minHeight: 200}}>
				<div className={ComponentStyle['contacts']}>
					<p> Email: viteorigin@gmail.com </p>
					<p> Address: 403 Neponset St, Norwood, MA 02062 </p>
				</div>
			</div>
		);
	}
}

export default ContactsComponent;