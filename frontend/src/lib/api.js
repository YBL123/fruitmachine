import axios from 'axios'

const baseUrl = 'api'

export const getFloatValue = () => {
  try {
    return axios.get(`${baseUrl}/value`)
  } catch (error) {
    console.log(error)
  }
}