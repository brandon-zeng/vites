import React from 'react'
import { Link } from 'react-router'
import ComponentStyle from '../styles/header.less'

class MenuComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


    onLinkClick(id) {
    	//this.props.onClick(id);
		if (this.state.hideMenu) {
			this.state.hideMenu();
		}
    }

	componentDidMount() {
        this.setState({hideMenu: this.props.hideMenu})
    }

	render() {
		
		return (
			<div className={ComponentStyle['menuArea']}>
				<table className={ComponentStyle['menuTable']}>
					<tbody>
						<tr>
							<td className={this.props.styleName}><Link to="/products" onClick={this.onLinkClick.bind(this, 1)} activeStyle={{boxShadow: '0px 1px 0px'}}>Products</Link></td>
							{/*<td className={this.props.styleName}><Link to="/stories" onClick={this.onLinkClick.bind(this, 2)} activeStyle={{boxShadow: '0px 1px 0px'}}>Stories</Link></td>*/}
							<td className={this.props.styleName}><Link to="/specs" onClick={this.onLinkClick.bind(this, 3)} activeStyle={{boxShadow: '0px 1px 0px'}}>Specs</Link></td>
							<td className={this.props.styleName}><Link to="/about" onClick={this.onLinkClick.bind(this, 4)} activeStyle={{boxShadow: '0px 1px 0px'}}>About us</Link></td>
							{/*<td className={this.props.styleName}><Link to="/blogs" onClick={this.onLinkClick.bind(this, 5)} activeStyle={{boxShadow: '0px 1px 0px'}}>Blogs</Link></td>*/}
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default MenuComponent;
