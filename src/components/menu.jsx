import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import 'APP/css/menu.css'

class SlashMenu extends React.Component {
  
  handleItemClick = (e, node) => {
    // debugger
    this.props.history.push(node['data-path'])
    this.props.selectMenuTab(node.name)
    }

  render() {
    const activeMenuTab = this.props.activeMenuTab
    return (
        <Menu vertical inverted fixed="left">
          <Menu.Item>
            <Menu.Header>Account</Menu.Header>
            
            <Menu.Menu>
              <Menu.Item name='profile' data-path='/user'
                active={activeMenuTab === 'profile'} onClick={this.handleItemClick}>
                <Icon name='calendar' /> Profile
              </Menu.Item>

              <Menu.Item name='dashboard' data-path='/dashboard'
                active={activeMenuTab === 'dashboard'} onClick={this.handleItemClick}>
                <Icon name='globe' /> Dashboard
              </Menu.Item>

              <Menu.Item name='verified-characters' data-path='/user/characters'
                active={activeMenuTab === 'verified-characters'} onClick={this.handleItemClick}>
                <Icon name='users' /> Verified characters
              </Menu.Item>

              <Menu.Item name='verify-character' data-path='/user/verify-character' 
                active={activeMenuTab === 'verify-character'} onClick={this.handleItemClick}>
                <Icon name='add user' /> Verify character
              </Menu.Item>

              <Menu.Item name='settings' data-path='/'
               active={activeMenuTab === 'settings'} onClick={this.handleItemClick}>
                <Icon name='setting' /> Settings
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          
          <Menu.Item>
            <Menu.Header>Events</Menu.Header>

            <Menu.Menu>
              <Menu.Item name='upcoming' data-path='/user/upcoming' 
                active={activeMenuTab === 'upcoming'} onClick={this.handleItemClick}>
                <Icon name='bell' /> Upcoming events
              </Menu.Item>
              
              <Menu.Item name='closed' data-path='/user/closed'
                active={activeMenuTab === 'closed'} onClick={this.handleItemClick}>
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
import { selectMenuTab } from 'APP/actions/display_actions'

const mapStateToProps = ({ display }) => {
  return {
    activeMenuTab: display.activeMenuTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMenuTab: activeMenuTab => dispatch(selectMenuTab(activeMenuTab))
  }
}

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps)(SlashMenu))