import axios from 'axios'
import { API_ROOT } from '../utils/constant'

export const getAllMessagesAPI = async () => {
  try {
    console.log(API_ROOT)
    const response = await axios.get(`${API_ROOT}/v1/messages`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getRandMessageAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/v1/messages/random`)
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const createMessageAPI = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/messages`, data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
