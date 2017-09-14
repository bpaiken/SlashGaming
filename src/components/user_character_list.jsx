import React from 'react'
import { Table, Label, Icon } from 'semantic-ui-react'

class UserCharacterList extends React.Component {
  constructor(props) {
    super(props)

    this.buildCharacterList = this.buildCharacterList.bind(this)
  }

  buildCharacterList() {
    const charIds = this.props.currentUser.characters
    const characters = this.props.characters
    const characterList = []

    for (let i = 0; i < charIds.length; i++) {
      let id = charIds[i]
      if (characters[id]) {
        characterList.push(characters[id])
      } else {
        continue
      }
    }
    return characterList
  }

  render() {
    const characters = this.buildCharacterList()
      return (
        <div>
          <h2><Icon name='users' /> Verified characters</h2>
        { (characters.length > 0) ? 
            <Table basic unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Class</Table.HeaderCell>
                  <Table.HeaderCell>Points</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                
                {characters.map(character => {
                  return (
                    <Table.Row key={character.id}>
                      <Table.Cell><Label className="deep-purple">{`Lvl ${character.level}`}</Label></Table.Cell>
                      <Table.Cell><a href="#">{character.name}</a></Table.Cell>
                      <Table.Cell>{character.class}</Table.Cell>
                      <Table.Cell>{character.points}</Table.Cell>
                    </Table.Row>
                  )
                })}

              </Table.Body>
            </Table>
        :
        <p>No Characters Yet</p>
        }
      </div>
    );
  
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'

const mapStateToProps = ({ currentUser, characters }) => {
  return {
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
  mapDispatchToProps
)(UserCharacterList)