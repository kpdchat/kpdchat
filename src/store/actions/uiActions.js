export const ACTION_CLOSE_KEBAB ='ACTION_CLOSE_KEBAB'
export const ACTION_OPEN_KEBAB ='ACTION_OPEN_KEBAB'

export function setKebabClose() {
    return{ type: ACTION_CLOSE_KEBAB}
}

export function setKebabOpen(id) {
    return{ type: ACTION_OPEN_KEBAB, payload: id}
}

