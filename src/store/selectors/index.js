// import { createSelector } from 'reselect'

export const selectUi = state => state.ui
export const selectModal = state => state.ui.isModal
export const selectEditFolder = state => state.user.editFolder
export const selectDeleteFolder = state => state.user.deleteFolder
export const selectUser = state => state.user.user
export const selectOpenChat = state => state.ui.isOpenChat

