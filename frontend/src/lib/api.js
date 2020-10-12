import axios from 'axios'

const baseUrl = 'api'

export const getFloatValue = () => {
  try {
    return axios.get(`${baseUrl}/value`)
  } catch (error) {
    console.log(error)
  }
}

export const updateFloatValue = (floatId, value) => {
    return axios.put(`${baseUrl}/value/${floatId}`, {value: value})
}