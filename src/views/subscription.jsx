import React from 'react';
import ComponentStyle from '../styles/footer.less';

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		
		return (
			<div className={ComponentStyle['subscription']}>
				<div className={ComponentStyle['subCap']}>
					<h2>Subscribe to our newsletters </h2>
					<p>for updates and promotions </p>
				</div>
				<div className={ComponentStyle['subInputArea']}>
					<form>
						<input type="email" placeholder="you@example.com" />
						<input type="submit" value="Subscribe" /> 
					</form>
				</div>
			</div>
		);
	}
}

export default MenuComponent;
