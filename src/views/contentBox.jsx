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
/*		let containerClass= (this.props.pageIndex === "0")?ComponentStyle['contentBoxSlide']:ComponentStyle['contentBox']; */
		let containerClass=ComponentStyle['contentBox'];
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
				textDiv = <div className={ComponentStyle['textArea']}> 
							{this.props.dbData.isFetching?'Waiting for the db data...' : JSON.stringify(this.props.dbData.data)} 
							</div>;
				break;
			default: 
				/*  textDiv = <SimpleSlider />;  */
				textDiv = <div style={{width: 500, height: 100}}> 1 </div>;
		}

		return (
			<div style={{paddingTop: 100}}>
				<div className={containerClass} title={"lifestyle with vite origin selfie headphone"}>
					{/* {textDiv} */}
					{/*<div className={ComponentStyle['textAreaMid']}> <h1>The only selfie headphone you need </h1></div>*/}
				</div>
				<div style={{position: "relative", display: "block", margin: 10, marginTop: 30, overflow: 'auto' }}>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/selfie-family.png'} alt={"family"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4>superior sound</h4> <p >the best sound quality in the world that exceeds your expectation</p></div> 
					</div>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/selfie-group.jpg'} alt={"group"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} />
						<div className={ComponentStyle['textArea']}> <h4>remote camera control</h4> <p>you can make a selfie in distance without a stick even when you are doing excercise</p></div>  
					</div>
					<div className={ComponentStyle['feature']}>
						<img src={'/img/selfie-self.png'} alt={"selfie"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4>egonomic design</h4> <p>fits your ear well, it is designed to work out with you</p></div> 
					</div>
				</div>
			</div>
		);
	}
}

export default contentBox;