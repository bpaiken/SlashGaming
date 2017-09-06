import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router-dom';
import { Menu, Button, Container, Icon } from 'semantic-ui-react'

import './header.css'

class Header extends Component {
	constructor(props) {
		super(props)
		
		this.state = { activeItem: null, };

		this.handleMenuItemClick = this.handleMenuItemClick.bind(this)
		this.signout = this.signout.bind(this)
	}
	
	handleMenuItemClick(pathName) {
		const that = this
		return (e) => {
			that.setState({ activeItem: pathName })
			that.props.history.push(`/${pathName}`)
		}
	}

	signout() {
		this.props.signoutUser()
		this.props.history.push('/signin')
	}

	// Renders the right part of the header based on user being signed in
	renderRightNav() {
		const { activeItem } = this.state
		console.log(activeItem)
		if (this.props.currentUser.id) {
			return [
				<Menu.Menu position='right'>
					<Menu.Item className='item'>
						<Button onClick={this.signout}>Sign Out</Button>
					</Menu.Item>
						
					<Menu.Item
						onClick={this.handleMenuItemClick('user')}
						active={activeItem === 'user'}>
						{this.props.currentUser.username}
					</Menu.Item>
				</Menu.Menu>
			]
		} else {
			return [
				<Menu.Menu position='right'>
					<Menu.Item
						onClick={this.handleMenuItemClick('signin')}
						active={activeItem === 'signin'}>Sign In</Menu.Item>

					<Menu.Item
						onClick={this.handleMenuItemClick('signup')}
						active={activeItem === 'signup'}>Sign Up</Menu.Item>
				</Menu.Menu>
			]
		}
	}

	render() {
		const { activeItem } = this.state
		return (
			<div className='header'>
				<Menu className='menu-header-static' fixed='top' size='large'>
					{/* <Container> */}
						<Menu.Item>
							<Icon name='content' size='large' id='toggle-sidebar-icon'
								onClick={this.props.toggleSidebar}/>
						</Menu.Item>
						<Menu.Item as='a' 
							onClick={this.handleMenuItemClick('dashboard')} 
							active={activeItem === 'dashboard'}>
							Home
						</Menu.Item>

							{this.renderRightNav()}
					{/* </Container> */}
				</Menu>
			</div>
		);
	}
	
}
		
///// CONTAINER /////
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { signoutUser } from '../../actions/user_auth_actions'
import { toggleSidebar } from '../../actions/display_actions'

function mapStateToProps({ currentUser }) {
	return {
		currentUser
	};
}

const mapDispatchToProps = dispatch => {
	return {
		signoutUser: () => dispatch(signoutUser()),
		toggleSidebar: () => dispatch(toggleSidebar())
	}
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps)
	(Header))