export const ACTION_SET_START_WINDOW = 'ACTION_SET_START_WINDOW'
export const ACTION_DELETE_START_WINDOW = 'ACTION_DELETE_START_WINDOW'


export function setStartWindow() {
    return { type: ACTION_SET_START_WINDOW}
}

export function deleteStartWindow() {
    return { type: ACTION_DELETE_START_WINDOW}
}