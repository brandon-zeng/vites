import React from 'react';
import ComponentStyle from '../styles/content.less';

class SummaryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let theClassName = this.props.isOrdered ? 'summaryContainerOrdered' : 'summaryContainer';
		
		return (
			<div className={theClassName}>
				<div className={'photos'}>
					{/*<img src={'/img/story4.jpg'} alt={"yoga selfie"}  title={"bluetooth selfie headphone"} /> 	*/}
					{this.props.isOrdered ? <img src={'/img/headphone.jpg'} alt={"bluetooth phone"}  title={"bluetooth selfie headphone"} /> : ''}
					<img src={'/img/holder.jpg'} alt={"phone holder"}  title={"bluetooth holder headphone"} />
					{/*{this.props.isOrdered ? <br style={{clear: "all"}} /> : ''}	
					<img src={'/img/headphone2.jpg'} alt={"timing selfie"}  title={"bluetooth selfie headphone"} /> 
					<img src={'/img/headphone3.jpg'} alt={"timing selfie"}  title={"bluetooth selfie headphone"} />
					<img src={'/img/viteread.jpg'} alt={"read in music"}  title={"bluetooth selfie headphone"} /> 				*/}
				</div>
				<div className={'summary'}> 
					<h3>Connect Vite Origin to your smartphones via Bluetooth for :</h3>
					<ul className={'itemText'}> 
						<li>Untangled, wireless listening</li>
						<li>Remote photo taking via Airsnap technology. Secure your phone, step away, and snap!</li>
						<li>The spider holds your phone anywhere in any angle, even in a car or on a bike</li>
					</ul> 
				</div>
			</div>
		);
	}
}

export default SummaryComponent;
