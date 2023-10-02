import axios from "axios"
export const ACTION_SET_USER = 'ACTION_SET_USER'
export const ACTION_START_FETCH = 'ACTION_START_FETCH'
export const ACTION_STOP_FETCH = 'ACTION_STOP_FETCH'


export function fetchUser(id) {
    return async (dispatch, getState) => {
        const { user } = getState()
        console.log(user);
        try {
            if (user.isFetch) {
                const response = await axios.get(`https://kpdchat.onrender.com/api/users?userId=${id}`)
                dispatch(setUser(response.data))
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


export function setUser(user) {
    return { type: ACTION_SET_USER, payload: user }
}

export function setFetch() {
    return { type: ACTION_START_FETCH }
}

export function setStopFetch() {
    return { type: ACTION_STOP_FETCH }
}

