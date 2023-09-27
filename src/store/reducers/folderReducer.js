import {
    ACTION_SET_EDIT_FOLDER,
    ACTION_CLEAR_FOLDER,
    ACTION_SET_DELETE_FOLDER,
} from '../actions/folderActions'

const initialState = {
    editFolder: {},
    deleteFolder: {},
    selectFolder: {},
}

export default function folderReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_EDIT_FOLDER: {
            return {
                ...state,
                editFolder: payload,
            }
        }
        case ACTION_SET_DELETE_FOLDER: {
            return {
                ...state,
                deleteFolder: payload,
            }
        }
        case ACTION_CLEAR_FOLDER: {
            return {
                ...state,
                editFolder: {},
                deleteFolder: {},
                selectFolder: {}
            }
        }
        
        default: return state
    }
}