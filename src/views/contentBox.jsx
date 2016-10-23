import React from 'react'
import ComponentStyle from '../styles/content.less'
import SimpleSlider from './imageSlider.jsx'

class contentBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.pageIndex === '4' && this.props.pageIndex !== nextProps.pageIndex) {
			nextProps.fetchDb();
		}
	}

	componentWillMount() {
		if (this.props.pageIndex === '4') {
			this.props.fetchDb();
		}
	}

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
				textDiv = <div className={ComponentStyle['textArea']}> <SimpleSlider /> </div>;
				break;
			case "4" : 
				textDiv = <div className={ComponentStyle['textArea']}> 
							{this.props.dbData.isFetching?'Waiting for the db data...' : JSON.stringify(this.props.dbData.data)} 
							</div>;
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