import React from 'react'
import PageContent from '../content_router/content_router'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

// TODO: does this need to be a class component?
class SidebarWrapper extends React.Component {
  constructor(props) {
    super(props)

    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility() {
    let visible = this.state.visible ? false : true
    this.setState({ visible })

  }

  render() {
    const visible = this.props.display.sidebarVisible
    return (
      <div>
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
  (SidebarWrapper)