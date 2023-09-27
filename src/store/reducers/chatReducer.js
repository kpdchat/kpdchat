import {
    ACTION_RENDER_CHAT_LIST,
    ACTION_SET_JOIN_CHAT,
    ACTION_SET_LEAVE_CHAT,
    ACTION_CLEAN_CHAT,
    ACTION_SET_SELECT_CHAT,
    ACTION_SET_RENDER_LIST_NAME,

} from '../actions/chatActions'

const initialState = {
    publicChats: [],
    renderList: [],
    listName: '',
    joinChat: {},
    leaveChat: {},
    selectChat: {}
}

export default function chatReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_RENDER_CHAT_LIST: {
            return {
                ...state,
                renderList: payload,
            }
        }

        case ACTION_SET_RENDER_LIST_NAME: {
            return {
                ...state,
                listName: payload,
            }
        }

        case ACTION_SET_JOIN_CHAT: { 
            return {
                ...state,
                joinChat: payload
            }
        }
        case ACTION_SET_LEAVE_CHAT: {
            return {
                ...state,
                leaveChat: payload
            }
        }
        case ACTION_CLEAN_CHAT: {
            return {
                ...state,
                joinChat: {},
                leaveChat: {},
                selectChat: {}
            }
        }
        case ACTION_SET_SELECT_CHAT: {
            return {
                ...state,
                selectChat: payload
            }
        }

        default: return state
    }
}