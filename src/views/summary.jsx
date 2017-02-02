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
					<img src={'/img/yoga_edited.jpg'} alt={"yoga selfie"}  title={"bluetooth selfie headphone"} /> 		
					<img src={'/img/headphone.jpg'} alt={"bluetooth phone"}  title={"bluetooth selfie headphone"} /> 
					<img src={'/img/phonejump.jpg'} alt={"timing selfie"}  title={"bluetooth selfie headphone"} /> 			
				</div>
				<div className={'summary'}> 
					<ul className={'itemText'}> 
						<li>Sleek design</li>
						<li>Bring high quality music with you everywhere</li>
						<li>Capture precious moments at ease </li>
					</ul> 
				</div>
			</div>
		);
	}
}

export default SummaryComponent;
