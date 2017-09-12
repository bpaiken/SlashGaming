import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import 'APP/css/menu.css'

class SlashMenu extends React.Component {
  state = { activeItem: 'account' }
  
  handleItemClick = (e, node) => {
    this.props.history.push(node['data-path'])
    this.setState({ activeItem: node.name })
    }

  // TODO: Use active links or hookup to display slice of state
  render() {
    const { activeItem } = this.state || {}
    return (
        <Menu vertical inverted fixed="left">
          <Menu.Item>
            <Menu.Header>Account</Menu.Header>
            
            <Menu.Menu>
              <Menu.Item name='profile' data-path='/dashboard'
                active={activeItem === 'profile'} onClick={this.handleItemClick}>
                <Icon name='calendar' /> Profile
              </Menu.Item>

              <Menu.Item name='verified-characters' data-path='/user/characters'
                active={activeItem === 'verified-characters'} onClick={this.handleItemClick}>
                <Icon name='users' /> Verified characters
              </Menu.Item>

              <Menu.Item name='verify-character' data-path='/user/verify-character' 
                active={activeItem === 'verify-character'} onClick={this.handleItemClick}>
                <Icon name='add user' /> Verify character
              </Menu.Item>

              <Menu.Item name='settings' data-path='/'
               active={activeItem === 'settings'} onClick={this.handleItemClick}>
                <Icon name='setting' /> Settings
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          
          <Menu.Item>
            <Menu.Header>Events</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='upcoming' data-path='/' 
                active={activeItem === 'upcoming'} onClick={this.handleItemClick}>
                <Icon name='bell' /> Upcoming events
              </Menu.Item>
              
              <Menu.Item name='closed' data-path='/'
                active={activeItem === 'closed'} onClick={this.handleItemClick}>
                <Icon name='checkmark' /> Closed events
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const mapStateToProps = ({ display }) => {
  return {
    display,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SlashMenu))