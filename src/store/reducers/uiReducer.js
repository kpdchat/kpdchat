import {
    ACTION_CLOSE_KEBAB,
    ACTION_OPEN_KEBAB,
} from '../actions/uiActions'

const initialState = {
    isOpen: false,
    id: 0,
}

export default function uiReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CLOSE_KEBAB: {
            return {
                ...state,
                isOpen: false,
                id: 0,
            }
        }
        case ACTION_OPEN_KEBAB: {
            return {
                ...state,
                isOpen: true,
                id: payload,
            }
        }
        default: return state
    }
}