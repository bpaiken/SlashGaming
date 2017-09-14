import React from 'react'

class CharacterList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        
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