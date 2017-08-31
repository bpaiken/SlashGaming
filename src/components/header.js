import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl'
import { Link, browserHistory } from 'react-router-dom';


class Header extends Component {
	constructor(props) {
		super(props)
		
		// Do we need this?
		this.state = { activeTab: null };
	}
	
	onChange(id) {
		if (this.props.currentUser.id) {
			switch (id) {
				case 1:
				this.props.history.push('/signout');
				break;
				
				case 2:
				this.props.history.push('/feature');
				break;
					
				default:
				this.props.history.push('/');
			}
			
		} else {
			switch (id) {
				case 1:
				this.props.history.push('/signin');
				console.log("SIGNIN");
				break;
				
				case 2:
				this.props.history.push('/signup');
				break;
				
				default:
				this.props.history.push('/');
			}
		}
	}
	
	renderNav() {
		if (this.props.currentUser.id) {
			// show links when authed
			return [
				<Tab component={Link} key={1} to='/signout'>Sign Out</Tab>,
				<Tab component={Link} key={2} to='/feature'>Feature</Tab>,
			]
		} else {
			// show links when not authed
			return [
				<Tab component={Link} key={1} to='/signin'>Sign In</Tab>,
				<Tab component={Link} key={2} to='/signup'>Sign Up</Tab>,
			]
		}
	}
	render() {
		return (
			<div>
								<Tabs ripple activeTab={this.state.active} onChange={this.onChange.bind(this)}>
										<Tab component={Link} active to="/">Home</Tab>
										{this.renderNav()}
								</Tabs>
						</div>
				);
			}
		}
		

///// CONTAINER /////
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function mapStateToProps({ currentUser }) {
	return {
		currentUser
	};
}

export default withRouter(connect(mapStateToProps)(Header))