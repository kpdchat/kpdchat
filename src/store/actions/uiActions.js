export const ACTION_CLOSE_KEBAB = 'ACTION_CLOSE_KEBAB';
export const ACTION_OPEN_KEBAB = 'ACTION_OPEN_KEBAB';
export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
// export const ACTION_FOLDER_ACTIVE = 'ACTION_CLOSE_MODAL'
// export const ACTION_FOLDER_NOT_ACTIVE = 'ACTION_FOLDER_NOT_ACTIVE'
export const ACTION_OPEN_WINDOW_CHAT = 'ACTION_OPEN_WINDOW_CHAT';
export const ACTION_CLOSE_WINDOW_CHAT = 'ACTION_CLOSE_WINDOW_CHAT';


export function setKebabClose() {
    return {type: ACTION_CLOSE_KEBAB}
}

export function setKebabOpen(id) {
    return {type: ACTION_OPEN_KEBAB, payload: id}
}

export function setModalClose() {
    return {type: ACTION_CLOSE_MODAL}
}

export function setModalOpen(id) {
    return {type: ACTION_OPEN_MODAL, payload: id}
}

export function setWindowChatOpen() {
    return {type: ACTION_OPEN_WINDOW_CHAT}
}

export function setWindowChatClose() {
    return {type: ACTION_CLOSE_WINDOW_CHAT}
}
