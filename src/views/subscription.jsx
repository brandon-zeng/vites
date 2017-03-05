import React from 'react';
import * as allApi from '../api/root_api.js';
import ComponentStyle from '../styles/footer.less';

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: ''};
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

		console.log("got submit request");

		this.state.email && allApi.subscribe(this.state.email)
		.then(response => {
			console.log(JSON.stringify(response.data));
			this.setState({email: ''});
			//dispatch(updateFetchDb(response.data));
		})
		.catch(error => {
			console.log(error);
		})
  	}

	render() {
		return (
			<div className={ComponentStyle['subscription']}>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="email" placeholder="you@example.com" value={this.state.email} onChange={this.setValue.bind(this, 'email')}/>
						<input type="submit" value="Subscribe" /> 
					</form>
			</div>
		);
	}
}

export default MenuComponent;
