import React from 'react';
import ComponentStyle from '../styles/content.less';

class ContactsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getIdFromVideoString (vString) {
		const urlArr = vString.split('/');
		const idString = urlArr[urlArr.length - 1];
		const queryParams = qs.extract(vString);

		return (queryParams && qs.parse(queryParams).v) || idString || '';
	}

	render() {
		{/*
		const {service, video, ...htmlTags} = this.props;
		const src = `${SocialVideo.urlMap.get(service)}${this.getIdFromVideoString(video)}`;
		*/}

		return (
			<div style={{paddingTop: 200, flex: 1}}>
				<iframe width="800" height="500" src="https://www.youtube.com/embed/rAcaTxSMIho" frameborder="0" 
					allowfullscreen 
					webkitAllowFullScreen 
					mozallowfullscreen
					style={{margin: '0 auto', display: 'block'}}></iframe>
			</div>
		);
	}
}

export default ContactsComponent;