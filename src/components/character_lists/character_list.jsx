import React from 'react'
import { Table, Label, Icon, Radio } from 'semantic-ui-react'

class CharacterList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedCharId: null
    }

    this.buildCharacterList = this.buildCharacterList.bind(this)
    this.renderSelectableList = this.renderSelectableList.bind(this)
    this.renderTableHeader = this.renderTableHeader.bind(this)
  }

  componentDidMount() {
    this.props.fetchCharacters(this.props.fetchCharactersProperty)
  }

  // componentWillMount() {
    
  // }

  buildCharacterList() {
    const charIds = this.props.charIds
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

  renderSelectableList(characters) {
    return characters.map(character => {
      return (
        <Table.Row key={character.id}>
          <Table.Cell>
            <Radio
              name='characterList'
              value={character.id}
              checked={this.props.selected === character.id}
              onChange={this.props.handleSelection}
            />
          </Table.Cell>
          <Table.Cell><Label className="deep-purple">{`Lvl ${character.level}`}</Label></Table.Cell>
          <Table.Cell><a href="#">{character.name}</a></Table.Cell>
          <Table.Cell>{character.classType}</Table.Cell>
          <Table.Cell>{character.points}</Table.Cell>
        </Table.Row>
      )
    })
  }

  renderList(characters) {
    return characters.map(character => {
      return (
        <Table.Row key={character.id}>
          <Table.Cell><Label className="deep-purple">{`Lvl ${character.level}`}</Label></Table.Cell>
          <Table.Cell><a href="#">{character.name}</a></Table.Cell>
          <Table.Cell>{character.classType}</Table.Cell>
          <Table.Cell>{character.points}</Table.Cell>
        </Table.Row>
      )
    })
  }

  renderTableHeader() {
    if (this.props.selectable) {
      return (
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Select</Table.HeaderCell>
          <Table.HeaderCell>Level</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      )
    } else {
      return (
        <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Level</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Points</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      )
    }
  }

  render() {
    const characters = this.buildCharacterList()
      return (
        <div>
          <h2><Icon name={this.props.headerIcon} /> {this.props.header}</h2>
        { (characters.length > 0) ? 
            <Table basic unstackable>
              {this.renderTableHeader()}
              <Table.Body>
                {this.props.selectable ? this.renderSelectableList(characters) : this.renderList(characters)}
              </Table.Body>
            </Table>
        :
        <p>No Characters Yet</p>
        }
      </div>
    );
  
  }
}

export default CharacterList