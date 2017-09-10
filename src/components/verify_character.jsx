import React, {Component} from 'react'
import { Container, Grid, Icon, Form, List, Button } from 'semantic-ui-react'

// Component specific css.
import 'APP/css/verify_character.css';

class VerifyCharacter extends Component {
  constructor(props) {
		super(props);
    this.state = { showCounter: false};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    var _self = this;
    this.setState({showCounter: true});
  }
  
  render() {
    return (
      <Container className="verify-character">
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <h2><Icon name='add user' /> Verify character</h2>
            <div>
                <p>Counter</p>
            </div>
            <Form size='large'>
                <Form.Input icon='vcard' iconPosition='left' placeholder='Account'/>
                <Form.Input icon='user' iconPosition='left' placeholder='Character name'/>  
                <Button color="green" fluid size='large' onClick={this.handleSubmit}>Let's go</Button>
            </Form>
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
                  <List.Header>Login to your account on the Slash server</List.Header>
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
                  <List.Header>Grab the code you received in game</List.Header>
                  <List.Description><code>YSPrddrV</code> is an example of what your code might look like.</List.Description>
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
    </Container>
    )
      
  }
}

export default VerifyCharacter
