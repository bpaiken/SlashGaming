import React from 'react'
import { Table, TableHeader, } from 'react-mdl'

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
      <div className="page-wrapper">
        <h1>User Characters</h1>
          <Table 
            sortable 
            shadow={0}
            rows={charRows}
            >

            <TableHeader 
              name="name"
              tooltip="Sort By Name"
              >
              Name
            </TableHeader>

            <TableHeader 
            name="account"
            tooltip="The amazing material name"
              >
              Account
            </TableHeader>

            <TableHeader 
              numeric
              name="points"
              tooltip="Sort By Account"
              >
              Points
            </TableHeader>
          </Table>
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