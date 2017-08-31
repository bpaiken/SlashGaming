import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const signinUser = ({user, password}) => {
  debugger
  return axios.post(`${API_URL}/api/authenticate/user`, 
  { user, password })
}

export const signupUser = ({username, password}) => {
  return axios.post(`${API_URL}/api/users`,
   { username, password })
}