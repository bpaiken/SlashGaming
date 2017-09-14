import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import UserCharacterList from 'APP/components/user_character_list.jsx'

// TODO: does this need to be a class component?
class Characters extends React.Component {
 
  render() {
   return (
    <div>
      <Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
            <UserCharacterList />
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
  mapDispatchToProps)(Characters)