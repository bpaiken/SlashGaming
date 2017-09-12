import React, {Component} from 'react'
import { Container, Grid, Icon, Form, List, Button } from 'semantic-ui-react'
import ReactCountdownClock from 'react-countdown-clock'

// Component specific css.
import 'APP/css/verify_character.css';

class VerifyCharacter extends Component {
  constructor(props) {
		super(props);
    this.state = { 
      timer: 60, 
      showCounter: false, 
      timeElapsed: false,
      account: '',
      character: '',
      code: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCode = this.handleCode.bind(this);
    this.timeElapsed = this.timeElapsed.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleSubmit(e) {
    e.preventDefault()
    this.props.verifyCharacter({
      account: this.state.account,
      character: this.state.character
    })

    this.setState({showCounter: true, countdown: this.state.timer});

    // Interval to count down the text counter.
    var i = setInterval(() => {
      if(this.state.countdown <= 0) {
        clearInterval(i);  
      } else {
        this.setState({countdown: (this.state.countdown-1)})
      }
    }, 1000);
  }

  handleCode(e) {
    e.preventDefault()

    this.props.verifyCode({
      code: this.state.code
    })
    
    this.setState({showCounter: false});
    console.log("Code was handled");
  }

  timeElapsed(e) {
    // This timeout is to prevent the count down clock not to error
    // out because render will have been run, removing the clock
    // when it's trying to set its width.
    setTimeout(() => this.setState({showCounter: false}), 500);
  }

  handleInputChange(fieldName) {
    return (e) => {
      this.setState({ [fieldName]: e.target.value })
    }
  }
  
  // TODO: update the conditional logic to be based on a response from the server
  render() {
    return (
      
      <Grid className="verify-character" container stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h2><Icon name='add user' /> Verify character</h2>
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
                    <Form.Input icon='code' iconPosition='left' 
                      onChange={this.handleInputChange('code')} placeholder='Code'/>
                    <Button color="blue" fluid size='large' onClick={this.handleCode}>Verify</Button>
                  </Form>
                </div>
                :
                <Form size='large'>
                  <Form.Input icon='vcard' iconPosition='left' 
                    onChange={this.handleInputChange('account')} placeholder='Account'/>
                  <Form.Input icon='user' iconPosition='left' 
                    onChange={this.handleInputChange('character')} placeholder='Character name'/>  
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

// export default VerifyCharacter
///// CONTAINER /////
import { connect } from 'react-redux'
import { verifyCharacter, verifyCode } from 'APP/actions/character_auth_actions.js'

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyCharacter: character => dispatch(verifyCharacter(character)),
    verifyCode: code => dispatch(verifyCode(code))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyCharacter)