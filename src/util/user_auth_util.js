import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const signinUser = ({username, password}) => {
  return axios.post(`${API_URL}/authenticate/user`, 
  { username, password })
}

export const signupUser = ({username, password}) => {
  return axios.post(`${API_URL}/register/user`,
   { username, password })
}