import React from 'react'

class Characters extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="page-wrapper">
        <h1>User Characters</h1>
      </div>
    );
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'


const mapStateToProps = state => {
  return{ 

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