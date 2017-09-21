import React from 'react'
// import { Grid, Table, Label, Icon } from 'semantic-ui-react'
import UpcomingEventList from 'APP/components/event_lists/upcoming_event_list.jsx'
import ClosedEventList from 'APP/components/event_lists/closed_event_list.jsx'


const Dashboard = (props) => {
  
  return (
    <div>
      <UpcomingEventList />
      <ClosedEventList />
    </div> 
  )
}

export default Dashboard
