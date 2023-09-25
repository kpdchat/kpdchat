import axios from "axios"

export const ACTION_SET_USER_CHATS = 'ACTION_SET_USER_CHATS'
export const ACTION_SET_PUBLIC_CHATS = 'ACTION_SET_PUBLIC_CHATS'
// export const ACTION_CREATE_CHAT = 'ACTION_CREATE_CHAT'
export const ACTION_RENDER_CHAT_LIST = 'ACTION_RENDER_CHAT_LIST'
export const ACTION_ADD_USER_CHAT = 'ACTION_ADD_USER_CHAT'
export const ACTION_SET_JOIN_CHAT = 'ACTION_SET_JOIN_CHAT'
export const ACTION_SET_LEAVE_CHAT = 'ACTION_SET_LEAVE_CHAT'
export const ACTION_CLEAN_CHAT = 'ACTION_CLEAN_CHAT'
export const ACTION_SET_SELECT_CHAT = 'ACTION_SET_SELECT_CHAT'


export function fetchPublicChats() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://kpdchat.onrender.com/api/chats/all')
            // dispatch(setPublicChats(response.data))
            const data = {
                list: response.data,
                name: 'publicChats'
            }
            dispatch(setRenderList(data))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchCreateChat(chat) {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/chats', chat)
            // dispatch(setPublicChats(response.data))
            dispatch(addUserChat(response.data))
            console.log(response);
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchJoinChat(data) {
    return async () => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/chats/join', data)
            console.log(response);
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchLeaveChat(data) {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/chats/leave', data)
            dispatch(cleanChat())
            console.log(response);
        } catch (e) {
            alert(e)
        }
    }
}


export function setPublicChats(chats) {
    return { type: ACTION_SET_PUBLIC_CHATS, payload: chats }
}
export function setUserChats(chats) {
    return { type: ACTION_SET_USER_CHATS, payload: chats }
}
export function setRenderList(data) {
    return { type: ACTION_RENDER_CHAT_LIST, payload: data }
}

export function addUserChat(chat) {
    return { type: ACTION_ADD_USER_CHAT, payload: chat }
}

export function setChatToJoin(chat) { //???????/
    return { type: ACTION_SET_JOIN_CHAT, payload: chat }
}

export function setChatToLeave(chat) {
    return { type: ACTION_SET_LEAVE_CHAT, payload: chat }
}

export function setSelectChat(chat) {
    return { type: ACTION_SET_SELECT_CHAT, payload: chat }
}

export function cleanChat() {
    return { type: ACTION_CLEAN_CHAT }
}

