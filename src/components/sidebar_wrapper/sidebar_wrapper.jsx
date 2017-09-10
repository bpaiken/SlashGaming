import React from 'react'
import PageContent from '../content_router/content_router'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

import './sidebar_wrapper.css'

class SidebarWrapper extends React.Component {
  render() {
    const visible = this.props.display.sidebarVisible
    return (
      <div className='sidebar-wrapper'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='dashboard'>
              <Icon name='globe' />
              Dashboard
            </Menu.Item>
            <Menu.Item name='characters'>
              <Icon name='users' />
              Characters
            </Menu.Item>
            <Menu.Item name='verify-character'>
              <Icon name='add user' />
              Verify character
            </Menu.Item>
            <Menu.Item name='upcoming-events'>
              <Icon name='calendar' />
              Upcoming events
            </Menu.Item>
            <Menu.Item name='closed-events'>
              <Icon name='trophy' />
              Closed events
            </Menu.Item>
            <Menu.Item name='settings'>
              <Icon name='setting' />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <div className="mobile-header">
                <Icon onClick={this.props.toggleSidebar} size="large" name='align justify' />
              </div>
              <PageContent />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

///// CONTAINER /////
import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions/display_actions.js'

const mapStateToProps = ({ display }) => {
  return {
    display,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
  (SidebarWrapper)