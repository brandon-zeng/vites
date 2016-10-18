import React from 'react';
import ComponentStyle from '../styles/menu.less'

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={ComponentStyle['menuArea']}>
				<table className={ComponentStyle['menuTable']}>
					<tbody>
						<tr>
							<td>Headphones</td>
							<td>LEDs</td>
							<td>Missions</td>
							<td>Contacts</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MenuComponent;
