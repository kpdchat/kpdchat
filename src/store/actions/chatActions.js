import axios from "axios"

export const ACTION_SET_USER_CHATS = 'ACTION_SET_USER_CHATS'
export const ACTION_SET_PUBLIC_CHATS = 'ACTION_SET_PUBLIC_CHATS'
// export const ACTION_CREATE_CHAT = 'ACTION_CREATE_CHAT'
export const ACTION_RENDER_CHAT_LIST = 'ACTION_RENDER_CHAT_LIST'
export const ACTION_ADD_USER_CHAT = 'ACTION_ADD_USER_CHAT'



export function fetchPublicChats() {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://kpdchat.onrender.com/api/chats/all')
            // dispatch(setPublicChats(response.data))
            dispatch(setRenderList(response.data))
            console.log(response);
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


export function setPublicChats(chats) {
    return { type: ACTION_SET_PUBLIC_CHATS, payload: chats }
}
export function setUserChats(chats) {
    return { type: ACTION_SET_USER_CHATS, payload: chats }
}
export function setRenderList(chats) {
    return { type: ACTION_RENDER_CHAT_LIST, payload: chats }
}

export function addUserChat(chat) {
    return { type: ACTION_ADD_USER_CHAT, payload: chat }
}


