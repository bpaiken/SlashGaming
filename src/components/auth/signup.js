import React from 'react'
import { Button, Form } from 'semantic-ui-react'
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
			<div>
				<Form size='big' className='form-auth'>
					<Form.Input label='Username' placeholder='enter username' 
						onChange={this.handleInputChange('username')} />
					<Form.Input label='Password' type='Password' placeholder='enter password' 
						onChange={this.handleInputChange('password')} />  
					<Form.Input label='Confirm Password' type='Password' placeholder='re-enter password'
						onChange={this.handleInputChange('confirmPassword')} />
					<Button type='submit' onClick={this.handleSubmit}>Submit</Button>								
				</Form>				
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
