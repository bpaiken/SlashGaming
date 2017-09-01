import React from 'react'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { activeTab: null }
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

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (Sidebar)