import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Grid, Icon, Form, List, Button } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'
import { charAuthMessages } from 'APP/util/error_messages'

// Component specific css.
import 'APP/css/verify_character.css';

class VerifyCharacter extends Component {
  constructor(props) {
		super(props);
    this.state = { 
      timer: 60,
      timerRef: null, 
      showCounter: false, 
      timeElapsed: false,
      account: '',
      character: '',
      code: '',
      codeError: false,
      accountError: false,
      characterError: false,
      success: false
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.timeElapsed = this.timeElapsed.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.displayResponseError = this.displayResponseError.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.displaySuccess = this.displaySuccess.bind(this)
  }

  componentWillMount() {
    this.props.clearErrors()
  }

  componentWillUnmount() {
    clearInterval(this.state.timerRef)
  }
  
  
  // TODO: clearout previous entry
  handleSubmit(e) {
    e.preventDefault()
    this.setState({ success: false })

    if (
      this.invalidCharName(this.state.character) ||
      this.invalidAccountName(this.state.account)
    ) {
      if (this.invalidCharName(this.state.character)) this.setState({ characterError: true })
        if (this.invalidAccountName(this.state.account)) this.setState({ accountError: true})
          return
    }
    
    this.props.clearErrors()
    
    this.props.verifyCharacter({
      account: this.state.account,
      character: this.state.character
    })
    
    this.setState({
      showCounter: true, 
      countdown: this.state.timer,
    });
    
    // Interval to count down the text counter.
    var i = setInterval(() => {
      if(this.state.countdown <= 0) {
        clearInterval(i);  
      } else {
        this.setState({countdown: (this.state.countdown-1)})
      }
    }, 1000);
    this.setState({ timerRef: i })
    
    // resetForm is needed for moving back and forth between the two forms
    this.resetForm()
  }

  handleCode(e) {
    e.preventDefault()

    if (this.invalidCode(this.state.code)) {
      this.setState({ codeError: true})
      return
    }

    this.props.verifyCode({
      code: this.state.code
    }).then(response => {
      
      if (response.type === 'RECEIVE_VERIFIED_CHARACTER') {
        // stop the timer
        clearInterval(this.state.timerRef)
        // clear out previous errors if there were any
        if (this.props.errors.responseStatus) this.props.clearErrors()
        // reset form and show success message
        this.setState({ 
          success: true,
          showCounter: false,
          account: '',
          character: '',
          code: '',
          codeError: false,
          accountError: false,
          characterError: false
         });
      } else {
        this.resetForm()
      }
    })
  }

  timeElapsed(e) {
    // This timeout is to prevent the count down clock not to error
    // out because render will have been run, removing the clock
    // when it's trying to set its width.
    setTimeout(() => this.setState({showCounter: false}), 500);
    // TODO: add 'Ran out of time' error
  }

  handleInputChange(fieldName) {
    return (e) => {
      this.setState({
        characterError: false,
        codeError: false,
        accountError: false
      })
      this.setState({ [fieldName]: e.target.value })
    }
  }

  displayResponseError() {
		let { responseStatus } = this.props.errors
		if (responseStatus) {
			return (
					<div className='error'>{charAuthMessages[responseStatus]}</div>
			);
		}
  }

  displaySuccess() {
    if (this.state.success) {
      return (
        <div className='success'>
          Character verified! Check out all <Link to='/user/characters'>Your characters</Link>
        </div>
      )
    }
  }
  
  // TODO: add correct regex to account name and char name checks
  invalidAccountName(accountName) {
    if (accountName === '') return true
    return false
  }

  invalidCharName(charName) {
    if (charName === '') return true
    return false    
  }

  invalidCode(code) {
    if (code.length === 8) return false
    return true
  }

  resetForm() {
    this.setState({
      account: '',
      character: '',
      code: '',
      codeError: false,
      accountError: false,
      characterError: false,
    })
  }
  
  render() {
    return (
      
      <Grid className="verify-character" container stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h2><Icon name='add user' /> Verify character</h2>
            {this.displaySuccess()}
            { this.displayResponseError()}
            { (this.state.showCounter) ?
                <div>
                  <div className="verify-counter">
                    <div className="counter-text">{this.state.countdown}</div>
                    <ReactCountdownClock seconds={this.state.timer}
                      color="#974ec2"
                      size={200}
                      weight={2}
                      fontSize={"0px"}
                      onComplete={this.timeElapsed} />
                  </div>
                  <Form size='large'>

                    <div className={'errorable display-error-' + this.state.codeError}>
                      <Form.Input icon='code' iconPosition='left' value={this.state.code}
                        onChange={this.handleInputChange('code')} placeholder='Code'/>
                      <span className='form-error'>Hang on, code must be 8 characters</span>
                    </div>
                    
                    <Button color="blue" fluid size='large' onClick={this.handleCode}>Verify</Button>
                  </Form>
                </div>
                :
                <Form size='large'>
                  <div className={'errorable display-error-' + this.state.accountError}>
                    <Form.Input icon='vcard' iconPosition='left' 
                      onChange={this.handleInputChange('account')} placeholder='Account'/>
                    <span className='form-error'>Hang on, invalid account name</span>
                  </div>

                  <div className={'errorable display-error-' + this.state.characterError}>
                    <Form.Input icon='user' iconPosition='left' 
                      onChange={this.handleInputChange('character')} placeholder='Character name'/>  
                    <span className='form-error'>Hang on, invalid character name</span>
                  </div>

                  <Button color="green" fluid size='large' onClick={this.handleSubmit}>Let's go</Button>
                </Form>
            }
          </Grid.Column>
          <Grid.Column>
            <h2>How it works</h2>
            <p>
              Verifying a character is necessary for us to know which characters belong to you.
              When you enter the Account and Character name, a code will be sent to you in game.
              You use this token to enter here on the site, as a two way authentication.
            </p>
            <p>
              If the code you enter is correct and submitted within the given time limit, the 
              character will be yours and eligle to enter events and gain achivement points.
            </p>

            <h3>Step by step</h3>
            <List divided relaxed>
              <List.Item>
                <List.Icon color="blue" name='sign in' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>Login to the chat on your account on the Slash server</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon color="yellow" name='write' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>Enter the account and character name on this page</List.Header>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='copy' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>Grab the code in game before the timer runs out</List.Header>
                  <List.Description><code>YSPrddrV</code> is an example of what your code might look like that you received in game.</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon color="green" name='checkmark' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Header>Enter the code in the input field and submit</List.Header>
                  <List.Description>Your character is now verified and eligble for events and achviements.</List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
      
  }
}


///// CONTAINER /////
import { connect } from 'react-redux'
import { verifyCharacter, verifyCode, clearErrors } from 'APP/actions/character_auth_actions.js'

const mapStateToProps = ({ errors }) => {
  return {
    errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyCharacter: character => dispatch(verifyCharacter(character)),
    verifyCode: code => dispatch(verifyCode(code)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyCharacter)