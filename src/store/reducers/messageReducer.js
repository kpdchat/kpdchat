import {
    ACTION_DELETE_START_WINDOW,
    ACTION_SET_START_WINDOW,
    ACTION_SET_RENDER_CHAT,
    ACTION_SET_RENDER_CHAT_ID,
} from '../actions/messageAction'

const initialState = {
    isStartWindow: false,
    renderChat: {},
    chatId: 0,
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
        case ACTION_SET_RENDER_CHAT: {
            return {
                ...state,
                renderChat: payload,
            }
        }
        case ACTION_SET_RENDER_CHAT_ID: {
            return {
                ...state,
                chatId: payload,
            }
        }
        default: return state
    }
}