import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import userReducer from './userReducer'
import chatReducer from './chatReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  chat: chatReducer,
})
