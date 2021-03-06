import React from 'react';
import * as allApi from '../api/root_api.js';
import ComponentStyle from '../styles/main.less';

class FeedbackComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	initialState() {
		return {modalActive: false, name: '', email: '', message: '', isCloing: false, errorMessage: ''};
	}

	toggleModal () {
		if (this.state.modalActive === false) {
			this.setModalState(this, true);
		} else {
			this.closingModal();
		}
  	}

	closingModal() {
		//let {isClosing, ...oldState} = this.state;
		this.setState({modalActive: true, isCloing: true});
		setTimeout(this.setModalState, 1000, this, false);
	}

	setModalState(self, state) {
		self.setState({ modalActive: state, 
						name: '', 
						email: '', 
						message: '', 
						isCloing: false,
						errorMessage: ''})
	}

	closeModal () {
		this.setState({ modalActive: false })
	}

	validateEmail (value) {
		// regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return value ? re.test(value) : false;
  	}
	
	setValue(field, event) {
		//If the input fields were directly within this
		//this component, we could use this.refs.[FIELD].value
		//Instead, we want to save the data for when the form is submitted
		var object = {};
		object[field] = event.target.value;
		this.setState(object);
  	}

	displayError() {
		this.setState({modalActive: true, name: '', email: '', message: '', isCloing: false, errorMessage: 'Please fill in all fields and a valid email!'})
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log("form submitted");

		if (!this.state.name || !this.state.message || !this.validateEmail(this.state.email)) {
			console.log("data missing, feedback rejected: " + JSON.stringify(this.state));
			this.displayError();
			return;
		}

		this.state.name && allApi.submitFeedback(this.state.name, this.state.email, this.state.message)
		.then(response => {
			console.log(JSON.stringify(response.data));
			//dispatch(updateFetchDb(response.data));
		})
		.catch(error => {
			console.log(error);
		})

		this.closingModal();
  }

	render() {		
		let modelDialogClass = this.state.isCloing ? "modelDialogClosing" : "modelDialog";

		return (
			<div>
				<div className={ComponentStyle['feedbackbutton']}> 
					<img src={'/img/contact-logo.png'} alt={"feedback"} onClick={this.toggleModal.bind(this)} className={ComponentStyle['imgArea']}/> 
				</div>
				{ this.state.modalActive && (
					<div>
						<div className={'modelBackground'}> </div>
						<form className={'feedbackForm'} onSubmit={this.handleSubmit.bind(this)}>
							<div className={modelDialogClass}>
								<div className="verLine"></div>
								<div className="verLine2"></div>
								<div className="innerBox">
									<a title='Close' onClick={this.toggleModal.bind(this)} className={'modelClose'}>X</a>
									<div className={'modelContent'} >
										{ this.state.errorMessage && (<p className="errorMessage">{this.state.errorMessage} </p>)}
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
