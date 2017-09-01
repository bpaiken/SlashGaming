import React from 'react'
import { 
  Card, 
  CardTitle, 
  CardActions, 
  CardText, 
  Button
} from 'react-mdl'
import './card.css'

const DashCard = (props) => {
  return (
    <Card shadow={0} className="dash-card">
      <CardTitle className="dash-card-title">{props.cardTitle}</CardTitle>
      <CardText className="dash-card-text">{props.cardText}</CardText>
      <CardActions className="dash-card-actions" border>
        <Button colored>{props.buttonText}</Button>
      </CardActions>
    </Card>
  )
}

export default DashCard