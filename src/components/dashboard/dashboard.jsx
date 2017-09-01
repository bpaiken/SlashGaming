import React from 'react'
import CharacterCard from '../card/card_containers/character_card.js'
import EventCard from '../card/card_containers/event_card.js'
import { Grid, Cell } from 'react-mdl'
import './dashboard.css'

const Dashboard = (props) => {

  return (
    <div>
      <h1>Dashboard Title</h1>
      <section id="dash-content">
        <Grid className="dash-card-grid">
          <Cell col={6}><CharacterCard/></Cell>
          <Cell col={6}><EventCard/></Cell>
        </Grid>
      </section>
    </div> 
  )
}

export default Dashboard
