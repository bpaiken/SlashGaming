import axios from 'axios'

const API_URL = 'http://localhost:8090/api'

export const verifyCharacter = ({account, character}) => {
  return axios.post(`${API_URL}/verify/character`, {account, character},{
    headers: 
      { 
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    })
}

export const verifyCode = ({ code }) => {
  return axios.post(`${API_URL}/verify/code`, { code }, {
    headers:
    {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}