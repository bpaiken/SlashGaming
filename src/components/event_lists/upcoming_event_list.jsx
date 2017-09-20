import React from 'react'
import { Grid, Table, Label, Icon } from 'semantic-ui-react'

const UpcomingEventList = ({ events }) => {

  const eventList = events.map( event => {
    return (
      <Table.Row>
        <Table.Cell>
          <Label color="green">
            <Icon name='calendar' /> {event.start}
          </Label>
        </Table.Cell>
        <Table.Cell><a href="#">{event.name}</a></Table.Cell>
        <Table.Cell>{Math.floor((Math.random() * 20) + 1)}</Table.Cell>
      </Table.Row>
    )
  })
  
  return (
    <div>
      <Grid className="dashboard" container columns={1}>
        <Grid.Row>
          <Grid.Column>
          <h2><Icon name='bell' /> Upcoming events</h2>
          <Table basic unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Starting</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Participants</Table.HeaderCell>
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

///// CONTAINER /////
import { connect } from 'react-redux'

const mapStateToProps = ({ events }) => {
  const eventList = []
  Object.keys(events).forEach( eventKey => {
    if (events[eventKey].status === 'upcoming') eventList.push(events[eventKey])
  })

  return {
    events: eventList
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUserCharacters: (userId) => dispatch(fetchUserCharacters(userId))
//   }
// }

export default connect(
  mapStateToProps
)(UpcomingEventList)