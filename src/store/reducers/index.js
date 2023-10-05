import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import userReducer from './userReducer'
import chatReducer from './chatReducer'
import folderReducer from './folderReducer'
import messageReducer from './messageReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  chat: chatReducer,
  folder: folderReducer,
  message: messageReducer,
})
