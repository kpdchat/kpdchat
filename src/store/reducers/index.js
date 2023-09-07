import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import foldersReducer from './foldersReducer'
import userReducer from './userReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  folder: foldersReducer,
  user: userReducer,
})
