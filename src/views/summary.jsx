import React from 'react';
import ComponentStyle from '../styles/content.less';

class SummaryComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div className={'summaryContainer'}>
				<div className={'photos'}> 
					<img src={'/img/viteread.jpg'} alt={"read in music"}  title={"bluetooth selfie headphone"} /> 
					<img src={'/img/story4.jpg'} alt={"yoga selfie"}  title={"bluetooth selfie headphone"} /> 		
					<img src={'/img/headphone.jpg'} alt={"bluetooth phone"}  title={"bluetooth selfie headphone"} /> 
					<img src={'/img/phonejump.jpg'} alt={"timing selfie"}  title={"bluetooth selfie headphone"} /> 			
				</div>
				<div className={'summary'}> 
					<h3>Connect Vite Origin to your smartphones via Bluetooth for :</h3>
					<ul className={'itemText'}> 
						<li>Untangled, wireless listening</li>
						<li>Remote photo taking via Airsnap technology. Secure your phone, step away, and snap!</li>
					</ul> 
				</div>
			</div>
		);
	}
}

export default SummaryComponent;
