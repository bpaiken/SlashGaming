import React from 'react'
import { Grid, Card } from 'semantic-ui-react'
import CharacterCard from '../card/character_card'
import EventCard from '../card/event_card'

import './dashboard.css'

const Dashboard = (props) => {

  return (
    <div>
      <h1>Dashboard Title</h1>
      <Grid container columns={2}>
        
        <Grid.Column>
          <CharacterCard/>
        </Grid.Column>

        <Grid.Column>
          <EventCard/>
        </Grid.Column>

      </Grid>
    </div> 
  )
}

export default Dashboard
