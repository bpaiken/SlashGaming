import * as APIUtil from 'APP/util/event_util'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'
export const RECEIVE_EVENT_CHARACTER = 'RECEIVE_EVENT_CHARACTER'

const receieveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events,
  }
}

const receieveEventCharacter = (eventId, characterId) => {
  return {
    type: RECEIVE_EVENT_CHARACTER,
    eventId,
    characterId,
  }
}

export const fetchEvents = (status) => dispatch => {
  return APIUtil.fetchEvents(status)
  .then(
    response => dispatch(receieveEvents(response.data)),
  )
  .catch( error => console.log(error) )
}

export const registerCharacter = (eventId, characterId) => dispatch => {
  return APIUtil.registerCharacter(eventId, characterId)
  .then(response => {
      console.log(response)
      // dispatch(receieveEventCharacter(eventId, characterId))
    }
  )
}
