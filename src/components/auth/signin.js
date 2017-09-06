import React, { Component } from 'react';
import { Button, Form, Message, Grid } from 'semantic-ui-react'
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

							<Form size='big' className='form-auth'>
								<Form.Input placeholder='enter username' 
									onChange={this.handleInputChange('username')} />
								
								<Form.Input type='Password' placeholder='enter password' 
									onChange={this.handleInputChange('password')} />  
								
								<Button type='submit' onClick={this.handleSubmit}>Submit</Button>								
							</Form>
						
							<Message>
								New User? <Link to='/signup'>Sign Up</Link>
							</Message>
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

