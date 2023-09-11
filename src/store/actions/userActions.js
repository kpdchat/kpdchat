import axios from "axios"
export const ACTION_SET_USER = 'ACTION_SET_USER'
export const ACTION_CREATE_FOLDER = 'ACTION_CREATE_FOLDER'
export const ACTION_DELETE_FOLDER = 'ACTION_DELETE_FOLDER'
export const ACTION_UPDATE_FOLDER = 'ACTION_UPDATE_FOLDER'
export const ACTION_SET_EDIT_FOLDER = 'ACTION_SET_EDIT_FOLDER'
export const ACTION_CLEAR_FOLDER = 'ACTION_CLEAR_FOLDER'
export const ACTION_SET_DELETE_FOLDER = 'ACTION_SET_DELETE_FOLDER'

export function fetchUser(id) {
    return (dispatch) => {
        axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
            .then((res) => {
                dispatch(setUser(res.data))
            })
            .catch(e => console.log(e))
    }
}

export function fetchCreateFolder(folder) {
    return (dispatch) => {
        axios.post('https://kpdchat.onrender.com/api/folders', folder)
            .then(res => {
                dispatch(createFolder(res.data))
            })
            .catch(e => alert(e))
    }
}

export function fetchDeleteFolder(folder) {
    return (dispatch) => {
        axios.delete("https://kpdchat.onrender.com/api/folders",
            {
                data: {
                    id: folder.id
                }
            })
            .then(() => {
                dispatch(deleteFolder(folder))
            })
            .catch(e => alert(e))
    }
}

export function fetchUpdateFolder(folder) {
    return (dispatch) => {
        axios.put("https://kpdchat.onrender.com/api/folders", folder)
            .then((res) => {
                dispatch(updateFolder(res.data))
            })
            .catch(e => alert(e))
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
