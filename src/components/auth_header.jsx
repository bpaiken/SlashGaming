import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { Menu, Button, Container, Icon } from 'semantic-ui-react'

import 'APP/css/auth_header.css'

class Header extends Component {
	constructor(props) {
		super(props)
		
		this.state = { activeItem: null, };

		this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
	}
	
	handleMenuItemClick(pathName) {
		const that = this
		return (e) => {
			that.setState({ activeItem: pathName })
			that.props.history.push(`/auth/${pathName}`)
		}
	}

	render() {
		const { activeItem } = this.state
		return (
			<div className='header'>
				<Menu inverted fixed='top' size='large'>
				<Menu.Item
						position='right'
						onClick={this.handleMenuItemClick('signin')}
						active={activeItem === 'signin'}>Sign In</Menu.Item>

					<Menu.Item
						onClick={this.handleMenuItemClick('signup')}
						active={activeItem === 'signup'}>Sign Up</Menu.Item>
				</Menu>
			</div>
		);
	}
	
}
		
///// CONTAINER /////
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { signoutUser } from 'APP/actions/user_auth_actions'
import { toggleSidebar } from 'APP/actions/display_actions'

function mapStateToProps({ currentUser }) {
	return {
		currentUser
	};
}

const mapDispatchToProps = dispatch => {
	return {
		signoutUser: () => dispatch(signoutUser()),
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps)
	(Header))