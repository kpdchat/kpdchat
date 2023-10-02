import {
    ACTION_SET_USER,
    ACTION_START_FETCH,
    ACTION_STOP_FETCH,
} from '../actions/userActions'

const initialState = {
    user: {},
    isFetch: false,
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
        default: return state
    }
}