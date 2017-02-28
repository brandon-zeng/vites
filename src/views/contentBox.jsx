import React from 'react'
import ReactGA from 'react-ga'
import ComponentStyle from '../styles/content.less'
import SimpleSlider from './imageSlider.jsx'
import SummaryComponent from './summary.jsx'

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
			<div>
				<div className={containerClass} title={"lifestyle with vite origin selfie headphone"}>
					{/* {textDiv} */}
					<div className={ComponentStyle['textArea']}>
						<h2>It’s finally here: the selfie earbuds</h2>
						{/*<p>Vite origin is a personal concierge for all your workout needs – wireless music listening and selfie assistance – in one tiny package </p>*/}
						<h3>$49 with free shipping in the U.S.</h3>
					</div>
				</div>
				<hr style={{clear: "both", marginTop: 20, marginBottom: 20}}/>
				<SummaryComponent />
				<hr style={{clear: "both", marginTop: 20, marginBottom: 20}}/>
				<div style={{position: "relative", display: "block", margin: 10, marginTop: 30, overflow: 'auto' }}>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/yoga_edited.jpg'} alt={"bluetooth selfie headphone"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4></h4> <p >Videotape your workouts</p></div> 
					</div>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/beauty-mid.jpeg'} alt={"bluetooth selfie headphone"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4></h4> <p >Take natural looking photos with elegance.</p></div> 
					</div>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/pod-mid.jpeg'} alt={"bluetooth selfie headphone"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4></h4> <p >Good music, free from wires</p></div> 
					</div>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/landscape-mid.jpg'} alt={"bluetooth selfie headphone"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4></h4> <p >Perfect timing at your fingertips</p></div> 
					</div>
					<div className={ComponentStyle['feature']}> 
						<img src={'/img/facebook-mid.jpg'} alt={"bluetooth selfie headphone"}  className={ComponentStyle['imgArea']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['textArea']}> <h4></h4> <p >Works with your favorite social and native camera apps</p></div> 
					</div>
				</div>
			</div>
		);
	}
}

export default contentBox;