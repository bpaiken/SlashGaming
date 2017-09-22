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

// Can't add status
let event = {
	name: "amazing super awesome event",
	start: "2017-08-25T10:12:25.002Z",
  end: "2017-08-29T10:12:25.002Z"
}

// hard coding tokens
let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhY2Nlc3MiLCJleHAiOjE1MDYxMjg1NTgsImlhdCI6MTUwNjA0MjE1OCwiaXNzIjoic2xhc2hnYW1pbmcubmV0IiwianRpIjoiZDNhNTk0M2ItMGRhZi00OTNhLWEwMWYtNWZiOTNhMjI0OGVjIiwibmJmIjoxNTA2MDQyMTU4LCJyb2xlIjoidXNlciIsInN1YiI6ImNhbHZpbiIsInVzZXJfaWQiOjF9.c4VZZjuWPMp7ZsRRyJmwwMWqArUuYqFRHdr8TL5KdfM"

// still have to go into database and set some events to closed
addEvents(event, token).then(
  resp => console.log(resp.data),
  err => console.log(err)
)