import React from 'react'
import { Grid, Table, Label, Icon } from 'semantic-ui-react'

const UpcomingEventList = (props) => {
  
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
              <Table.Row>
                <Table.Cell>
                  <Label color="green">
                    <Icon name='calendar' /> Sep 1th 9 pm
                  </Label>
                </Table.Cell>
                <Table.Cell><a href="#">Some event</a></Table.Cell>
                <Table.Cell>11</Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell>
              <Label color="green">
                <Icon name='calendar' /> Sep 1th 9 pm
              </Label>
            </Table.Cell>
            <Table.Cell><a href="#">Another event</a></Table.Cell>
            <Table.Cell>54</Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell>
              <Label color="green">
                <Icon name='calendar' /> Sep 1th 9 pm
              </Label>
            </Table.Cell>
            <Table.Cell><a href="#">Third event</a></Table.Cell>
            <Table.Cell>23</Table.Cell>
              </Table.Row>
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

const mapStateToProps = (state, ownProps) => {

  
  
  return {
    events: "an event"
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