import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
})
