import axios from 'axios';

export const ACTION_SET_START_WINDOW = 'ACTION_SET_START_WINDOW';
export const ACTION_DELETE_START_WINDOW = 'ACTION_DELETE_START_WINDOW';
export const ACTION_SET_RENDER_CHAT = 'ACTION_SET_RENDER_CHAT';
export const ACTION_SET_RENDER_CHAT_ID = 'ACTION_SET_RENDER_CHAT_ID';
export const ACTION_SET_MESSAGE_TO_UPDATE = 'ACTION_SET_MESSAGE_TO_UPDATE';
export const ACTION_CLEAR_MESSAGE_TO_UPDATE = 'ACTION_CLEAR_MESSAGE_TO_UPDATE';
export const ACTION_CLEAR_FORM = 'ACTION_CLEAR_FORM';
export const ACTION_STOP_CLEAR_FORM = 'ACTION_STOP_CLEAR_FORM';



export function fetchRenderChat(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://kpdchat.onrender.com/api/chats?id=${id}`)
            dispatch(setRenderChat(data));
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
            console.error(e);
        }
    }
}

export function fetchPostUserTyping(data) {
    return async () => {
        try {
            await axios.post('https://kpdchat.onrender.com/api/user-typing', data)
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchDeleteUserTyping(data) {
    return async () => {
        try {
            await axios.delete('https://kpdchat.onrender.com/api/user-typing', { data: data })
        } catch (e) {
            console.error(e);
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

export function fetchDeleteMessage(message) {
    return async () => {
        try {
            await axios.delete('https://kpdchat.onrender.com/api/messages/delete', { data: message })
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchUpdateMessage(message) {
    return async (dispatch) => {
        try {
            await axios.put('https://kpdchat.onrender.com/api/messages/update', message)
        } catch (e) {
            console.error(e);
        }
        finally{
            dispatch(clearForm())
        }
    }
}

//это мне нада

// export function fetchDeleteMessage(messageId, userId) {

//     return async () => {
//         try {
//             await axios.delete('https://kpdchat.onrender.com/api/messages/delete', {
//                 data: {
//                     "messageId": messageId,
//                     "userId": userId
//                 }
//             })
//         } catch (e) {
//             console.error(e);
//         }
//     }
// }


export function setRenderChat(chat) {
    return { type: ACTION_SET_RENDER_CHAT, payload: chat }
}

export function setRenderChatId(id) {
    return { type: ACTION_SET_RENDER_CHAT_ID, payload: id }
}

export function setEditMessage(message) {
    return { type: ACTION_SET_MESSAGE_TO_UPDATE, payload: message }
}

export function clearEditMessage() {
    return { type: ACTION_CLEAR_MESSAGE_TO_UPDATE }
}

export function clearForm() {
    return { type: ACTION_CLEAR_FORM }
}

export function stopClearForm() {
    return { type: ACTION_STOP_CLEAR_FORM }
}

export function setStartWindow() {
    return { type: ACTION_SET_START_WINDOW }
}

export function deleteStartWindow() {
    return { type: ACTION_DELETE_START_WINDOW }
}
