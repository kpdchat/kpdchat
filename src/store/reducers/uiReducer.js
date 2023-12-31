import {
    ACTION_CLOSE_KEBAB,
    ACTION_OPEN_KEBAB,
    ACTION_OPEN_MODAL,
    ACTION_CLOSE_MODAL,
    ACTION_OPEN_WINDOW_CHAT,
    ACTION_CLOSE_WINDOW_CHAT,
    ACTION_SHOW_LOADER,
    ACTION_HIDE_LOADER,
    ACTION_SHOW_KEBAB_LOADER,
    ACTION_HIDE_KEBAB_LOADER,
    ACTION_SHOW_MESSAGES_LOADER,
    ACTION_HIDE_MESSAGES_LOADER,
    ACTION_OPEN_MESSAGES,
    ACTION_CLOSE_MESSAGES,
    ACTION_OPEN_NAVIGATION,
    ACTION_CLOSE_NAVIGATION
} from '../actions/uiActions'

const initialState = {
    isOpen: false,
    isActiveFolderKebab: false,
    idKebab: 0,
    isModal: false,
    modalId: 0,
    isOpenChat: false,
    isActiveLoader: false,
    isActiveMessagesLoader: false,
    loaderId: 0,
    isOpenMessage: false,
    isOpenNav: false,
}

export default function uiReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_CLOSE_KEBAB: {
            return {
                ...state,
                isActiveFolderKebab: false,
                isOpen: false,
                idKebab: 0,
            }
        }
        case ACTION_OPEN_KEBAB: {
            return {
                ...state,
                isActiveFolderKebab: true,
                isOpen: true,
                idKebab: payload,
            }
        }
        case ACTION_CLOSE_MODAL: {
            return {
                ...state,
                isModal: false,
                idKebab: 0,
                modalId: 0,
                isOpen: false,
            }
        }
        case ACTION_OPEN_MODAL: {
            return {
                ...state,
                isModal: true,
                idKebab: 0,
                modalId: payload,
            }
        }
        case ACTION_OPEN_WINDOW_CHAT: {
            return {
                ...state,
                isOpenChat: true,
            }
        }
        case ACTION_CLOSE_WINDOW_CHAT: {
            return {
                ...state,
                isOpenChat: false,
            }
        }
        case ACTION_SHOW_LOADER: {
            return {
                ...state,
                isActiveLoader: true
            }
        }
        case ACTION_HIDE_LOADER: {
            return {
                ...state,
                isActiveLoader: false
            }
        }
        case ACTION_SHOW_KEBAB_LOADER: {
            return {
                ...state,
                isActiveLoader: true,
                loaderId: payload,
            }
        }
        case ACTION_HIDE_KEBAB_LOADER: {
            return {
                ...state,
                isActiveLoader: false,
                loaderId: 0,
            }
        }
        case ACTION_SHOW_MESSAGES_LOADER: {
            return {
                ...state,
                isActiveMessagesLoader: true,
            }
        }
        case ACTION_HIDE_MESSAGES_LOADER: {
            return {
                ...state,
                isActiveMessagesLoader: false,
            }
        }
        case ACTION_OPEN_MESSAGES: {
            return {
                ...state,
                isOpenMessage: true,
            }
        }
        case ACTION_CLOSE_MESSAGES: {
            return {
                ...state,
                isOpenMessage: false,
            }
        }
        case ACTION_OPEN_NAVIGATION: {
            return {
                ...state,
                isOpenNav: true,
            }
        }
        case ACTION_CLOSE_NAVIGATION: {
            return {
                ...state,
                isOpenNav: false,
            }
        }
        default: return state;
    }
}
