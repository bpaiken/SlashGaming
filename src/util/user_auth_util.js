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

export const refreshAuthToken = () => {
  return axios.get(`${API_URL}/api/authenticate/refresh-token`, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}