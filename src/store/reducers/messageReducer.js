import {
    ACTION_DELETE_START_WINDOW,
    ACTION_SET_START_WINDOW,
    ACTION_SET_RENDER_CHAT,
    ACTION_SET_RENDER_CHAT_ID,
    ACTION_SET_MESSAGE_TO_UPDATE,
    ACTION_CLEAR_MESSAGE_TO_UPDATE,
    ACTION_CLEAR_FORM,
    ACTION_STOP_CLEAR_FORM, ACTION_SET_MESSAGE_TO_REPLY, ACTION_CLEAR_MESSAGE_TO_REPLY
} from '../actions/messageAction'

const initialState = {
    isStartWindow: false,
    renderChat: {},
    chatId: 0,
    editMessage: {},
    clearForm: false,
    replyMessage: {}
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
        case ACTION_SET_MESSAGE_TO_UPDATE: {
            return {
                ...state,
                editMessage: payload,
            }
        }
        case ACTION_CLEAR_MESSAGE_TO_UPDATE: {
            return {
                ...state,
                editMessage: {},
                clearForm: true,
            }
        }
        case ACTION_CLEAR_FORM: {
            return {
                ...state,
                clearForm: true,
                replyMessage: {}
            }
        }
        case ACTION_STOP_CLEAR_FORM: {
            return {
                ...state,
                clearForm: false,
                editMessage : {},
            }
        }
        case ACTION_SET_MESSAGE_TO_REPLY: {
            return {
                ...state,
                replyMessage: payload,
            }
        }
        case ACTION_CLEAR_MESSAGE_TO_REPLY: {
            return {
                ...state,
                replyMessage: {},
            }
        }
        default: return state
    }
}