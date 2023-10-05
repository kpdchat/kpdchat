import {
    ACTION_SET_USER,
    ACTION_START_FETCH,
    ACTION_STOP_FETCH,
    ACTION_SET_USER_ERROR,
    ACTION_DELETE_USER_ERROR,
} from '../actions/userActions'

const initialState = {
    user: {},
    isFetch: false,
    userError: false,
}

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_USER: {
            return {
                ...state,
                user: payload,
            }
        }
        case ACTION_START_FETCH: {
            return {
                ...state,
                isFetch: true,
            }
        }
        case ACTION_STOP_FETCH: {
            return {
                ...state,
                isFetch: false,
            }
        }
        case ACTION_SET_USER_ERROR: {
            return {
                ...state,
                userError: true,
            }
        }
        case ACTION_DELETE_USER_ERROR: {
            return {
                ...state,
                userError: false,
            }
        }
        default: return state
    }
}