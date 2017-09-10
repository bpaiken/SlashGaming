import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './menu.css'

class SlashMenu extends React.Component {
  state = { activeItem: 'account' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}
    return (
        <Menu vertical inverted fixed="left">
          <Menu.Item>
            <Menu.Header>Account</Menu.Header>
            <Menu.Menu>
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
              <Icon name='calendar' /> Profile
            </Menu.Item>
              <Menu.Item name='verified-characters' active={activeItem === 'verified-characters'} onClick={this.handleItemClick}>
              <Icon name='users' /> Verified characters
            </Menu.Item>
              <Menu.Item name='verify-character' active={activeItem === 'verify-character'} onClick={this.handleItemClick}>
              <Icon name='add user' /> Verify character
            </Menu.Item>
              <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick}>
              <Icon name='setting' /> Settings
            </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Events</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='upcoming' active={activeItem === 'upcoming'} onClick={this.handleItemClick}>
              <Icon name='bell' /> Upcoming events
            </Menu.Item>
              <Menu.Item name='closed' active={activeItem === 'closed'} onClick={this.handleItemClick}>
              <Icon name='checkmark' /> Closed events
            </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
  }
}

import { connect } from 'react-redux'

const mapStateToProps = ({ display }) => {
  return {
    display,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SlashMenu)