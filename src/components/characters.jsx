import React from 'react'
import { Container, Grid, Table, Label, Icon } from 'semantic-ui-react'
import CharacterList from 'APP/components/character_list.jsx'

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
            <CharacterList />
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