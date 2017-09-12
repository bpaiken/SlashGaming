import axios from 'axios'

const API_URL = 'http://localhost:8090/api'

export const fetchUserCharacter = (userId) => {
  return axios.get(`${API_URL}/characters?user_id=${userId}`)
}