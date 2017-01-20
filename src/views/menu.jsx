import React from 'react'
import { Link } from 'react-router'
import ComponentStyle from '../styles/header.less'

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
							<td className={this.props.styleName}><Link to="/products" activeStyle={{color: 'red'}}>Products</Link></td>
							<td className={this.props.styleName}><Link to="/stories" activeStyle={{color: 'red'}}>Stories</Link></td>
							<td className={this.props.styleName}><Link to="/contacts" activeStyle={{color: 'red'}}>Contacts</Link></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MenuComponent;
