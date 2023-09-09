import {
    ACTION_CLOSE_KEBAB,
    ACTION_OPEN_KEBAB,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
} from '../actions/uiActions'

const initialState = {
    isOpen: false,
    isActive: false,
    id: 0,
    isModal: false,
    modalId : 0,
}

export default function uiReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CLOSE_KEBAB: {
            return {
                ...state,
                isActive: false,
                isOpen: false,
                id: 0,
            }
        }
        case ACTION_OPEN_KEBAB: {
            return {
                ...state,
                isActive: true,
                isOpen: true,
                id: payload,
            }
        }
        case ACTION_CLOSE_MODAL: {
            return {
                ...state,
                isModal: false,
                id: 0,
                modalId: 0,

            }
        }
        case ACTION_OPEN_MODAL: {
            return {
                ...state,
                isModal: true,
                id: 0,
                modalId: payload, 
            }
        }
        default: return state
    }
}
