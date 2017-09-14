import React from 'react'
import { Table, Label, Icon } from 'semantic-ui-react'


const TEST_CHAR = {
  1: {
    level: 99,
    name: 'Nokkasorc',
    type: 'Sorceress',
  },
  2: {
    level: 21,
    name: 'Nokkahammer',
    type: 'Paladin'
  },
  3: {
    level: 85,
    name: 'Nokkazon',
    type: 'Amazon'
  }
}

const TEST_USER = {
  characters: [1,2,3,4]
}

class CharacterList extends React.Component {
  constructor(props) {
    super(props)

    this.buildCharacterList = this.buildCharacterList.bind(this)
  }

  buildCharacterList() {
    const characterArray = []
    for (let i = 0; i < TEST_USER.characters.length; i++) {
      let id = TEST_USER.characters[i]
      if (TEST_CHAR[id]) {
        characterArray.push(TEST_CHAR[id])
      } else {
        continue
      }
    }
    return characterArray
  }

  render() {
    const characters = this.buildCharacterList()
      return (
        <div>
        { (characters.length > 0) ? 
            <Table basic unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Level</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Class</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                
                {characters.map(character => {
                  return (
                    <Table.Row>
                      <Table.Cell><Label className="deep-purple">Lvl {character.level}</Label></Table.Cell>
                      <Table.Cell><a href="#">{character.name}</a></Table.Cell>
                      <Table.Cell>{character.type}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
        :
        <p>No Verified Characters Yet</p>
        }
      </div>
    );
  
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'

const mapStateToProps = ({}) => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)