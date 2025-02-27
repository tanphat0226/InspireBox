import axios from 'axios'
import { API_ROOT } from '../utils/constant'

// User
export const registerUserAPI = async (data) => {
  try {
    const response = await axios.post(`${API_ROOT}/v1/users/register`, data)
    return response.data
  } catch (error) {
    return error.response.data
  }
}
