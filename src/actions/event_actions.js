import * as APIUtil from 'APP/util/event_util'
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

const receieveEvents = (events) => {
  return {
    type: RECEIVE_EVENTS,
    events,
  }
}

export const fetchEvents = (status) => dispatch => {
  return APIUtil.fetchEvents(status)
  .then(
    response => dispatch(receieveEvents(response.data)),
  )
  .catch( error => console.log(error) )
}