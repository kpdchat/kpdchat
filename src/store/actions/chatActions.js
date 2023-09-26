import axios from "axios"

export const ACTION_RENDER_CHAT_LIST = 'ACTION_RENDER_CHAT_LIST'
export const ACTION_ADD_USER_CHAT = 'ACTION_ADD_USER_CHAT'
export const ACTION_SET_JOIN_CHAT = 'ACTION_SET_JOIN_CHAT'
export const ACTION_SET_LEAVE_CHAT = 'ACTION_SET_LEAVE_CHAT'
export const ACTION_CLEAN_CHAT = 'ACTION_CLEAN_CHAT'
export const ACTION_SET_SELECT_CHAT = 'ACTION_SET_SELECT_CHAT'
export const ACTION_SET_RENDER_LIST_NAME = 'ACTION_SET_RENDER_LIST_NAME'



export function fetchPublicChats() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://kpdchat.onrender.com/api/chats/all')
            dispatch(setRenderList(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchCreateChat(chat) {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/chats', chat)
            dispatch(addUserChat(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchJoinChat(data) {
    return async (dispatch) => {
        try {
            await axios.post('https://kpdchat.onrender.com/api/chats/join', data)
            dispatch(cleanChat())
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchLeaveChat(data) {
    return async (dispatch) => {
        try {
            await axios.post('https://kpdchat.onrender.com/api/chats/leave', data)
            dispatch(cleanChat())
        } catch (e) {
            alert(e)
        }
    }
}



export function setRenderList(list) {
    const sortList = list.sort((a, b) => {
        return a.id.localeCompare(b.id)
    })
    return { type: ACTION_RENDER_CHAT_LIST, payload: sortList }
}

export function setRenderListName(name) {
    return { type: ACTION_SET_RENDER_LIST_NAME, payload: name }
}

export function addUserChat(chat) {
    return { type: ACTION_ADD_USER_CHAT, payload: chat }
}

export function setChatToJoin(chat) {
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

