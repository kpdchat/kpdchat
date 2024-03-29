import axios from "axios"
import { setLoaderKebabHide, setLoaderKebabShow } from "./uiActions"
export const ACTION_SET_EDIT_FOLDER = 'ACTION_SET_EDIT_FOLDER'
export const ACTION_CLEAR_FOLDER = 'ACTION_CLEAR_FOLDER'
export const ACTION_SET_DELETE_FOLDER = 'ACTION_SET_DELETE_FOLDER'


export function fetchCreateFolder(folder) {
    return async () => {
        try {
            await axios.post('https://kpd-chat.onrender.com/api/folders', folder)
        } catch (e) {
            console.error(e)
        }
    }
}

export function fetchDeleteFolder(folder) {
    return async () => {
        try {
            await axios.delete("https://kpd-chat.onrender.com/api/folders",
                { data: { id: folder.id } })
        } catch (e) {
            console.error(e)
        }
    }
}

export function fetchUpdateFolder(folder) {
    return async () => {
        try {
            await axios.put("https://kpd-chat.onrender.com/api/folders", folder)
        } catch (e) {
            console.error(e)
        }
    }
}

export function fetchUpdateKebabFolder(folder) {
    return async (dispatch) => {
        dispatch(setLoaderKebabShow(folder.id))
        try {
            await axios.put("https://kpd-chat.onrender.com/api/folders", folder)
        } catch (e) {
            console.error(e)
        }
        finally {
            setTimeout(() => {
                dispatch(setLoaderKebabHide())
            }, 1500) 
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