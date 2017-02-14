import React from 'react';
import ComponentStyle from '../styles/content.less';

class StoriesComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div style={{paddingTop: 100, minHeight: 200}}>
				<div className={ComponentStyle['stories']}>
					<div className={ComponentStyle['item']}> 
						{/* <img src={'/img/selfie-family.png'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> */}		
						<div className={ComponentStyle['itemImage1']}> </div>				
						<div className={ComponentStyle['text']}>
							<div className={ComponentStyle['itemText']}> Remember the time you scrambled to shoot a group photo? A friend has to be left out to take it? Handheld selfie can’t cover everyone? Camera timer is too clumsy to use?<br />Airsnap will make you hero of the party!</div> 
						</div>
					</div>
					<div className={ComponentStyle['item']}> 
						{/* <img src={'/img/yoga.jpg'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> */}			
						<div className={ComponentStyle['itemImage4']}> </div>			
						<div className={ComponentStyle['text']}>
							<div className={ComponentStyle['itemText']}> No more awkward selfies with extruding arms, bathroom mirrors or unnatural angle. It is so good it doesn’t look like a selfie! Need selfie bursts? Place your phone, open the camera app and click away! Want to use the back camera for higher quality selfies? Now you can easily set it up and snap away!</div> 
						</div>
					</div>
					<div className={ComponentStyle['item']}> 
						{/* <img src={'/img/yoga.jpg'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> */}			
						<div className={ComponentStyle['itemImage3']}> </div>			
						<div className={ComponentStyle['text']}>
							<div className={ComponentStyle['itemText']}> Easily take any workout videos as you can and share them on your favorite social media apps.</div> 
						</div>
					</div>
					<div className={ComponentStyle['item']}> 
						{/* <img src={'/img/yoga.jpg'} alt={"family"}  className={ComponentStyle['itemImg']} title={"bluetooth selfie headphone"} /> */}		
						<div className={ComponentStyle['itemImage2']}> </div>				
						<div className={ComponentStyle['text']}>
							<div className={ComponentStyle['itemText']}> Exploring the world solo? Now you have a personal photographer</div> 
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StoriesComponent;
