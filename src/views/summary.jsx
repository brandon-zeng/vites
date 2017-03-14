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
					<h3>The best way to take selfies</h3>
					<ul className={'itemText'}> 
						<li><div><img src={'/img/icon-camera.png'}/></div><div>Remote photo taking via Airsnap technology. Secure your phone, step away, and snap!</div></li>
						<li><div><img src={'/img/icon-headphone.png'}/></div><div>Untangled, wireless listening!</div></li>
						<li></li>
						<li><div><img src={'/img/icon-gift.png'}/></div><div>Purchase before April 30th to get a free spider phone holder! </div></li>
					</ul> 
				</div>
				<div className={'photo-right'}>
					<img src={'/img/holder.jpg'} alt={"phone holder"}  title={"bluetooth holder headphone"} />
				</div>
			</div>
		);
	}
}

export default SummaryComponent;
