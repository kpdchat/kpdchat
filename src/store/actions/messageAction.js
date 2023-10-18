import axios from "axios"

export const ACTION_SET_START_WINDOW = 'ACTION_SET_START_WINDOW'
export const ACTION_DELETE_START_WINDOW = 'ACTION_DELETE_START_WINDOW'
export const ACTION_SET_RENDER_CHAT = 'ACTION_SET_RENDER_CHAT'
export const ACTION_SET_RENDER_CHAT_ID = 'ACTION_SET_RENDER_CHAT_ID'


export function fetchRenderChat(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://kpdchat.onrender.com/api/chats?id=${id}`)
            dispatch(setRenderChat(data))
        } catch (e) {
            console.error(e);
        }
    }
}


export function fetchPostMessage(data) {
    return async () => {
        try {
            await axios.post('https://kpdchat.onrender.com/api/messages', data)
        } catch (e) {
            console.error(e)
        }
    }
}

export function fetchUpdateLastSeenMessage(data) {
    return async () => {
        try {
            await axios.put('https://kpdchat.onrender.com/api/messages/last-seen-message', data)
        } catch (e) {
            console.error(e)
        }
    }
}


export function setRenderChat(chat) {
    return { type: ACTION_SET_RENDER_CHAT, payload: chat }
}

export function setRenderChatId(id) {
    return { type: ACTION_SET_RENDER_CHAT_ID, payload: id }
}

export function setStartWindow() {
    return { type: ACTION_SET_START_WINDOW }
}

export function deleteStartWindow() {
    return { type: ACTION_DELETE_START_WINDOW }
}