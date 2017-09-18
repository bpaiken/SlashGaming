import React, { Component } from 'react';
import { Button, Form, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { authMessages } from 'APP/util/error_messages'
import 'APP/css/auth.css'

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			username: '', 
			password: '',
			usernameError: false,
			passwordError: false
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleError = this.handleError.bind(this)
	}
	
	componentDidMount() {
		this.props.clearErrors()
	}

	handleSubmit(e) {
		e.preventDefault();

		if (this.invalidUsername(this.state.username) || this.state.password === ''){
			if (this.invalidUsername(this.state.username)) {
				this.setState({ usernameError: true })
			}
			if (this.state.password === '') this.setState({ passwordError: true })
				return
		}

		this.setState({
			usernameError: false,
			passwordError: false
		})

		this.props.signinUser({
			username: this.state.username, 
			password: this.state.password
		})
		.then(() => {
			this.props.history.push('/dashboard')
		})
	}
	
	handleError() {
		let { responseStatus } = this.props.errors
		if (responseStatus) {
			return (
					<div className='error'>{authMessages[responseStatus]}</div>
			);
		}
	}
	
	handleInputChange(fieldName) {
		if(this.state[fieldName+"Error"]) {
			this.state[fieldName+"Error"] = !this.state[fieldName+"Error"]
		}

		return (e) => {
			this.setState({ [fieldName]: e.target.value });
		}
	}

	invalidUsername(username) {
		let pattern = new RegExp(/^[a-zA-Z][a-zA-Z_-]*$/);
		if((username < 2 || username > 16) || !pattern.test(username)) {
			return true
		}
		return false
	}
	
	render() {
		return (
			<div className='signup-form'>
					<Grid className='grid-center'>
						<Grid.Column className='grid-column-auth'>
							<h2>Sign In</h2>
							{this.handleError()}
							<Form size='large' className='form-auth'>
								<div className={'errorable display-error-' + this.state.usernameError}>
									<Form.Input icon='user' iconPosition='left' placeholder='Username' 
										onChange={this.handleInputChange('username')} />
									<span className='form-error'>Hang on, you forgot your username</span>
								</div>
								<div className={'errorable display-error-' + this.state.passwordError}>
									<Form.Input type='password' icon='lock' iconPosition='left' placeholder='Password' 
										onChange={this.handleInputChange('password')} />  
									<span className='form-error'>Hang on, you forgot your password</span>
								</div>
								<Button color='blue' fluid size='large' onClick={this.handleSubmit}>
									<Icon name="sign in"/>Login
								</Button>
								<p>New User? <Link to='/auth/signup'>Sign Up</Link></p>
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
import { clearErrors } from 'APP/actions/user_auth_actions'

function mapStateToProps({ errors }) {
    return {
			errors,
		}
}

const mapDispatchToProps = dispatch => {
  return {
		signinUser: user => dispatch(signinUser(user)),
		clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps)(Signin))

