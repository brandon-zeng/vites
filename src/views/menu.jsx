import React from 'react';
import ComponentStyle from '../styles/menu.less';

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

    onLinkClick(id) {
    	this.props.onClick(id);
    }

	render() {
		
		return (
			<div className={ComponentStyle['menuArea']}>
				<table className={ComponentStyle['menuTable']}>
					<tbody>
						<tr>
							<td><a href="javascript:void(0)" onClick={this.onLinkClick.bind(this, "1")}>Headphones</a></td>
							<td><a href="javascript:void(0)" onClick={this.onLinkClick.bind(this, "2")}>Missions</a></td>
							<td><a href="javascript:void(0)" onClick={this.onLinkClick.bind(this, "3")}>Contacts</a></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MenuComponent;
