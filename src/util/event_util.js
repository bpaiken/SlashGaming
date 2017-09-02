import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const fetchEvents = () => {
  return axios.get(`${API_URL}/api/events`)
}

export const createCharacterEvent = (event) => {
  return axios.post(`${API_URL}/api/events`,
event)
}

// TODO: Add headers
export const fetchCharacterEvents = (id) => {
  return axios.get(`${API_URL}/api/events/${id}/characters`)
}

// TODO: Add headers
export const removeCharacterEvent = (id) => {
  return axios.delete(`${API_URL}/api/events/${id}/characters`)
}