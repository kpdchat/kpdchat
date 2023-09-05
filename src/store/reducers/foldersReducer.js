import {
    ACTION_ADD_FOLDER
} from '../actions/foldersActions'

const initialState = {
    list: [],
    editFolder : {}
}

export default function foldersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_ADD_FOLDER: {
            return {
                ...state,
                list: [
                    ...state.list,
                    payload
                ]
            }
        }
        default: return state
    }
}