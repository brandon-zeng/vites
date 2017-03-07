import React from 'react';
import ComponentStyle from '../styles/content.less';

class SpecsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 100, minHeight: 550}}>
				<ul className={ComponentStyle['specsContainer']}> 
					<li><strong>AIRSNAP:</strong> Bluetooth-powered remote shutter control helps you take photos or videos with ease and elegance. Works with native camera apps and Instagram/Snapchat!</li>
					<li><strong>BATTERY:</strong> With the latest Bluetooth V4.0 + EDR, the Vite Origin delivers up to 6 hours of playtime or 250 hours of standby on a full charge.</li>
					<li><strong>SOUND QUALITY:</strong>The Vite earbuds come with sound quality as great as wired earbuds at similar price points. It is crisp and mostly neutral, but can also rock some solid bass!</li>
					<li><strong>NOISE REDUCTION:</strong>Hate those same old songs played at your gym? Traffic noise distracts you while you jog? Do you know that mental concentration on target muscle is key to successful workouts? With CVC 6.0 noise cancellation technology, Vite earbuds allow you to create your personal sound space for better workout results!</li>
					<li><strong>COMPATIBILITY &amp; EASE:</strong>Seamless syncing to your favorite Bluetooth-enabled devices, including iPhone, iPad, Android Phones and Windows Phones from up to 10 meters (33 feet).</li>
					<li><strong>WATERPROOF:</strong>IPX4 grade waterproof, don’t worry about sweat!</li>
				</ul> 
			</div>
		);
	}
}

export default SpecsComponent;