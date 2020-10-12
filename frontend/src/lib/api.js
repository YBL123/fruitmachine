import axios from 'axios'

const baseUrl = 'api'

export const getFloatValue = () => {
  try {
    return axios.get(`${baseUrl}/value`)
  } catch (error) {
    console.log(error)
  }
}

export const updateFloatValue = floatId => {
  try {
    return axios.get(`${baseUrl}/value/${floatId}`)
  } catch (error) {
    console.log(error)
  }
}