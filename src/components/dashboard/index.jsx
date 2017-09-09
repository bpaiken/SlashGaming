import React from 'react'
import { Container, Table, Label, Icon } from 'semantic-ui-react'

import './dashboard.css'

const Dashboard = (props) => {

  return (
    <div>
      <Container>
        <h2><Icon name='bell' /> Upcoming events</h2>
        <Table basic>
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
                <Label className="jungle-green">
                  <Icon name='calendar' /> Sep 1th 9 pm
                </Label>
              </Table.Cell>
              <Table.Cell>Some event</Table.Cell>
              <Table.Cell>11</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
            <Label className="jungle-green">
              <Icon name='calendar' /> Sep 1th 9 pm
            </Label>
          </Table.Cell>
          <Table.Cell>Another event</Table.Cell>
          <Table.Cell>54</Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
            <Label className="jungle-green">
              <Icon name='calendar' /> Sep 1th 9 pm
            </Label>
          </Table.Cell>
          <Table.Cell>Third event</Table.Cell>
          <Table.Cell>23</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <h2><Icon name='checkmark' /> Closed events</h2>
        <Table basic>
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
                <Label className="deep-purple">
                  <Icon name='trophy' /> Meanski
                </Label>
              </Table.Cell>
              <Table.Cell>Some event</Table.Cell>
              <Table.Cell><span className="points">+100</span></Table.Cell>
            </Table.Row>
            <Table.Row>
            <Table.Cell>
              <Label className="deep-purple">
                <Icon name='trophy' /> Nokka
              </Label>
            </Table.Cell>
            <Table.Cell>Old event</Table.Cell>
            <Table.Cell><span className="points">+50</span></Table.Cell>
          </Table.Row>
          <Table.Row>
          <Table.Cell>
            <Label className="deep-purple">
              <Icon name='trophy' /> Seirif
            </Label>
          </Table.Cell>
          <Table.Cell>Older event event</Table.Cell>
          <Table.Cell><span className="points">+250</span></Table.Cell>
        </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </div> 
  )
}

export default Dashboard
