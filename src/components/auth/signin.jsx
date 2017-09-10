import React, { Component } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './auth.css'

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	handleSubmit(e) {
		e.preventDefault();
		this.props.signinUser({
			username: this.state.username, 
			password: this.state.password
		})
		.then(() => {
			this.props.history.push('/dashboard')
		})
	}
	
	handleError() {
		if (this.props.errorMessage) {
			return (
				<div className='alert alert-danger'>
					<strong>{this.props.errorMessage}</strong>
				</div>
			);
		}
	}
	
	handleInputChange(fieldName) {
		return (e) => {
			this.setState({ [fieldName]: e.target.value });
		}
	}
	
	render() {
			return (
				<div className='signup-form'>
					<Grid className='grid-center'>
						<Grid.Column className='grid-column-auth'>
							<h2>Sign In</h2>
							<Form size='large' className='form-auth'>
								<Form.Input icon='user' iconPosition='left' placeholder='Username' 
									onChange={this.handleInputChange('username')} />
								
								<Form.Input type='password' icon='lock' iconPosition='left' placeholder='Password' 
									onChange={this.handleInputChange('password')} />  
								
								<Button color='blue' fluid size='large' onClick={this.handleSubmit}>
									<Icon name="sign in"/>Login
								</Button>
								<p>New User? <Link to='/signup'>Sign Up</Link></p>
							</Form>
						</Grid.Column>
					</Grid>
				</div>
			)
	}
}

///// CONTAINER /////
import { signinUser } from '../../actions/user_auth_actions'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

function mapStateToProps(state) {
    return { errorMessage: '' }; // TODO: update with error slice of state
}

const mapDispatchToProps = dispatch => {
  return {
    signinUser: user => dispatch(signinUser(user))
  }
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps)
(Signin))

