import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import EventImage from '../../../assets/images/cards/events.png'

export default () => {
  return (
    <Link to='/events'>
      <Card>
        <Image src={EventImage} />
        <Card.Content>
          <Card.Header className='card-header'>Events</Card.Header>
          <Card.Description>view all events</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}