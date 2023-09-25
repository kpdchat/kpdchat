import axios from "axios"
export const ACTION_SET_USER = 'ACTION_SET_USER'



export function fetchUser(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
            dispatch(setUser(response.data))
            dispatch(fetchUser(id))
        } catch (e) {
            console.error(e)
            setTimeout(() => {
                dispatch(fetchUser(id))
            }, 3000)
        }
    }
}


export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

