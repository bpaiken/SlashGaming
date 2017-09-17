import axios from 'axios'

const API_URL = 'http://localhost:8090/api'

export const fetchUserCharacters = (userId) => {
  return axios.get(`${API_URL}/characters?user_id=${userId}`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}