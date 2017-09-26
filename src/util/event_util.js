import axios from 'axios'

const API_URL = 'http://localhost:8090'

export const fetchEvents = (status) => {
  return axios.get(`${API_URL}/api/events?status=${status}`, {
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}

// export const createCharacterEvent = (event) => {
//   return axios.post(`${API_URL}/api/events`, event, {
//   headers:
//   {
//       Authorization: 'Bearer ' + localStorage.getItem('token')
//   }
// })
// }

// export const fetchCharacterEvents = (id) => {
//   return axios.get(`${API_URL}/api/events/${id}/characters`, {
//     headers:
//     {
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//     }
// })
// }

// export const removeCharacterEvent = (id) => {
//   return axios.delete(`${API_URL}/api/events/${id}/characters`, {
//     headers:
//     {
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//     }
// })
// }

export const registerCharacter = (eventId, characterId) => {

  return axios.post(`${API_URL}/api/events/${eventId}/characters`, {
    character_id: characterId
  }, 
  {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
}