import axios from "axios"


export const ACTION_SET_USER = 'ACTION_SET_USER'
export const ACTION_CREATE_FOLDER = 'ACTION_CREATE_FOLDER'
export const ACTION_DELETE_FOLDER = 'ACTION_DELETE_FOLDER'

// export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER'


export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

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
export function createFolder(folder) {
    return { type: ACTION_CREATE_FOLDER, payload: folder }
}

export function deleteFolder(folder) {
    return { type: ACTION_DELETE_FOLDER, payload: folder }
}