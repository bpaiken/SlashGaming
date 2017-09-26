import { connect } from 'react-redux'
import CharacterList from 'APP/components/character_lists/character_list'
import { fetchUserCharacters } from 'APP/actions/character_actions'

const mapStateToProps = ({ currentUser, characters }) => {
  return {
    fetchCharactersProperty: currentUser.id,
    charIds: currentUser.characters,
    characters,
    selectable: true,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCharacters: (userId) => dispatch(fetchUserCharacters(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterList)