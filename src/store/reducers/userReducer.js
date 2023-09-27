import {
    ACTION_SET_USER,
} from '../actions/userActions'

const initialState = {
    user: {},
}

export default function userReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_SET_USER: {
            return {
                ...state,
                user: payload,
            }
        }
        default: return state
    }
}