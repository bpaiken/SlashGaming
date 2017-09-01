import React from 'react'
import { 
  Card, 
  CardTitle, 
  CardActions, 
  CardText, 
  Button
} from 'react-mdl'
import { Link } from 'react-router-dom'
import './card.css'

const DashCard = (props) => {
  return (
    <Card shadow={0} className="dash-card">
      <CardTitle className="dash-card-title">{props.cardTitle}</CardTitle>
      <CardText className="dash-card-text">{props.cardText}</CardText>
      <CardActions className="dash-card-actions" border>
        <Link to={`${props.indexUrl}`}>{props.buttonText}</Link>
        {/* <Button colored>{props.buttonText}</Button> */}
      </CardActions>
    </Card>
  )
}

export default DashCard