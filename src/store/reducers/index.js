import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import foldersReducer from './foldersReducer'

export const rootReducer = combineReducers({
  ui: uiReducer,
  folder: foldersReducer,
})
