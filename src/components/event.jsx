import React from 'react'
import { Grid, Button, Icon, Divider } from 'semantic-ui-react'
import CharacterList from 'APP/components/character_lists/user_selectable'
import 'APP/css/event.css'


class Event extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showCharacterList: false,
      selectedCharId: null
    }

    this.toggleCharacterList = this.toggleCharacterList.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.registerCharacter = this.registerCharacter.bind(this)
  }

  toggleCharacterList() {
    this.setState({ showCharacterList: !this.state.showCharacterList })
  }

  handleSelection(e, { value }) {
    this.setState({ selectedCharId: value})
  }

  registerCharacter() {
    const eventId = this.props.match.params.eventId
    const characterId = this.state.selectedCharId

    this.props.registerCharacter(eventId, characterId)

    this.setState({ showCharacterList: false })
  }

  render() {
    const { characters } = this.props
    let selectedCharId = this.state.selectedCharId
    let selectedName = characters[this.state.selectedCharId] ? characters[selectedCharId].name : '' 
    return !this.state.showCharacterList ? 
     (
      <Grid container stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
          <Button onClick={this.toggleCharacterList} fluid size='huge'>I'm In</Button>
          </Grid.Column>
          <Grid.Column>
          <h2>Event Info</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem libero consequuntur, cupiditate maxime unde repellat asperiores odit debitis modi quibusdam velit, facilis quod incidunt, nobis fugiat omnis nesciunt saepe corrupti!</p>
          </Grid.Column>
        </Grid.Row>
        
        <Grid.Row columns={1}>        
        </Grid.Row>
      </Grid>
    )
    :
    (
        <Grid container columns={1}>
          <Grid.Row>
            <Grid.Column>
              <CharacterList 
                header='Select a Character'
                headerIcon='users'
                handleSelection={this.handleSelection}
                selected={this.state.selectedCharId} />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row textAlign='center'>
              <Grid.Column>
                <Button onClick={this.registerCharacter}>Register {selectedName} for Event</Button>
                <Divider />
                <div className='clickable' onClick={this.toggleCharacterList} >
                  <Icon name='arrow left' />
                  Back to Event
                </div>
              </Grid.Column>
            </Grid.Row>
        </Grid>
    )
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { registerCharacter } from 'APP/actions/event_actions'

const mapStateToProps = ({ characters }) => {
  return {
    characters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerCharacter: (eventId, characterId) => {
      return dispatch(registerCharacter(eventId, characterId))
    }
  }
}
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Event))