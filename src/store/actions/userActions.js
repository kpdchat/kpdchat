import axios from "axios"
import { setLoaderShow, setLoaderHide } from './uiActions';
export const ACTION_SET_USER = 'ACTION_SET_USER'
export const ACTION_START_FETCH = 'ACTION_START_FETCH'
export const ACTION_STOP_FETCH = 'ACTION_STOP_FETCH'
export const ACTION_SET_USER_ERROR = 'ACTION_SET_USER_ERROR';
export const ACTION_DELETE_USER_ERROR = 'ACTION_DELETE_USER_ERROR';

export function singleUserFetch(id) {
    return async (dispatch) => {
        try {
            await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
            dispatch(setFetch())
            dispatch(fetchUser(id))
        } catch (e) {
            console.error(e)
            dispatch(setUserError())
        }


    }
}

export function fetchUser(id) {
    return async (dispatch, getState) => {
        const { user } = getState()
        try {
            if (user.isFetch) {
                const { data } = await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
                dispatch(setUser(data))
                setTimeout(() => {
                    dispatch(fetchUser(id))
                }, 1000)
            }

        } catch (e) {
            console.error(e)
            if (user.isFetch) {
                setTimeout(() => {
                    dispatch(fetchUser(id))
                }, 3000)
            }

        }
    }
}

export function fetchUpdateUser(user) {
    return async (dispatch) => {
        try {
            dispatch(setLoaderShow());
            await axios.put('https://kpdchat.onrender.com/api/users', user);
        } catch (e) {
            console.error(e);
        } finally {
            dispatch(setLoaderHide());
        }
    }
}

export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

export function setFetch() {
    return { type: ACTION_START_FETCH }
}

export function setStopFetch() {
    return { type: ACTION_STOP_FETCH }
}

export function setUserError() {
    return { type: ACTION_SET_USER_ERROR };
}

export function deleteUserError() {
    return { type: ACTION_DELETE_USER_ERROR };
}

