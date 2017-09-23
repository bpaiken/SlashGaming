'use strict'

// Adding random events using node
const axios = require('axios') 

const API_URL = 'http://localhost:8090/api'

const addEvents = (events, token) => {
  return axios.post(`${API_URL}/events`, events,{
    headers: 
      { 
        Authorization: 'Bearer ' + token
      }
    })
}

const events = {
  event_one: {
    name: "first event",
    start: "2017-10-14T10:12:25.002Z",
    end: "2017-10-15T10:12:25.002Z"
  },
  event_two: {
    name: "second event",
    start: "2017-10-17T10:12:25.002Z",
    end: "2017-10-19T10:12:25.002Z"
  },
  event_three: {
    name: "third event",
    start: "2017-10-20T10:12:25.002Z",
    end: "2017-10-21T10:12:25.002Z"
  },
  event_four: {
    name: "fourth event",
    start: "2017-10-22T10:12:25.002Z",
    end: "2017-10-24T10:12:25.002Z"
  }
}
  
  // hard coding tokens
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE1MDYyODM5MTEsImlhdCI6MTUwNjE5NzUxMSwiaXNzIjoic2xhc2hnYW1pbmcubmV0IiwianRpIjoiMDJmOTg0NjgtYjczMy00YThkLTgzMDUtYzMwMWExZDZmOWE5IiwibmJmIjoxNTA2MTk3NTExLCJyb2xlIjoiYWRtaW4iLCJzdWIiOiJzZWlyaWYiLCJ1c2VyX2lkIjoxfQ.YtkUKmaiQPTWjezChFfa358OBCW2SNlwbQQyu2WnHYw"
  
Object.keys(events).forEach(event => {
  addEvents(event, token)
})
