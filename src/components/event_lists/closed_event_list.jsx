import React from 'react'
import { Grid, Table, Label, Icon } from 'semantic-ui-react'
import { fetchEvents } from 'APP/actions/event_actions'

class ClosedEventList extends React.Component {

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    // this is temp until there is a winner
    const winner = ["serif", "nokka", "meanski"];
    
    const events = this.props.events
    const eventList = events.map( event => {
      return (
        <Table.Row key={event.id}>
          <Table.Cell>
            <Label color="purple">
              <Icon name='trophy' /> { winner[Math.floor(Math.random() * 3)] }
            </Label>
          </Table.Cell>
          <Table.Cell><a href="#">{ event.name }</a></Table.Cell>
          <Table.Cell><span className="points">{ `+${Math.floor(Math.random() * 50) + 50}` }</span></Table.Cell>
        </Table.Row>
      )
    })

    return (
      <div>
        <Grid className="dashboard" container columns={1}>
          <Grid.Row>
            <Grid.Column>
            <h2><Icon name='checkmark' /> Closed events</h2>
            <Table basic unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Winner</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Event points</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {eventList}
              </Table.Body>
            </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div> 
    )
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'

const mapStateToProps = ({ events }) => {
  const eventList = []
  Object.keys(events).forEach( eventKey => {
    if (events[eventKey].status === 'closed') eventList.push(events[eventKey])
  })

  return {
    events: eventList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => dispatch(fetchEvents())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClosedEventList)