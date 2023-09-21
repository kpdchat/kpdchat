import {
    // ACTION_SET_USER_CHATS,
    // ACTION_SET_PUBLIC_CHATS,
    // ACTION_ADD_USER_CHAT,
    ACTION_RENDER_CHAT_LIST,
    ACTION_SET_JOIN_CHAT,
    ACTION_SET_LEAVE_CHAT,
    ACTION_CLEAN_LEAVE_CHAT,
    ACTION_SET_SELECT_CHAT,

} from '../actions/chatActions'





const initialState = {
    // userChats: [],
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
                renderList: payload.list,
                listName: payload.name
            }
        }

        case ACTION_SET_JOIN_CHAT: { ///???????
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
        case ACTION_CLEAN_LEAVE_CHAT: {
            return {
                ...state,
                leaveChat: {}
            }
        }
        case ACTION_SET_SELECT_CHAT: {
            return {
                ...state,
                selectChat: {}
            }
        }
        // case ACTION_SET_PUBLIC_CHATS: {
        //     return {
        //         ...state,
        //         publicChats: payload,

        //     }
        // }
        // case ACTION_SET_USER_CHATS: {
        //     return {
        //         ...state,
        //         userChats: payload,
        //     }
        // }

        // case ACTION_ADD_USER_CHAT: {
        //     return {
        //         ...state,
        //         userChats: [
        //             ...state.userChats,
        //             payload
        //         ],
        //     }
        // }

        default: return state
    }
}