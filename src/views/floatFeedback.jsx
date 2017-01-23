import React from 'react';
import ComponentStyle from '../styles/main.less';

class FeedbackComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalActive: false};
	}

	goggleModal () {
    	this.setState({ modalActive: !this.state.modalActive })
  	}

	closeModal () {
		this.setState({ modalActive: false })
	}

	render() {
		return (
			<div>
				<div className={ComponentStyle['feedbackbutton']}> 
					<img src={'/img/live_chat_offline.png'} alt={"feedback"} onClick={this.goggleModal.bind(this)} className={ComponentStyle['imgArea']}/> 
				</div>
				{this.state.modalActive && (
					<div>
						<div className={ComponentStyle['modelBackground']}> </div>
						<div className={ComponentStyle['modelDialog']}>
							<a title='Close' onClick={this.closeModal.bind(this)} className={ComponentStyle['modelClose']}>X</a>
							<div className={ComponentStyle['modelContent']} >
								<h4>Leave us a message and we will get back to you as soon as we can</h4>
								<p>Your name: <span style={{color: "#FF0000"}}>*</span></p>
								<input type='text' name='name' className={ComponentStyle['modelInput']}/>
								<p>Your email: <span style={{color: "#FF0000"}}>*</span></p>
								<input type='text' name='email' className={ComponentStyle['modelInput']}/>
								<p>Your question: <span style={{color: "#FF0000"}}>*</span></p>
								<textarea style={{width: 240, height: 200}}/>
								<div>
									<input type='button' value='Email us' className={ComponentStyle['modelSubmit']} />
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default FeedbackComponent;
