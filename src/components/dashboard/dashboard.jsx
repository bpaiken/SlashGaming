import React from 'react'
import { Container, Grid, Table, Label, Icon } from 'semantic-ui-react'

import './dashboard.css'

const Dashboard = (props) => {
  
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

export default Dashboard
