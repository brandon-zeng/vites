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
							<td className={this.props.styleName}><Link to="/products" activeStyle={{boxShadow: '0px 1px 0px'}}>Products</Link></td>
							<td className={this.props.styleName}><Link to="/stories" activeStyle={{boxShadow: '0px 1px 0px'}}>Stories</Link></td>
							<td className={this.props.styleName}><Link to="/specs" activeStyle={{boxShadow: '0px 1px 0px'}}>Specs</Link></td>
							<td className={this.props.styleName}><Link to="/about" activeStyle={{boxShadow: '0px 1px 0px'}}>About us</Link></td>
							<td className={this.props.styleName}><Link to="/blogs" activeStyle={{boxShadow: '0px 1px 0px'}}>Blogs</Link></td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MenuComponent;
