import React from 'react'
import { Grid, Table, Label, Icon } from 'semantic-ui-react'

const ClosedEventList = (props) => {
  
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
              <Table.Row>
                <Table.Cell>
                  <Label color="purple">
                    <Icon name='trophy' /> Meanski
                  </Label>
                </Table.Cell>
                <Table.Cell><a href="#">Some event</a></Table.Cell>
                <Table.Cell><span className="points">+100</span></Table.Cell>
              </Table.Row>
              <Table.Row>
              <Table.Cell>
                <Label color="purple">
                  <Icon name='trophy' /> Nokka
                </Label>
              </Table.Cell>
              <Table.Cell><a href="#">Old event</a></Table.Cell>
              <Table.Cell><span className="points">+50</span></Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
              <Label color="purple">
                <Icon name='trophy' /> Seirif
              </Label>
            </Table.Cell>
            <Table.Cell><a href="#">Older event</a></Table.Cell>
            <Table.Cell><span className="points">+250</span></Table.Cell>
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
)(ClosedEventList)