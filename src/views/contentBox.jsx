import React from 'react'
import ComponentStyle from '../styles/content.less'

class contentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	render() {
		let textDiv;
/*
		if (this.props.pageIndex === "1") {
			textDiv = <div className={ComponentStyle['textArea']}> this is the first page </div>;
		} else {
			textDiv = <div className={ComponentStyle['textArea']}> this is the second page </div>;
		}
*/
		switch(this.props.pageIndex) {
			case "1" : 
				textDiv = <div className={ComponentStyle['textArea']}> this is the 1 page </div>;
				break;
			case "2" : 
				textDiv = <div className={ComponentStyle['textArea']}> this is the 2 page </div>;
				break;
			case "3" : 
				textDiv = <div className={ComponentStyle['textArea']}> this is the 3 page </div>;
				break;
			case "4" : 
				textDiv = <div className={ComponentStyle['textArea']}> this is the 4 page </div>;
				break;
			default: 
				textDiv;
		}

		return (
			<div className={ComponentStyle['contentBox']}>
				{textDiv}
			</div>
		);
	}
}

export default contentBox;