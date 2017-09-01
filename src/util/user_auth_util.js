import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const signinUser = ({username, password}) => {
  return axios.post(`${API_URL}/api/authenticate/user`, 
  { username, password })
}

export const signupUser = ({username, password}) => {
  return axios.post(`${API_URL}/api/users`,
   { username, password })
}

// Placeholder - awaiting API endpoint
export const signoutUser = () => {
  return null
}