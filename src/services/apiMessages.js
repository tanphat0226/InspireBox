import axios from 'axios'
import { API_ROOT } from '../utils/constant'

export const getAllMessagesAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/v1/messages`, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const getRandMessageAPI = async () => {
  try {
    const response = await axios.get(`${API_ROOT}/v1/messages/random`, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const createMessageAPI = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/messages`, data, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
}

export const updateMessageAPI = async (id, data) => {
  try {
    const response = await axios.put(`${API_ROOT}/v1/messages/${id}`, data, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
}
export const deleteMessageAPI = async (id) => {
  try {
    const response = await axios.delete(`${API_ROOT}/v1/messages/${id}`, {
      withCredentials: true
    })
    return response.data
  } catch (error) {
    return error.response.data
  }
}
