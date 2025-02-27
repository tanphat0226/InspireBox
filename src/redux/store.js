import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' //Use localStorage
import { persistReducer } from 'redux-persist'
import { userReducer } from './user/userSlice'

// Confing Redux-Persist
const persistConfig = {
  key: 'root',
  storage
}

// Combine all reducers
const reducers = combineReducers({
  user: userReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

// Create Redux Store
export const store = configureStore({
  reducer: persistedReducer,
  // Fix warning error when implement redux-persist
  // https://stackoverflow.com/questions/61704805/getting-an-error-a-non-serializable-value-was-detected-in-the-state-when-using/63244831#63244831
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})
