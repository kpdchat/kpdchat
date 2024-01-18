import axios from 'axios';
import { setLoaderMessagesHide, setLoaderMessagesShow } from './uiActions';

export const ACTION_SET_START_WINDOW = 'ACTION_SET_START_WINDOW';
export const ACTION_DELETE_START_WINDOW = 'ACTION_DELETE_START_WINDOW';
export const ACTION_SET_RENDER_CHAT = 'ACTION_SET_RENDER_CHAT';
export const ACTION_SET_RENDER_CHAT_ID = 'ACTION_SET_RENDER_CHAT_ID';
export const ACTION_SET_MESSAGE_TO_UPDATE = 'ACTION_SET_MESSAGE_TO_UPDATE';
export const ACTION_CLEAR_MESSAGE_TO_UPDATE = 'ACTION_CLEAR_MESSAGE_TO_UPDATE';
export const ACTION_CLEAR_FORM = 'ACTION_CLEAR_FORM';
export const ACTION_STOP_CLEAR_FORM = 'ACTION_STOP_CLEAR_FORM';
export const ACTION_SET_MESSAGE_TO_REPLY = 'ACTION_SET_MESSAGE_TO_REPLY';
export const ACTION_CLEAR_MESSAGE_TO_REPLY = 'ACTION_CLEAR_MESSAGE_TO_REPLY';
export const ACTION_SET_MESSAGE_TO_DELETE = 'ACTION_SET_MESSAGE_TO_DELETE';
export const ACTION_CLEAR_MESSAGE_TO_DELETE = 'ACTION_CLEAR_MESSAGE_TO_DELETE';
export const ACTION_SET_RENDER_MESSAGES = 'ACTION_SET_RENDER_MESSAGES';
export const ACTION_CLEAR_INPUT_SEARCH = 'ACTION_CLEAR_INPUT_SEARCH';
export const ACTION_STOP_CLEAR_INPUT_SEARCH = 'ACTION_STOP_CLEAR_INPUT_SEARCH';
export const ACTION_SET_SEARCH = 'ACTION_SET_SEARCH';
export const ACTION_STOP_SEARCH = 'ACTION_STOP_SEARCH';
export const ACTION_SET_UNSEEN_COUNT = 'ACTION_SET_UNSEEN_COUNT'
export const ACTION_SET_CHAT_LENGTH = 'ACTION_SET_CHAT_LENGTH'

export function fetchRenderChat(id) {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`https://kpd-chat.onrender.com/api/chats?id=${id}`)
            dispatch(setRenderChat(data));
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchPostMessage(data) {
    return async (dispatch) => {
        try {
            dispatch(setLoaderMessagesShow());
            await axios.post('https://kpd-chat.onrender.com/api/messages', data)
        } catch (e) {
            console.error(e);
        } finally {
            setTimeout(() => {
                dispatch(setLoaderMessagesHide());
            }, 800);
        }
    }
}

export function fetchPostUserTyping(userId, chatId) {
    return async () => {
        try {
            const data = {
                'userId': userId,
                'chatId': chatId
            }
            await axios.post('https://kpd-chat.onrender.com/api/user-typing', data)
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchDeleteUserTyping(userId) {
    return async () => {
        try {
            const data = {
                'userId': userId
            }
            await axios.delete('https://kpd-chat.onrender.com/api/user-typing', { data: data })
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchUpdateLastSeenMessage(data) {
    return async () => {
        try {
            await axios.put('https://kpd-chat.onrender.com/api/messages/last-seen-message', data)
        } catch (e) {
            console.error(e)
        }
    }
}

export function fetchDeleteMessage(message) {
    return async () => {
        try {
            await axios.delete('https://kpd-chat.onrender.com/api/messages/delete', { data: message })
        } catch (e) {
            console.error(e);
        }
    }
}

export function fetchUpdateMessage(message) {
    return async (dispatch) => {
        dispatch(setLoaderMessagesShow());
        try {
            await axios.put('https://kpd-chat.onrender.com/api/messages/update', message)
        } catch (e) {
            console.error(e);
        }
        finally {
            dispatch(clearForm());
            setTimeout(() => {
                dispatch(setLoaderMessagesHide());
            }, 800);
        }
    }
}

export function fetchMessagesSearch(info) {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`https://kpd-chat.onrender.com/api/messages/search?chatId=${info.chatId}&text=${info.text}`)
            dispatch(setRenderMessages(data));
            dispatch(setSearchTrue());
        } catch (e) {
            console.error(e);
        }
    }
}

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

export function setReplyMessage(message) {
    return { type: ACTION_SET_MESSAGE_TO_REPLY, payload: message }
}

export function clearReplyMessage() {
    return { type: ACTION_CLEAR_MESSAGE_TO_REPLY }
}

export function setDeleteMessage(message) {
    return { type: ACTION_SET_MESSAGE_TO_DELETE, payload: message }
}

export function clearDeleteMessage() {
    return { type: ACTION_CLEAR_MESSAGE_TO_DELETE }
}

export function clearInputSearch() {
    return { type: ACTION_CLEAR_INPUT_SEARCH }
}

export function stopClearInputSearch() {
    return { type: ACTION_STOP_CLEAR_INPUT_SEARCH }
}

export function setRenderMessages(messages) {
    return { type: ACTION_SET_RENDER_MESSAGES, payload: messages }
}

export function setSearchTrue() {
    return { type: ACTION_SET_SEARCH }
}

export function stopSearch() {
    return { type: ACTION_STOP_SEARCH }
}

export function setUnSeenCount(count) {
    return { type: ACTION_SET_UNSEEN_COUNT, payload: count }
}

export function setLength(length) {
    return { type: ACTION_SET_CHAT_LENGTH, payload: length }
}
