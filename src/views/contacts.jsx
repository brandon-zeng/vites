import React from 'react';
import ComponentStyle from '../styles/content.less';

class ContactsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 100, minHeight: 200}}>
				<div className={ComponentStyle['contacts']}>
					Contacts are coming!
				</div>
			</div>
		);
	}
}

export default ContactsComponent;