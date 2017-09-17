import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const fetchUserPoints = (userId) => {
  return axios.get(`${API_URL}/api/users/${userId}/points?limit=25&offset=0`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

export const fetchPointSummary = () => {
  return axios.get(`${API_URL}/api/users/points/summary?limit=25&offset=0`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

export const updateUserPoints = (userId, {eventId, points}) => {
  return axios.post(`${API_URL}/api/users/${userId}/points`, {
    event_id: eventId,
    points
  }, 
  {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}