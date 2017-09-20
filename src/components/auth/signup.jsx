import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { authErrorMessages } from 'APP/util/error_messages'
import 'APP/css/auth.css'

// TODO: add frontend/backend errors
class Signup extends React.Component {
	constructor(props){
		super(props)

		this.state = { 
			username: '',
			password: '',
			confirmPassword: '',
			usernameError: false,
			passwordError: false,
			confirmPasswordError: false
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.invalidForm = this.invalidForm.bind(this)
		this.displayResponseError = this.displayResponseError.bind(this)
	}

	componentWillMount() {
		this.props.clearErrors()
	}

	handleSubmit(e) {
		e.preventDefault()

		// check for valid form
		if (this.invalidForm()) {
			if (this.invalidUsername(this.state.username)){
				this.setState({usernameError: true})
			} 
			if (this.invalidPassword(this.state.password)) {
				this.setState({ passwordError: true})
			} 
			if (this.invalidConfirmPassword(this.state.password, this.state.confirmPassword)) {
				this.setState({ confirmPasswordError: true})
			} 
			return
		}

		this.setState({
			usernameError: false,
			passwordError: false,
			confirmPasswordError: false
		})

		this.props.signupUser({
			username: this.state.username, 
			password: this.state.password
		})
		.then(({ type }) => {
			if (type === 'RECEIVE_RESPONSE_ERROR') {
				return
			} 
			this.props.history.push('/signin')
		})
	}

	handleInputChange(fieldName) {
		return (e) => {
			if(this.state[fieldName+"Error"]) {
				this.setState({
					usernameError: false,
					passwordError: false,
					confirmPasswordError: false
				})
			}
			this.setState({ [fieldName]: e.target.value });
		}
	}

	invalidForm() {
		if (
			this.invalidUsername(this.state.username) ||
			this.invalidPassword(this.state.password) ||
			this.invalidConfirmPassword(this.state.password, this.state.confirmPassword)
		) return true
	}

	invalidPassword(password) {
		if (password === '') return true
	}

	invalidConfirmPassword(password, confirmPassword) {
		if (confirmPassword !== password) return true
	}

	invalidUsername(username) {
		let pattern = new RegExp(/^[a-zA-Z][a-zA-Z_-]*$/);
		if((username < 2 || username > 16) || !pattern.test(username)) {
			return true
		}
		return false
	}

	displayResponseError() {
		let { responseStatus } = this.props.errors
		if (responseStatus) {
			return (
					<div className='error'>{authErrorMessages[responseStatus]}</div>
			);
		}
	}

	render() {
		return (
			<div className='signup-form'>
				<Grid className='grid-center'>
					<Grid.Column className='grid-column-auth'>
						<h2>Create An Account</h2>
						{this.displayResponseError()}	
						<Form size='large' className='form-auth'>

							<div className={`errorable display-error-${this.state.usernameError}`}>
								<Form.Input icon='user' iconPosition='left' placeholder='Username' 
									onChange={this.handleInputChange('username')} />
								<span className='form-error'>Hang on, invalid username</span>
							</div>

							<div className={`errorable display-error-${this.state.passwordError}`}>
								<Form.Input icon='lock' iconPosition='left' type='password' placeholder='Password' 
									onChange={this.handleInputChange('password')} />
								<span className='form-error'>Hang on, you forgot your password</span>
							</div>

							<div className={`errorable display-error-${this.state.confirmPasswordError}`}>	
								<Form.Input icon='lock' iconPosition='left' type='password' placeholder='Confirm password'
									onChange={this.handleInputChange('confirmPassword')} />
								<span className='form-error'>Hang on, passwords must match</span>
							</div>

								<Button color="blue" fluid size='large' type='submit' onClick={this.handleSubmit}>Submit</Button>								
								<p>Already a User? <Link to='/auth/signin'>Sign In</Link></p>
						</Form>				
					</Grid.Column>	
				</Grid>
			</div>
		);
	}
}

import { connect } from 'react-redux';
import { signupUser, clearErrors } from '../../actions/user_auth_actions'

function mapStateToProps({ errors }) {
  return {
		errors,
	 }
}

const mapDispatchToProps = dispatch => {
  return {
		signupUser: user => dispatch(signupUser(user)),
		clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)(Signup)