import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CharacterImage from '../../../assets/images/cards/characters.jpg'

export default () => {
  return (
    <Link to='/user/characters'>
      <Card>
        <Image src={CharacterImage} />
        <Card.Content>
          <Card.Header className='card-header'>Characters</Card.Header>
          <Card.Description>view your characters</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  )
}