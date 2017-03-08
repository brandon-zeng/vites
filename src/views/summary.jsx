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
				<div className={'photo-left'}>
					{/*<img src={'/img/story4.jpg'} alt={"yoga selfie"}  title={"bluetooth selfie headphone"} /> 	*/}
					<img src={'/img/product_full.jpg'} alt={"bluetooth phone"}  title={"bluetooth selfie headphone"} />
					{/*{this.props.isOrdered ? <img src={'/img/headphone.jpg'} alt={"bluetooth phone"}  title={"bluetooth selfie headphone"} /> : ''}*/}
					
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
					</ul> 
					<h3>Purchase before April 30th to get a free spider phone holder! It holds you phone in any angle for better photos</h3>
				</div>
				<div className={'photo-right'}>
					<img src={'/img/holder.jpg'} alt={"phone holder"}  title={"bluetooth holder headphone"} />
				</div>
			</div>
		);
	}
}

export default SummaryComponent;
