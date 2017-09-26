import React from 'react'
import { Grid, Table, Label, Icon } from 'semantic-ui-react'
import { fetchEvents } from 'APP/actions/event_actions'
import { Link } from 'react-router-dom'

class UpcomingEventList extends React.Component {

  componentDidMount() {
    this.props.fetchEvents('upcoming');
  }
  
  render() {
    const events = this.props.events
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]

    const eventList = events.map( event => {
      let date = new Date(event.start)
      return (
        <Table.Row key={event.id}>
          <Table.Cell>
            <Label color="green">
              <Icon name='calendar' /> {`${months[date.getMonth()]} ${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`}
            </Label>
          </Table.Cell>
          <Table.Cell><Link to={`/events/${event.id}`}>{event.name}</Link></Table.Cell>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: (status) => dispatch(fetchEvents(status))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpcomingEventList)