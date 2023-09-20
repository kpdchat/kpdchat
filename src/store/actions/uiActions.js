export const ACTION_CLOSE_KEBAB = 'ACTION_CLOSE_KEBAB';
export const ACTION_OPEN_KEBAB = 'ACTION_OPEN_KEBAB';
export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const ACTION_CLOSE_MODAL = 'ACTION_CLOSE_MODAL';
export const ACTION_OPEN_WINDOW_CHAT = 'ACTION_OPEN_WINDOW_CHAT';
export const ACTION_CLOSE_WINDOW_CHAT = 'ACTION_CLOSE_WINDOW_CHAT';
export const ACTION_SHOW_LOADER = 'ACTION_SHOW_LOADER';
export const ACTION_HIDE_LOADER = 'ACTION_HIDE_LOADER';

export function setKebabClose() {
    return {type: ACTION_CLOSE_KEBAB};
}

export function setKebabOpen(id) {
    return {type: ACTION_OPEN_KEBAB, payload: id};
}

export function setModalClose() {
    return {type: ACTION_CLOSE_MODAL};
}

export function setModalOpen(id) {
    return {type: ACTION_OPEN_MODAL, payload: id};
}

export function setWindowChatOpen() {
    return {type: ACTION_OPEN_WINDOW_CHAT};
}

export function setWindowChatClose() {
    return {type: ACTION_CLOSE_WINDOW_CHAT};
}

export function setLoaderShow() {
    return {type: ACTION_SHOW_LOADER};
}

export function setLoaderHide() {
    return {type: ACTION_HIDE_LOADER};
}
