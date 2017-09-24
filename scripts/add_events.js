'use strict'

// Adding random events using node
const axios = require('axios') 

const API_URL = 'http://localhost:8090/api'

const login = (username, password) => {
  return axios.post(`${API_URL}/authenticate/user`, {username, password})
}

const addEvent = (events, token) => {
  return axios.post(`${API_URL}/events`, events,{
    headers: 
      { 
        Authorization: 'Bearer ' + token
      }
    })
}

const adjectives = [
  "super",
  "awesome",
  "crazy",
  "amazing",
  "sick"
]

const createMultEvents = (num, token) => {
  for (let i = 1; i <= num; i++) {
    let adj1 = adjectives[Math.floor(Math.random() * adjectives.length)]
    let adj2 = adjectives[Math.floor(Math.random() * adjectives.length)]
    let adj3 = adjectives[Math.floor(Math.random() * adjectives.length)]
  
    // using dates 10 to 20 because 1-9 causes problems and i'm
    // too lazy to pad it
    let date = Math.floor(Math.random() * 10) + 10
  
    addEvent({
      name: `${adj1} ${adj2} ${adj3} event`,
      start: `2017-10-${date}T10:12:25.002Z`,
      end: `2017-10-${date + Math.floor(Math.random() * 5)}T10:25:25.002Z`
    }, token).then(
      resp => {
        console.log(`${resp.data.name} created`)
      },
      err => console.log(err)
    )
  }
}

// TODO: extra arguments for options
// username and password is taken from commandline when running script
// $ node ./scripts/add_events.js calvin password 10
let user = process.argv[2]
let pass = process.argv[3]
let numEvents = Number(process.argv[4])

login(user, pass).then(
  resp => {
    createMultEvents(numEvents, resp.data.token)
  },
  err => console.log(err)
)