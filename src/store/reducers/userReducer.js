import {
    ACTION_SET_USER,
    ACTION_CREATE_FOLDER,
    ACTION_DELETE_FOLDER,
    ACTION_UPDATE_FOLDER,
    ACTION_SET_EDIT_FOLDER,
} from '../actions/userActions'

const initialState = {
    user: {},
    editFolder: {}
}

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_USER: {
            return {
                ...state,
                user: payload,
            }
        }
        case ACTION_CREATE_FOLDER: {
            return {
                ...state,
                user: {
                    ...state.user,
                    folders: [
                        ...state.user.folders,
                        payload
                    ]
                },
            }
        }
        case ACTION_DELETE_FOLDER: {
            const newList = state.user.folders.filter(el => el.id !== payload.id)
            return {
                ...state,
                user: {
                    ...state.user,
                    folders: newList
                },
            }
        }
        case ACTION_SET_EDIT_FOLDER: {
            return {
                ...state,
                editFolder: payload,
            }
        }
        case ACTION_UPDATE_FOLDER: {
            const newList = state.user.folders.map(el => el.id === payload.id ? payload : el)
            return {
                ...state,
                user: {
                    ...state.user,
                    folders: newList
                },
            }
        }
        default: return state
    }
}