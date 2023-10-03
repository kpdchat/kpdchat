import axios from "axios"
import { setLoaderKebabHide, setLoaderKebabShow } from "./uiActions"
export const ACTION_SET_EDIT_FOLDER = 'ACTION_SET_EDIT_FOLDER'
export const ACTION_CLEAR_FOLDER = 'ACTION_CLEAR_FOLDER'
export const ACTION_SET_DELETE_FOLDER = 'ACTION_SET_DELETE_FOLDER'


export function fetchCreateFolder(folder) {
    return async () => {
        try {
            await axios.post('https://kpdchat.onrender.com/api/folders', folder)
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchDeleteFolder(folder) {
    return async () => {
        try {
            await axios.delete("https://kpdchat.onrender.com/api/folders",
                { data: { id: folder.id } })
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchUpdateFolder(folder) {
    return async () => {
        try {
            await axios.put("https://kpdchat.onrender.com/api/folders", folder)
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchUpdateKebabFolder(folder) {
    return async (dispatch) => {
        dispatch(setLoaderKebabShow(folder.id))
        try {
            await axios.put("https://kpdchat.onrender.com/api/folders", folder)
        } catch (e) {
            alert(e)
        }
        finally {
            setTimeout(() => {
                dispatch(setLoaderKebabHide())
            }, 1000) 
        }
    }
}

export function fetchRemoveChatFromFolder(folderId, arrChatId) {
    return async (dispatch) => {
        dispatch(setLoaderKebabShow(folderId))
        try {
            await axios.delete(`https://kpdchat.onrender.com/api/folders/${folderId}/removeChats`, 
            { data: { chatIds: arrChatId } })
        } catch (e) {
            alert(e)
        }
        finally {
            setTimeout(() => {
                dispatch(setLoaderKebabHide())
            }, 1000) 
        }
    }
}


export function setEditFolder(folder) {
    return { type: ACTION_SET_EDIT_FOLDER, payload: folder }
}

export function setDeleteFolder(folder) {
    return { type: ACTION_SET_DELETE_FOLDER, payload: folder }
}

export function clearEditFolder() {
    return { type: ACTION_CLEAR_FOLDER }
}