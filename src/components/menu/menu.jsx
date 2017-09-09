import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './menu.css'

class SlashMenu extends React.Component {


  render() {
    const { activeItem } = this.state || {}
    return (
        <Menu vertical inverted fixed="left">
          <Menu.Item>
            <Menu.Header><Icon name='user circle' /> Account</Menu.Header>
            <Menu.Menu>
            <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick} />
              <Menu.Item name='verified-characters' active={activeItem === 'verified-characters'} onClick={this.handleItemClick} />
              <Menu.Item name='verify-character' active={activeItem === 'verify-character'} onClick={this.handleItemClick} />
              <Menu.Item name='settings' active={activeItem === 'settings'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header><Icon name='calendar' /> Events</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='upcoming' active={activeItem === 'upcoming'} onClick={this.handleItemClick} />
              <Menu.Item name='closed' active={activeItem === 'closed'} onClick={this.handleItemClick} />
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