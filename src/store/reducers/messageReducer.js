import {
    ACTION_DELETE_START_WINDOW,
    ACTION_SET_START_WINDOW,
} from '../actions/messageAction'

const initialState = {
    isStartWindow: false,
}

export default function messageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_DELETE_START_WINDOW: {
            return {
                ...state,
                isStartWindow: false,
            }
        }
        case ACTION_SET_START_WINDOW: {
            return {
                ...state,
                isStartWindow: true,
            }
        }
        default: return state
    }
}