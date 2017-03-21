import React from 'react';
import ComponentStyle from '../styles/content.less';

class SpecsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		window.notifyPixelAboutSpecs();
	}

	render() {
		
		return (
			<div style={{paddingTop: 50, paddingLeft: 50, paddingRight: 50, minHeight: 550, margin: 'auto'}}>
				<h2>FAQs</h2>
				<div className={ComponentStyle['faqContainer']}> 
					<p className={ComponentStyle['faqQuestion']}>How long does the battery last?</p>
					<p className={ComponentStyle['faqAnswer']}>200 hours standby, 6 hours talk/play time. Enough for most workout sessions.</p>
					<p className={ComponentStyle['faqQuestion']}>How durable are the earbuds?</p>
					<p className={ComponentStyle['faqAnswer']}>They are built with durable engineering plastics and can take a lot of abuse. From my personal experience the weakest part is the audio jack, which will not be a problem at all.</p>
					<p className={ComponentStyle['faqQuestion']}>Are they sweat proof?</p>
					<p className={ComponentStyle['faqAnswer']}>Yes. They are IPX-4 - Protects from splashing water, no matter the direction</p>
					<p className={ComponentStyle['faqQuestion']}>How far away can I connect the Bluetooth from?</p>
					<p className={ComponentStyle['faqAnswer']}>About 30 ft, or 10 m.</p>
					<p className={ComponentStyle['faqQuestion']}>What APPs can Airsnap work on?</p>
					<p className={ComponentStyle['faqAnswer']}>We tested native camera, Instagram and Snapchat on both iOS and a few versions of Android. They all worked except video taking on Snapchat.</p>
				</div> 
				<br />
				<h2>SHIPPING AND RETURN POLICY</h2>
				<div className={ComponentStyle['faqContainer']}> 
					<p><strong>Ships in 1 or 2 days from US, arrives in 10 days.</strong></p>
					<br />

					<p><strong>Domestic Returns (US Only)</strong></p>
					<p>All items purchased and shipped from vitestore.com can be returned within 30 days of receipt of shipment.
						The item must be returned using a trackable shipping method.
						If you've received Damaged/Defective items, please contact us and we will provide you with a prepaid label.
						</p>

					<p><strong>Ineternational Returns</strong></p>
					<p>Please contact us if you need to return your item and we will assist you with it.
						(30 days of receipt of shipment)</p>
				</div>

			</div>
		);
	}
}

export default SpecsComponent;