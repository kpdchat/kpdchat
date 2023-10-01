import axios from "axios"
import {setLoaderShow, setLoaderHide} from './uiActions';
export const ACTION_SET_USER = 'ACTION_SET_USER'

export function fetchUser(id) {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
            dispatch(setUser(response.data))
            setTimeout(() => {
                dispatch(fetchUser(id))
            }, 1000)
        } catch (e) {
            console.error(e)
            setTimeout(() => {
                dispatch(fetchUser(id))
            }, 3000)
        }
    }
}

export function fetchUpdateUser(user) {
    return async (dispatch) => {
        try {
            dispatch(setLoaderShow());
            await axios.put('https://kpdchat.onrender.com/api/users', user);
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(setLoaderHide());
        }
    }
}

export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

