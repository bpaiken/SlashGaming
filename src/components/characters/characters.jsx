import React from 'react'
import { Container, Grid, Table, Label, Icon } from 'semantic-ui-react'

class Characters extends React.Component {
  constructor(props){
    super(props)

    this.buildRows = this.buildRows.bind(this)
  }

  buildRows() {
    return (
      this.props.currentUser.characters.map(id => {
        let char = this.props.characters[id]
        return {
          id: id,
          name: char.name,
          account: char.account,
          points: char.points
        }
      })
    )
  }

  render() {
   let charRows = this.buildRows()
   return (
    <div>
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
            <h2><Icon name='users' /> Verified characters</h2>
            <Table basic unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Class</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell><Label className="deep-purple">Lvl 99</Label></Table.Cell>
                  <Table.Cell><a href="#">Nokkasorc</a></Table.Cell>
                  <Table.Cell>Sorceress</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Label className="deep-purple">Lvl 21</Label></Table.Cell>
                  <Table.Cell><a href="#">Nokkahammer</a></Table.Cell>
                  <Table.Cell>Paladin</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><Label className="deep-purple">Lvl 85</Label></Table.Cell>
                  <Table.Cell><a href="#">Nokkazon</a></Table.Cell>
                  <Table.Cell>Amazon</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>

        
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div> 
  );
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'


const mapStateToProps = ({currentUser, characters}) => {
  return{ 
    currentUser,
    characters
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (Characters)