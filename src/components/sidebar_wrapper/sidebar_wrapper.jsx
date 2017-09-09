import React from 'react'
import PageContent from '../content_router/content_router'
import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react'

import './sidebar_wrapper.css'

// TODO: does this need to be a class component?
class SidebarWrapper extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const visible = this.props.display.sidebarVisible
    return (
      <div className='sidebar-wrapper'>
        <div className="mobile-header">
          <Icon onClick={this.props.toggleSidebar} size="large" name='align justify' />
        </div>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='slide along' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
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