import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './auth.css'

// TODO: add frontend/backend errors
class Signup extends React.Component {
	constructor(props){
		super(props)

		this.state = { 
			username: '',
			password: '',
			confirmPassword: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.signupUser({
			username: this.state.username, 
			password: this.state.password
		})
		.then(() => {
			this.props.history.push('/signin')
		})
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
						<h2>Create An Account</h2>	
						<Form size='large' className='form-auth'>
								<Form.Input icon='user' iconPosition='left' placeholder='Username' 
									onChange={this.handleInputChange('username')} />

								<Form.Input icon='lock' iconPosition='left' type='password' placeholder='Password' 
									onChange={this.handleInputChange('password')} />

								<Form.Input icon='lock' iconPosition='left' type='password' placeholder='Confirm password'
									onChange={this.handleInputChange('confirmPassword')} />

								<Button color="blue" fluid size='large' type='submit' onClick={this.handleSubmit}>Submit</Button>								
								<p>Already a User? <Link to='/auth/signin'>Sign In</Link></p>
						</Form>				
					</Grid.Column>	
				</Grid>
			</div>
		);
	}
}

// function validate(values) {
//     const errors = {};
    
//     if (!values.username) {
//         errors.username = 'Required'
//     }
    
//     if (!values.password) {
//         errors.password = 'Required'
//     } else if (values.password !== values.passwordConfirm) {
//         errors.password = 'Passwords must match';
//     }
    
//     if (!values.passwordConfirm) {
//         errors.passwordConfirm = 'Required'
//     }
    
//     return errors;
// }

///// CONTAINER /////
import { connect } from 'react-redux';
import { signupUser } from '../../actions/user_auth_actions'

function mapStateToProps(state) {
  return { }
}

const mapDispatchToProps = dispatch => {
  return {
    signupUser: user => dispatch(signupUser(user))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(Signup);