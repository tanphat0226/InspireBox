import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { API_ROOT } from '../../utils/constant'
import axios from 'axios'

const initialState = {
  currentUser: null
}

// Actions to call API (asynchronous) and update state to redux, use middleware createAsyncThunk by extraReducers
// https://redux-toolkit.js.org/api/createAsyncThunk
export const loginUserAPI = createAsyncThunk('user/loginUserAPI', async (data) => {
  const response = await axios.post(`${API_ROOT}/v1/users/login`, data, {
    withCredentials: true
  })
  return response.data
})

export const logoutUserAPI = createAsyncThunk('user/logoutUserAPI', async () => {
  const response = await axios.delete(`${API_ROOT}/v1/users/logout`)
  return response.data
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  // ExtraReducers: Place process asynchronous data
  extraReducers: (builder) => {
    builder.addCase(loginUserAPI.fulfilled, (state, action) => {
      state.currentUser = action.payload
    })
    builder.addCase(logoutUserAPI.fulfilled, (state) => {
      // Logout successful, remove currentUser
      state.currentUser = null
    })
  }
})

// Action creators are generated for each case reducer function
// export const {} = userSlice.actions

// Selectors
export const selectCurrentUser = (state) => {
  return state.user.currentUser
}

// export default activeBoardSlice.reducer
export const userReducer = userSlice.reducer
