import React from 'react';
import * as allApi from '../api/root_api.js';
import ComponentStyle from '../styles/main.less';

class FeedbackComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalActive: false, name: '', email: '', message: ''};
	}

	toggleModal () {
    	this.setState({ modalActive: !this.state.modalActive })
  	}

	closeModal () {
		this.setState({ modalActive: false })
	}

	validateEmail (value) {
		// regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(value);
  	}
	
	setValue(field, event) {
		//If the input fields were directly within this
		//this component, we could use this.refs.[FIELD].value
		//Instead, we want to save the data for when the form is submitted
		var object = {};
		object[field] = event.target.value;
		this.setState(object);
  	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("form submitted");

		this.state.name && allApi.submitFeedback(this.state.name, this.state.email, this.state.message)
		.then(response => {
			console.log(JSON.stringify(response.data));
			//dispatch(updateFetchDb(response.data));
		})
		.catch(error => {
			console.log(error);
		})

		this.closeModal();
  }

	render() {
		return (
			<div>
				<div className={ComponentStyle['feedbackbutton']}> 
					<img src={'/img/live_chat_offline.png'} alt={"feedback"} onClick={this.toggleModal.bind(this)} className={ComponentStyle['imgArea']}/> 
				</div>
				{this.state.modalActive && (
					<div>
						<div className={'modelBackground'}> </div>
						<form className={'feedbackForm'} onSubmit={this.handleSubmit.bind(this)}>
							<div className={'modelDialog'}>
								<div className="verLine"></div>
								<div className="verLine2"></div>
								<div className="innerBox">
									<a title='Close' onClick={this.closeModal.bind(this)} className={'modelClose'}>X</a>
									<div className={'modelContent'} >
										<h4>Leave us a message and we will get back to you as soon as we can</h4>
										<p>Your name: <span style={{color: "#FF0000"}}>*</span></p>
										<input type='text' name='name' className={'modelInput'} value={this.state.name} onChange={this.setValue.bind(this, 'name')}/>
										<p>Your email: <span style={{color: "#FF0000"}}>*</span></p>
										<input type='text' name='name' className={'modelInput'} value={this.state.email} onChange={this.setValue.bind(this, 'email')}/>
										<p>Your question: <span style={{color: "#FF0000"}}>*</span></p>
										<textarea className={'modelTextarea'} value={this.state.message} onChange={this.setValue.bind(this, 'message')}/>
										<div>
											<input type='submit' value='Email us' className={'modelSubmit'} />
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				)}
			</div>
		);
	}
}

export default FeedbackComponent;
