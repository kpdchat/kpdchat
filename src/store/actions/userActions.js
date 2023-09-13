import axios from "axios"
export const ACTION_SET_USER = 'ACTION_SET_USER'
export const ACTION_CREATE_FOLDER = 'ACTION_CREATE_FOLDER'
export const ACTION_DELETE_FOLDER = 'ACTION_DELETE_FOLDER'
export const ACTION_UPDATE_FOLDER = 'ACTION_UPDATE_FOLDER'
export const ACTION_SET_EDIT_FOLDER = 'ACTION_SET_EDIT_FOLDER'
export const ACTION_CLEAR_FOLDER = 'ACTION_CLEAR_FOLDER'
export const ACTION_SET_DELETE_FOLDER = 'ACTION_SET_DELETE_FOLDER'


export function fetchUser(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
            dispatch(setUser(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchCreateFolder(folder) {
    return async (dispatch) => {
        try {
            const response = await axios.post('https://kpdchat.onrender.com/api/folders', folder)
            dispatch(createFolder(response.data))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchDeleteFolder(folder) {
    return async (dispatch) => {
        try {
            await axios.delete("https://kpdchat.onrender.com/api/folders",
                { data: { id: folder.id } })
            dispatch(deleteFolder(folder))
        } catch (e) {
            alert(e)
        }
    }
}

export function fetchUpdateFolder(folder) {
    return async (dispatch) => {
        try {
            const response = await axios.put("https://kpdchat.onrender.com/api/folders", folder)
            dispatch(updateFolder(response.data))
        } catch (e) {
            alert(e)
        }
    }
}


export function createFolder(folder) {
    return { type: ACTION_CREATE_FOLDER, payload: folder }
}

export function deleteFolder(folder) {
    return { type: ACTION_DELETE_FOLDER, payload: folder }
}

export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

export function updateFolder(folder) {
    return { type: ACTION_UPDATE_FOLDER, payload: folder }
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