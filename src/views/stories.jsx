import React from 'react';
import ComponentStyle from '../styles/content.less';

class StoriesComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 200, minHeight: 200}}>
				<div className={ComponentStyle['stories']}>
					<div className={ComponentStyle['item']}> 
						<img src={'/img/selfie-family.png'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['itemText']}> You can easily take a photo of your whole family at home or outdoor without any help. And the photo is not limited by the lenghth of the selfie stick</div> 
					</div>
					<div className={ComponentStyle['item']}> 
						<img src={'/img/yoga.jpg'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> 
						<div className={ComponentStyle['itemText']}> You can easily take a selfie even when you are doing a Yoga position or making a dance move that you don't have free hand to hold a selfie stick</div> 
					</div>
				</div>
			</div>
		);
	}
}

export default StoriesComponent;
